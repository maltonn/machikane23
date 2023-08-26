import { useEffect, useState, useRef } from "react";
import "../../css/Project.css"
import "../../css/Common.css"
import { Helmet } from "react-helmet";
export default function Project() {

    const projectLst = useRef([])
    const [displayLst, setDisplayLst] = useState([])



    const [inputValue, setInputValue] = useState("")
    const [nowBuildingFilterCheck, setNowBuildingFilterCheck] = useState(false)
    const [forChildFilterCheck, setForChildFilterCheck] = useState(false)
    const [avoidCrowdFilterCheck, setAvoidCrowdFilterCheck] = useState(false)


    useEffect(() => {
        fetch("https://app.tyuujitu-system.net/api/machikane23/website/pr.json").then((res) => {
            return res.json()
        }
        ).then((res) => {
            const lst = Object.values(res)
            console.log(lst)
            projectLst.current = lst
            setDisplayLst(lst)
        })
    }, [])


    const onChangeInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const onPickupKeywordClick = (keyword) => {
        setInputValue(keyword)
    }

    // 検索ボタンが押された時の処理
    const onClickSearchBtn = () => {
        const addedLst=[]

        // フリーワード検索

    }

    return (
        <div className="main">
            <Helmet>
                <title>企画検索|まちかね祭2023</title>
            </Helmet>
            <h2>ここにproject-searchページ</h2>

            <div>
                <input
                    placeholder="フリーワード"
                    value={inputValue}
                    onChange={onChangeInputValue}
                ></input>
            </div>

            {/* おすすめキーワード */}
            <div className="pickup-keyword-container">
                {
                    ["ダンス", "ライブ", "模擬店"].map((keyword) => {
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

            {/* チェックボックス */}
            <div>
                <div>
                    <label htmlFor="checkbox1">
                        <input type="checkbox" id="checkbox1" checked={nowBuildingFilterCheck} onChange={() => setNowBuildingFilterCheck(prevState => !prevState)} />
                        <span>今いる建物内で検索</span>
                    </label>
                </div>
                <div>
                    <label htmlFor="checkbox2">
                        <input type="checkbox" id="checkbox2" checked={forChildFilterCheck} onChange={() => setForChildFilterCheck(prev => !prev)} />
                        <span>子供向け</span>
                    </label>
                </div>
                <div>
                    <label htmlFor="checkbox3">
                        <input type="checkbox" id="checkbox3" checked={avoidCrowdFilterCheck} onChange={() => setAvoidCrowdFilterCheck(prev => !prev)} />
                        <span>混雑している企画を除く</span>
                    </label>
                </div>
            </div>
            <button onClick={onClickSearchBtn}>検索</button>

            {/* 検索結果 */}
            <div>
                {displayLst.map((project) => {
                    if(!project){
                        return null
                    }
                    return (
                        <div key={project.id} className="project-container">
                            <div>{project.projectName}</div>
                            <div>{project.groupName}</div>
                            <div>{project.pamphletText}</div>
                            <img src={project.icon} className="project-card-icon"></img>
                            <div>{project.eventPlace}</div>
                        </div>
                    )
                })}
            </div>
            <a href="./">トップページへ戻る</a>
        </div>
    )
}