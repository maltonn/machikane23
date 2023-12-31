import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../../css/LabOpen.css"
import "../../css/Common.css"
import { Helmet } from "react-helmet";
import lab_icon from "../../imgs/lab_icon.svg";
import lab_json from "../../data/openLab.json";
import PageTitles from "../../components/PageTitles";
import Bubble from "../../components/Bubble";
const shuffleArray = (array) => {
    return array.slice().sort(() => Math.random() - Math.random())
}

export default function LabOpen() {
    const projectLst = useRef([]) // こっちにはすべてのプロジェクトが入る
    const [displayLst, setDisplayLst] = useState([]) // 表示するプロジェクト（検索ボタンを押したときにこっちだけ書き換わる）

    //フォームのデータが入る変数
    const [inputValue, setInputValue] = useState("")
    const inputValueRef = useRef(inputValue)
    useEffect(() => {//inputValueが変わったらinputValueRefも変わる
        inputValueRef.current = inputValue
    }, [inputValue])

    const [loadingNum, setLoadingNum] = useState(10)

    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        let lst = Object.values(lab_json)
        lst=lst.filter((project)=>project!=null)
        projectLst.current = lst 
        setDisplayLst(shuffleArray(lst)) 
    }, [])


    const onChangeInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const onPickupKeywordClick = (keyword) => {
        setInputValue(keyword)
    }

    // 検索ボタンが押された時の処理
    const onClickSearchBtn = () => {
        const keyScoreLst={
            "projectName":15,
            "projectNameEn":15,
            "pr":10,
            "prEn":10,

            "keyword":10,

            "labName":5,
            "labNameEn":5,
            "departmentName":4,
            "departmentNameEn":4,
            "course":4,
            "courseEn":4,

            "eventPlace":3,
            "eventPlaceEn":3,
            "id":2,
            "date":2,
            "dateEn":2,
        }

        let scoreLst= projectLst.current.map((project) => {
            let score=0
            const keywords=inputValue.replace("　"," ").split(" ")
            for(let keyword of keywords){
                for(let key of Object.keys(keyScoreLst)){
                    if((""+project[key]).includes(keyword)){
                        score+=keyScoreLst[key]
                    }
                }
            }
            return score
        })
        scoreLst=scoreLst.map((score)=>score>0?score+Math.random()*5:score)//ランダム要素を強めに入れたい

        const dic={}
        for(let i=0;i<scoreLst.length;i++){
            dic[projectLst.current[i].id]=scoreLst[i]
        }

        projectLst.current.sort((a,b)=>{
            return dic[b.id]-dic[a.id]
        })
        const under_zero_count=scoreLst.filter((score)=>score<=0).length
        setDisplayLst(projectLst.current.slice(0,projectLst.current.length-under_zero_count))
        
    }

    const onClickClearBtn = () => {
        setInputValue("")
        setTimeout(() => {
            onClickSearchBtn()
        },10)
    }

    const PageChange=()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return(
        <div className="main">
            <Helmet>
            <title>研究室公開|まちかね祭2023</title>
            </Helmet>
            <div className="sky-project">
                <div className="search-header">
                    <PageTitles titles="研究室公開" kame={true}></PageTitles>
                    <div className="search-mainpage"> 
                        <div>
                            <input
                                placeholder="フリーワード"
                                value={inputValue}
                                id="serch_word"
                                onChange={onChangeInputValue}
                            ></input>
                        </div>

                        {/* おすすめキーワード */}
                        <div className="pickup-keyword-container">例:
                            {
                                ["基礎工学", "理学", "センター"].map((keyword) => {
                                    return (
                                        <div
                                            onClick={() => onPickupKeywordClick(keyword)}
                                            key={keyword}
                                            className="pickup-keyword"
                                        >
                                            {keyword}
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <button onClick={onClickSearchBtn}>検索</button>
                        <button onClick={onClickClearBtn}>クリア</button>
                    </div>
                </div>

                {/* 検索結果 */}
                <div className="search-result">{displayLst.length}件 ヒットしました。</div>
                <div>
                    {displayLst.slice(0,loadingNum).map((project) => {
                        if(!project){
                            return null
                        }
                        return (
                            <div key={project.id} className="lab-container">
                                <img src={lab_icon} className="lab-card-icon" alt="icon"></img>
                                <div className="labCard-content">
                                    <div className="labCard-head">
                                        <div className="labProjectName">{project.projectName}</div>
                                        <div className="labCard-organizer">
                                            <div>{project.departmentName}</div>
                                            <div>{project.labName}</div>
                                        </div>
                                    </div>
                                    <div className="labCard-firstContent">
                                        <div>実施日時：{project.date}</div>
                                        <div>実施場所：{project.eventPlace}</div>
                                    </div>
                                    <div className="labCard-secondContent">{project.pr}</div>
                                    <div className="labCard-contentTitle">▷お問い合わせ先</div>
                                    <div className="labCard-thirdContent">
                                        <div>{project.course}</div>
                                        <div>{project.manager}</div>
                                        {project.tel &&
                                        <div><a href={'tel:'+project.tel}>{project.tel}</a></div>
                                        }
                                        {project.mail &&
                                        <div><a href={'mailto:'+project.mail}>{project.mail}</a></div>
                                        }
                                    </div>
                                    {project.hpLink &&
                                    <div>
                                        <div className="labCard-contentTitle">▷ホームページ</div>
                                        <a href={project.hpLink} target="_blank" rel="noreferrer">{project.hpLink}</a>
                                    </div>
                                    }
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="more-load">
                    {loadingNum<displayLst.length&& 
                        <button onClick={()=>setLoadingNum(loadingNum+20)}>もっと見る</button>
                    }
                </div>
                <Link className="toTheTop" to="/" onClick={PageChange}>トップページへ戻る</Link>
            </div>
            <div className="ocean">
                <div className="bottom">
                </div>
            </div>
            <Bubble bubbleSwitch={false}></Bubble>
        </div>
    )
}