import { Helmet } from "react-helmet";
import { useState, useRef, useEffect } from "react";
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
    const [QuestionLst, setQuestionLst] = useState([
        {
            "id": "Q1",//一意に特定できればなんでもよい　逆に、他ページとかで同じ内容の質問をするなら同じIDが良い
            "question": "あなたに最も当てはまるものを選択してください。",
            "type": "radio", //radio,checkbox,textarea,text
            "option": ["阪大生", "阪大院生", "阪大教職員", "他大学生", "高校生", "出展団体関係者の保護者", "大阪大学豊中キャンパス周辺在住者", "近畿圏在住者", "その他(自由記述)"], //typeがradio,checkboxの時のみ
            "answer": "",
        },{
            "id": "Q1-1",
            "question": "その他(自由記述)",
            "type": "text",
            "visible-if": "Q1==その他(自由記述)", //現状使えるのは== or != のみ
            "answer": "",
        },{
            "id": "Q2",
            "question": "ご来場された日にちをお聞かせください。(複数回答可)",
            "type": "checkbox",
            "option": ["11/3(金)", "11/4(土)", "11/5(日)"],
            "answer": [],
        },{
            "id": "Q3-1",
            "question": "来場回数をお聞かせください。",
            "type": "radio",
            "option": ["初めて", "2回", "3回", "4回以上"],
            "answer": "",
        },{
            "id": "Q3-2",
            "question": "どこから来ましたか(地方)",
            "type": "pulldown",
            "option": ["北海道地方", "東北地方", "関東地方", "中部地方", "近畿地方", "中国地方", "四国地方", "九州地方", "その他(自由記述)"],
            "answer": "",
        },{
            "id": "Q3-3",
            "question": "どこから来ましたか(都道府県)",
            "type": "pulldown",
            "option": ["北海道"],
            "visible-if": "Q3-2==北海道地方",
            "answer": "",
        },{
            "id": "Q3-3",
            "question": "どこから来ましたか(都道府県)",
            "type": "pulldown",
            "option": ["青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県"],
            "visible-if": "Q3-2==東北地方",
            "answer": "",
        },{
            "id": "Q3-3",
            "question": "どこから来ましたか(都道府県)",
            "type": "pulldown",
            "option": ["茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県"],
            "visible-if": "Q3-2==関東地方",
            "answer": "",
        },{
            "id": "Q3-3",
            "question": "どこから来ましたか(都道府県)",
            "type": "pulldown",
            "option": ["新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県", "愛知県"],
            "visible-if": "Q3-2==中部地方",
            "answer": "",
        },{
            "id": "Q3-3",
            "question": "どこから来ましたか(都道府県)",
            "type": "pulldown",
            "option": ["三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県"],
            "visible-if": "Q3-2==近畿地方",
            "answer": "",
        },{
            "id": "Q3-3",
            "question": "どこから来ましたか(都道府県)",
            "type": "pulldown",
            "option": ["鳥取県", "島根県", "岡山県", "広島県", "山口県"],
            "visible-if": "Q3-2==中国地方",
            "answer": "",
        },{
            "id": "Q3-3",
            "question": "どこから来ましたか(都道府県)",
            "type": "pulldown",
            "option": ["徳島県", "香川県", "愛媛県", "高知県"],
            "visible-if": "Q3-2==四国地方",
            "answer": "",
        },{
            "id": "Q3-3",
            "question": "どこから来ましたか(都道府県)",
            "type": "pulldown",
            "option": ["福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"],
            "visible-if": "Q3-2==九州地方",
            "answer": "",
        },{
            "id": "Q3-3",
            "question": "その他(自由記述)",
            "type": "text",
            "visible-if": "Q3-2==その他(自由記述)",
            "answer": "",
        },{
            "id": "Q3-4",
            "question": "どこから来ましたか(大阪府)",
            "type": "radio",
            "option": ["豊中市", "箕面市", "池田市", "その他(自由記述)"],
            "visible-if": "Q3-3==大阪府",
            "answer": "",
        },{
            "id": "Q3-5",
            "question": "その他(自由記述)",
            "type": "text",
            "visible-if": "Q3-4==その他(自由記述)",
            "answer": "",
        },{
            "id": "Q4",
            "question": "まちかね祭にご来場の際、どのような方法で来場されましたか。",
            "type": "radio",
            "option": ["電車", "バス", "タクシー", "その他公共交通機関", "徒歩", "自転車", "自家用車", "その他(自由記述)"],
            "answer": "",
        },{
            "id": "Q4-1",
            "question": "その他(自由記述)",
            "type": "text",
            "visible-if": "Q4==その他(自由記述)",
            "answer": "",
        },{
            "id": "Q4-1",
            "question": "(電車と答えた方へ)どの駅を利用しましたか",
            "type": "radio",
            "option": ["石橋阪大前駅(阪急宝塚線等)", "柴原阪大前(大阪モノレール)", "その他(自由記述)"],
            "visible-if": "Q4==電車",
            "answer": "",
        },{
            "id": "Q4-2",
            "question": "その他(自由記述)",
            "type": "text",
            "visible-if": "Q4-1==その他(自由記述)",
            "answer": "",
        },{
            "id": "Q5",
            "question": "まちかね祭についての情報はどこから手に入れましたか？(複数回答可)",
            "type": "checkbox",
            "option": ["まちかね祭のWebサイト", "まちかね祭の𝕏(旧Twitter)", "まちかね祭のInstagram", "当委員会以外の出展団体のSNS", "大阪大学のWebサイト", "大阪大学構内に掲示されたポスター", "阪急石橋阪大前駅に掲示されたポスター", "大阪モノレール柴原阪大前駅に掲示されたポスター", "投函されたチラシ", "その他(自由記述)", "覚えていない"],
            "answer": [],
        },{
            "id": "Q5-1",
            "question": "その他(自由記述)",
            "type": "text",
            "visible-if": "Q5==その他(自由記述)",
            "answer": "",
        },{
            "id": "Q6",
            "question": "小学生以下のお子様と来場されましたか？",
            "type": "radio",
            "option": ["した", "しなかった"],
            "answer": "",
        },{
            "id": "Q7",
            "question": "今年度のまちかね祭の満足度をお聞かせください。",
            "type": "radio",
            "option": ["5(満足)","4","3","2", "1(不満足)"],
            "answer": "",
        },{
            "question":"模擬店・食事席について",
            "type": "section",
            "answer": "none"
        },{
            "id": "Q8-1",
            "question": "メインストリート周辺に設置された食事席/模擬店の満足度をお聞かせください。",
            "type": "radio",
            "option": ["5(満足)","4","3","2", "1(不満足)", "利用していない"],
            "answer": "",
        },{
            "id": "Q8-2",
            "question": "「ここに食事席がほしかった」「ここの食事席は不要だった」と感じた食事席はありましたか？",
            "type": "textarea",
            "visible-if": "Q8-1!=利用していない",
            "answer": "",
        },{
            "id": "Q8-3",
            "question": "食事席/模擬店について何かご要望・ご意見があれば、ぜひお聞かせください。",
            "type": "textarea",
            "visible-if": "Q8-1!=利用していない",
            "answer": "",
        },{
            "question":"総合案内所・インフォメーションについて",
            "type": "section",
            "answer": "none"
        },{
            "id": "Q9-1",
            "question": "メインストリートに設置された総合案内所・インフォメーションの満足度をお聞かせください。",
            "type": "radio",
            "option": ["5(満足)","4","3","2", "1(不満足)", "利用していない"],
            "answer": "",
        },{
            "id": "Q9-2",
            "question": "総合案内所・インフォメーションについてご要望・ご意見があれば、ぜひお聞かせください。",
            "type": "textarea",
            "visible-if": "Q9-1!=利用していない",
            "answer": "",
        },{
            "question":"パンフレットについて",
            "type": "section",
            "answer": "none"
        },{
            "id": "Q10-1",
            "question": "当委員会作成のパンフレットはご覧になりましたか？(複数回答可)",
            "type": "checkbox",
            "option": ["当日配布の紙のパンフレットを見た", "Webサイトで公開されていたパンフレットを見た", "見ていない"],
            "answer": [],
        },{
            "id": "Q10-2",
            "question": "パンフレットについて何かご要望・ご意見があれば、ご自由にお書きください。",
            "type": "textarea",
            "answer": "",
        },{
            "question":"グッズについて",
            "type": "section",
            "answer": "none"
        },{
            "id": "Q11-1",
            "question": "まちかね祭オリジナルグッズの満足度をお聞かせください。",
            "type": "radio",
            "option": ["5(満足)","4","3","2", "1(不満足)", "買っていない"],
            "answer": "",
        },{
            "id": "Q11-2",
            "question": "グッズについて、販売してほしいグッズやご要望・ご意見があれば、ぜひお聞かせください。",
            "type": "textarea",
            "visible-if": "Q11-1!=買っていない",
            "answer": "",
        },{
            "question":"SNSについて",
            "type": "section",
            "answer": "none"
        },{
            "id": "Q12-1",
            "question": "まちかね祭のSNS投稿[𝕏(旧Twitter)、Instagram]の満足度をお聞かせください。",
            "type": "radio",
            "option": ["5(満足)","4","3","2", "1(不満足)", "見ていない"],
            "answer": "",
        },{
            "id": "Q12-2",
            "question": "当委員会のSNSの発信内容についてご意見・ご要望があればお聞かせください。",
            "type": "textarea",
            "visible-if": "Q12-1!=見ていない",
            "answer": "",
        },{
            "question":"Webについて",
            "type": "section",
            "answer": "none"
        },{
            "id": "Q13-1",
            "question": "当委員会作成の公式Webサイト(https://machikanesai.com/23/)の満足度をお聞かせください。",
            "type": "radio",
            "option": ["5(満足)","4","3","2", "1(不満足)", "見ていない"],
            "answer": "",
        },{
            "id": "Q13-2",
            "question": "Webサイトについてご意見・ご要望があれば、自由にお書きください。",
            "type": "textarea",
            "visible-if": "Q13-1!=見ていない",
            "answer": "",
        },{
            "question":"実行委員企画について",
            "type": "section",
            "answer": "none"
        },{
            "id": "Q14-1",
            "question": "実行委員企画「O-1グランプリ」の満足度をお聞かせください。",
            "type": "radio",
            "option": ["5(満足)","4","3","2", "1(不満足)", "参加していない"],
            "answer": "",
        },{
            "id": "Q14-2",
            "question": "実行委員企画「O-1 グランプリ」について、何かご要望・ご意見があればぜひお聞かせください。",
            "type": "textarea",
            "visible-if": "Q14-1!=参加していない",
            "answer": "",
        },{
            "id": "Q14-3",
            "question": "実行委員企画「マチカネプリーグ」の満足度をお聞かせください。",
            "type": "radio",
            "option": ["5(満足)","4","3","2", "1(不満足)", "参加していない"],
            "answer": "",
        },{
            "id": "Q14-4",
            "question": "実行委員企画「マチカネプリーグ」について、何かご要望・ご意見があればぜひお聞かせください。",
            "type": "textarea",
            "visible-if": "Q14-3!=参加していない",
            "answer": "",
        },{
            "id": "Q14-5",
            "question": "実行委員企画「まちかねの森」の満足度をお聞かせください。",
            "type": "radio",
            "option": ["5(満足)","4","3","2", "1(不満足)", "参加していない"],
            "answer": "",
        },{
            "id": "Q14-6",
            "question": "実行委員企画「まちかねの森」について、何かご要望・ご意見があればぜひお聞かせください。",
            "type": "textarea",
            "visible-if": "Q14-5!=参加していない",
            "answer": "",
        },{
            "id": "Q14-7",
            "question": "実行委員企画「ぱんけえき焼きた亭」の満足度をお聞かせください。",
            "type": "radio",
            "option": ["5(満足)","4","3","2", "1(不満足)", "参加していない"],
            "answer": "",
        },{
            "id": "Q14-8",
            "question": "実行委員企画「ぱんけえき焼きた亭」について、何かご要望・ご意見があればぜひお聞かせください。",
            "type": "textarea",
            "visible-if": "Q14-7!=参加していない",
            "answer": "",
        },{
            "question":"さいごに",
            "type": "section",
            "answer": "none"
        },{
            "id": "Q15",
            "question": "当委員会へのご要望・ご意見があれば、ぜひお聞かせください。",
            "type": "textarea",
            "answer": "",
        }
    ]);


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
                    return false
                }) && (
                    <button onClick={handleSubmit}>送信</button>
                )
            }
        </div>
    )
}