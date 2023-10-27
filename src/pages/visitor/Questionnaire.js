import { Helmet } from "react-helmet";
import { useState, useRef, useEffect } from "react";
import "../../css/Common.css"
import "../../css/About.css"

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
        const answerLst=QuestionLst.map((question,index)=>{
            return {
                "id":question.id,
                "answer":question.answer
            }
        })
        console.log(answerLst)
        const url=`https://78dxhy83s3.execute-api.ap-northeast-1.amazonaws.com/default/ConnectDB?uid=${uid.current}&body=${JSON.stringify(answerLst)}`
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
    const [QuestionLst, setQuestionLst] = useState([
        {
            "id": "Q1",//一意に特定できればなんでもよい　逆に、他ページとかで同じ内容の質問をするなら同じIDが良い
            "question": "あなたに最も当てはまるものを選択してください。",
            "type": "radio", //radio,checkbox,textarea,text
            "option": ["阪大生", "阪大院生", "阪大教職員","他大学生","高校生","出展団体関係者の保護者","大阪大学豊中キャンパス周辺在住者","近畿圏在住者","その他"], //typeがradio,checkboxの時のみ
            "answer": "",
        }, {
            "id": "Q1-1",
            "question": "その他(自由記述)",
            "type": "textarea",
            "visible-if": "Q1==その他", //現状使えるのは==のみ
            "answer": "",
        }, {
            "id": "Q1-2",
            "question": "パンフについて意見があれば",
            "type": "textarea",
            "visible-if": "Q1-1==はい",
            "answer": "",
        }, {
            "id": "Q1-3",
            "question": "グッズは買いましたか",
            "type": "radio",
            "option": ["はい", "いいえ"],
            "visible-if": "Q1==はい",
            "answer": "",
        }, {
            "id": "Q1-4",
            "question": "買ったグッズを教えてください",
            "type": "checkbox",
            "option": ["ボールペン", "ハンカチ", "なんか"],
            "visible-if": "Q1-3==はい",
            "answer": [],
        }
    ]);
    

    if(isDoneSubmit){
        return(
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
                        <h2>送信しました</h2>
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
            <div className="sky">
                <div className="top">
                    <div className="title">
                        <h1>来場者アンケート</h1>
                    </div>
                </div>
                <div className="mainpage">
                    {
                        QuestionLst.map((question, index) => {
                            if (question["visible-if"]) {
                                if (question["visible-if"].includes("==")) {
                                    const qid = question["visible-if"].split("==")[0];
                                    const ans = question["visible-if"].split("==")[1];
                                    if (QuestionLst[Idx(qid)].answer != ans) {
                                        return null
                                    }
                                } else if (question["visible-if"].includes("!=")) {
                                    const qid = question["visible-if"].split("!=")[0];
                                    const ans = question["visible-if"].split("!=")[1];
                                    if (QuestionLst[Idx(qid)].answer == ans) {
                                        return null
                                    }
                                }
                            }
                            if (question.type == "radio") {
                                return (
                                    <div className="question" key={index}>
                                        <h2>{question.id + '. ' + question.question}</h2>
                                        <span>{question.submitted ? "✓" : ""}</span>
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
                                                                } else {
                                                                    QuestionLst[Idx(question.id)]["answer"].splice(QuestionLst[Idx(question.id)]["answer"].indexOf(e.target.value), 1);
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
                                        <span>{question.submitted ? "✓" : ""}</span>
                                        <textarea
                                            name={question.id}
                                            id={question.id} cols="30" rows="10"
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
                                        <span>{question.submitted ? "✓" : ""}</span>
                                        {
                                            question.option.map((opt, index) => {
                                                return (
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
                                                )
                                            })
                                        }
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
                            if (QuestionLst[Idx(qid)].answer != ans) {
                                return true
                            }
                        } else if (question["visible-if"].includes("!=")) {
                            const qid = question["visible-if"].split("!=")[0];
                            const ans = question["visible-if"].split("!=")[1];
                            if (QuestionLst[Idx(qid)].answer == ans) {
                                return true
                            }
                        }
                    }
                    if (question.answer) {
                        return true
                    }
                    return false
                }) && (
                    <button onClick={handleSubmit}>送信</button>
                )
            }
        </div>
    )
}