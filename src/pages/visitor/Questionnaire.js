import { Helmet } from "react-helmet";
import { useState, useRef, useEffect } from "react";
import Q from "./QuestionContens.js"
import "../../css/Common.css"
import "../../css/Questionnaire.css"
import PageTitles from "../../components/PageTitles";

function createUuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (a) {
        let r = (new Date().getTime() + Math.random() * 16) % 16 | 0, v = a == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export default function Questionnaire() {
    const uid = useRef("");
    useEffect(() => {
        uid.current = localStorage.getItem("uid");
        if (uid.current == null) {
            uid.current = createUuid();
            localStorage.setItem("uid", uid.current);
        }
    }, [])


    const ReqToDB = () => {
        const answerLst = QuestionLst.map((question, index) => {
            return {
                "id": question.id,
                "answer": question.answer
            }
        })
        let lst = Object.values(answerLst)
        lst=lst.filter((question) => question.answer !== 'none')
        answerLst.current=lst
        console.log(answerLst)
        const url = `https://78dxhy83s3.execute-api.ap-northeast-1.amazonaws.com/default/ConnectDB?uid=${uid.current}&body=${JSON.stringify(answerLst)}`
        console.log(url)
        //post
        fetch(url).then((res) => {
            console.log(res);
            setIsDoneSubmit(true);
        }
        ).catch((error) => {
            console.error('Error:', error);
            window.alert("ネットワークエラー")
        });
    }

    const [isDoneSubmit, setIsDoneSubmit] = useState(false);//送信済みかどうか
    const handleSubmit = () => {
        ReqToDB();
    }

    useEffect(() => {//閉じるときに途中までの結果を送信
        const beforeunloadEvent = (e) => {
            if (isDoneSubmit) {
                return;
            }
            ReqToDB();

        }
        window.addEventListener("beforeunload", beforeunloadEvent)
        return () => {
            window.removeEventListener("beforeunload", beforeunloadEvent)
        }
    }, [isDoneSubmit])


    const Idx = (id) => {
        let idx = 0;
        QuestionLst.forEach((question, index) => {
            if (question.id == id) {
                idx = index;
            }
        })
        return idx;
    }
    const [QuestionLst, setQuestionLst] = useState(Q);


    if (isDoneSubmit) {
        return (
            <div className="main">
                <Helmet>
                    <title>アンケート|まちかね祭2023</title>
                </Helmet>
                <div className="sky">
                    <div className="top">
                        <div className="title">
                            <h1>アンケート</h1>
                        </div>
                    </div>
                    <div className="mainpage">
                        <h2>送信しました。ご協力ありがとうございました。</h2>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="main">
            <Helmet>
                <title>来場者アンケート|まちかね祭2023</title>
            </Helmet>
            <div className="questionnaire-sky">
                <PageTitles titles="来場者アンケート" kame={true}></PageTitles>
                <div className="questionnaire_comment">今後の大学祭運営のため、来場者アンケートの回答にご協力をお願いいたします。皆様のご回答を心よりお待ちしております。</div>
                <div className="questionnaire">
                    {
                        QuestionLst.map((question, index) => {
                            if (question["visible-if"]) {
                                if (question["visible-if"].includes("==")) {
                                    const qid = question["visible-if"].split("==")[0];
                                    const ans = question["visible-if"].split("==")[1];
                                    if(Array.isArray(QuestionLst[Idx(qid)].answer)){
                                        if(!QuestionLst[Idx(qid)].answer.includes(ans)){
                                            return null
                                        }
                                    }else if(QuestionLst[Idx(qid)].answer != ans) {
                                        return null
                                    }
                                } else if (question["visible-if"].includes("!=")) {
                                    const qid = question["visible-if"].split("!=")[0];
                                    const ans = question["visible-if"].split("!=")[1];
                                    if(Array.isArray(QuestionLst[Idx(qid)].answer)){
                                        if(QuestionLst[Idx(qid)].answer.includes(ans)){
                                            return null
                                        }
                                    }else if(QuestionLst[Idx(qid)].answer == ans) {
                                        return null
                                    }
                                }
                            }
                            if (question.type == "radio") {
                                return (
                                    <div className="question" key={index}>
                                        <h2>{question.id + '. ' + question.question}</h2>     
                                        {
                                            question.option.map((opt, index) => {
                                                return (
                                                    <div className="option" key={index}>
                                                        <input
                                                            type="radio"
                                                            name={question.id}
                                                            id={question.id + "-" + index}
                                                            value={opt}
                                                            checked={question.answer == opt}
                                                            onChange={(e) => {
                                                                QuestionLst[Idx(question.id)]["answer"] = e.target.value;
                                                                setQuestionLst([...QuestionLst])
                                                            }}
                                                        />
                                                        <label htmlFor={question.id + "-" + index}>{opt}</label>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            }
                            if (question.type == "checkbox") {
                                return (
                                    <div className="question" key={index}>
                                        <h2>{question.id + '. ' + question.question}</h2>
                                        {
                                            question.option.map((opt, index) => {
                                                return (
                                                    <div className="option" key={index}>
                                                        <input
                                                            type="checkbox"
                                                            name={question.id}
                                                            id={question.id + "-" + index}
                                                            value={opt}
                                                            onChange={(e) => {
                                                                if (e.target.checked) {
                                                                    QuestionLst[Idx(question.id)]["answer"].push(e.target.value);
                                                                    setQuestionLst([...QuestionLst])
                                                                } else {
                                                                    QuestionLst[Idx(question.id)]["answer"].splice(QuestionLst[Idx(question.id)]["answer"].indexOf(e.target.value), 1);
                                                                    setQuestionLst([...QuestionLst])
                                                                }
                                                            }}
                                                        />
                                                        <label htmlFor={question.id + "-" + index}>{opt}</label>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            }
                            if (question.type == "textarea") {
                                return (
                                    <div className="question" key={index}>
                                        <h2>{question.id + '. ' + question.question}</h2>
                                        <textarea
                                            name={question.id}
                                            id={question.id}
                                            onChange={
                                                (e) => {
                                                    QuestionLst[Idx(question.id)]["answer"] = e.target.value;
                                                    setQuestionLst([...QuestionLst])
                                                }
                                            }
                                            value={question.answer}
                                        ></textarea>
                                    </div>
                                )
                            }
                            if (question.type == "text") {
                                return (
                                    <div className="question" key={index}>
                                        <h2>{question.id + '. ' + question.question}</h2>
                                        <div className="option" key={index}>
                                            <input
                                                type="text"
                                                name={question.id}
                                                id={question.id}
                                                onChange={
                                                    (e) => {
                                                        QuestionLst[Idx(question.id)]["answer"] = e.target.value;
                                                        setQuestionLst([...QuestionLst])
                                                    }
                                                }
                                                value={question.answer}
                                            />
                                        </div>
                                    </div>
                                )
                            }
                            if (question.type == "pulldown") {
                                return (
                                    <div className="question" key={index}>
                                        <h2>{question.id + '. ' + question.question}</h2>
                                        <select 
                                            name={question.id}
                                            className="option"
                                            key={index}
                                            onChange={(e) => {
                                                QuestionLst[Idx(question.id)]["answer"] = e.target.value;
                                                setQuestionLst([...QuestionLst])
                                            }}
                                        >    
                                            <option hidden value="">選択してください</option>
                                        {
                                            question.option.map((opt, index) => {
                                                return (
                                                        <option
                                                            id={question.id + "-" + index}
                                                            value={opt}
                                                            // checked={question.answer == opt}
                                                        >{opt}</option>
                                                )
                                            })
                                        }
                                        </select>
                                    </div>
                                )
                            }
                            if (question.type == "section") {
                                return (
                                    <div className="title">
                                        <h2>{question.question}</h2>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
            {
                QuestionLst.every((question, index) => {
                    if (question["visible-if"]) {
                        if (question["visible-if"].includes("==")) {
                            const qid = question["visible-if"].split("==")[0];
                            const ans = question["visible-if"].split("==")[1];
                            if(Array.isArray(QuestionLst[Idx(qid)].answer)){
                                if(!QuestionLst[Idx(qid)].answer.includes(ans)){
                                    return true
                                }
                            }else if(QuestionLst[Idx(qid)].answer != ans) {
                                return true
                            }
                        } else if (question["visible-if"].includes("!=")) {
                            const qid = question["visible-if"].split("!=")[0];
                            const ans = question["visible-if"].split("!=")[1];
                            if(Array.isArray(QuestionLst[Idx(qid)].answer)){
                                if(QuestionLst[Idx(qid)].answer.includes(ans)){
                                    return true
                                }
                            }else if(QuestionLst[Idx(qid)].answer == ans) {
                                return true
                            }
                        }
                    }
                    if(question.type=="section"){
                        return true
                    }
                    if(question.type=="text" || question.type=="textarea"){
                        return true
                    }
                    if (question.answer) {
                        return true
                    }
                    console.log(question)
                    return false
                }) && (
                    <button onClick={handleSubmit}>送信</button>
                )
            }
        </div>
    )
}