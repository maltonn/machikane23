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


    const ReqToDB = (qid, ans) => {
        fetch(`https://78dxhy83s3.execute-api.ap-northeast-1.amazonaws.com/default/ConnectDB?uid=${uid}&qid=${qid}&ans=${ans}}`).then((res) => {
            return res.json();
        }
        ).then((data) => {
            console.log(data);
            QuestionLst[Idx(qid)]["submitted"] = true;
            setQuestionLst([...QuestionLst])
        }).catch((err) => {
            console.log(err);
        }
        )
    }

    const [isDoneSubmit, setIsDoneSubmit] = useState(false);//送信済みかどうか
    const handleSubmit = () => {
        setIsDoneSubmit(true);
        // QuestionLst.forEach((question) => {
        //     if (question.answer != "") {
        //         ReqToDB(question.id, question.answer);
        //     }
        // })
    }

    useEffect(() => {//閉じるときに途中までの結果を送信
        const beforeunloadEvent = (e) => {
            if (isDoneSubmit) {
                return;
            }
            QuestionLst.forEach((question) => {
                if (question.answer != "") {
                    ReqToDB(question.id, question.answer);
                }
            })
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
            "question": "総合案内所に行きましたか",
            "type": "radio", //radio,checkbox,textarea
            "option": ["はい", "いいえ"], //typeがradio,checkboxの時のみ
            "answer": "",
        }, {
            "id": "Q1-1",
            "question": "パンフは受け取りましたか",
            "type": "radio",
            "option": ["はい", "いいえ"],
            "visible-if": "Q1==はい", //現状使えるのは==のみ
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
                <title>アンケート|まちかね祭2023</title>
            </Helmet>
            <div className="sky">
                <div className="top">
                    <div className="title">
                        <h1>アンケート</h1>
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
                                        <h2>{question.question}</h2>
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
                                                                ReqToDB(question.id, e.target.value)

                                                                if(Idx(question.id)-1>=0 && QuestionLst[Idx(question.id)-1].type=="textarea" ){
                                                                    ReqToDB(QuestionLst[Idx(question.id)-1].id, QuestionLst[Idx(question.id)-1].answer)
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
                            if (question.type == "checkbox") {
                                return (
                                    <div className="question" key={index}>
                                        <h2>{question.question}</h2>
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
                                                                    ReqToDB(question.id, e.target.value)
                                                                } else {
                                                                    ReqToDB(question.id, "-" + e.target.value)
                                                                }

                                                                if(Idx(question.id)-1>=0 && QuestionLst[Idx(question.id)-1].type=="textarea" ){
                                                                    ReqToDB(QuestionLst[Idx(question.id)-1].id, QuestionLst[Idx(question.id)-1].answer)
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
                                        <h2>{question.question}</h2>
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
                        })
                    }
                </div>
            </div>
            {
                QuestionLst.every((question, index) => {
                    if (question["visible-if"]) {
                        const qid = question["visible-if"].split("==")[0];
                        const ans = question["visible-if"].split("==")[1];
                        if (QuestionLst[Idx(qid)].answer != ans) {
                            return true
                        }
                    }
                    if (question.answer != "") {
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