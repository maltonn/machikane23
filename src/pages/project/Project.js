import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../../css/Project.css"
import "../../css/About.css"
import "../../css/Common.css"
import { Helmet } from "react-helmet";
import PageTitles from "../../components/PageTitles";

const shuffleArray = (array) => {
    return array.slice().sort(() => Math.random() - Math.random())
}

export default function Project() {
    const projectLst = useRef([]) // こっちにはすべてのプロジェクトが入る
    const [displayLst, setDisplayLst] = useState([]) // 表示するプロジェクト（検索ボタンを押したときにこっちだけ書き換わる）

    //フォームのデータが入る変数
    const [inputValue, setInputValue] = useState("")
    const inputValueRef = useRef(inputValue)
    useEffect(() => {//inputValueが変わったらinputValueRefも変わる
        inputValueRef.current = inputValue
    }, [inputValue])

    // const [nowBuildingFilterCheck, setNowBuildingFilterCheck] = useState(false)
    const [forChildFilterCheck, setForChildFilterCheck] = useState(false)
    const [avoidCrowdFilterCheck, setAvoidCrowdFilterCheck] = useState(false)

    //今いる建物の名前
    // const [nowStayingBuilding, setNowStayingBuilding] = useState("all")
    // const GetNowStayingBuilding = () => {
    //     // TODO 位置情報から現在の建物を取得
    //     setNowStayingBuilding("all")
    // }



    const [loadingNum, setLoadingNum] = useState(10)

    useEffect(() => {
        fetch("https://app.tyuujitu-system.net/api/machikane23/website/pr.json").then((res) => {
            return res.json()
        }
        ).then((res) => {
            let lst = Object.values(res)
            lst = lst.filter((project) => project != null)
            projectLst.current = lst
            setDisplayLst(shuffleArray(lst))
        })
    }, [])


    const onChangeInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const onPickupKeywordClick = (keyword) => {
        setInputValue(keyword);
        setTimeout(() => {
            onClickSearchBtn()
        },10)
    }

    // 検索ボタンが押された時の処理
    const onClickSearchBtn = () => {
        const keyScoreLst = {
            "projectName": 15,
            "projectNameEn": 15,
            "groupName": 10,
            "groupNameEn": 10,

            "keyword": 10,
            "additionalKeyword": 9,

            "groupNameKana": 5,
            "pamphletText": 5,
            "webText": 4,

            "projectGenre": 3,

            "eventPlace": 2,
            "cost": 2,
        }

        const keywords = inputValueRef.current.replace("　", " ").split(" ")
        
        let scoreLst = projectLst.current.map((project) => {
            project.additionalKeyword = ""

            project.additionalKeyword += {//模擬店　みたいな検索にたいしてキーワード検索が引っかかるように
                "kannai": "館内",
                "mogiten": "模擬店、屋台、昼食、お昼ごはん、eat",
                "stage": "ステージ、stage",
                "okugai": "屋外",
            }[project.section]

            // if(nowBuildingFilterCheck && nowStayingBuilding !== project.building && nowStayingBuilding!=="all"){
            //     return -1
            // }
            if (forChildFilterCheck && !project.age) {
                return -1
            }
            if (avoidCrowdFilterCheck && project.congestion === "混雑") {
                return -1
            }

            let score = 0
            for (let keyword of keywords) {
                for (let key of Object.keys(keyScoreLst)) {
                    if (("" + project[key]).includes(keyword)) {
                        score = Math.max(keyScoreLst[key], score)
                    }
                }
            }
            return score
        })
        scoreLst = scoreLst.map((score) => score > 0 ? score + Math.random() * 2 : score)//ランダム要素

        const dic = {}
        for (let i = 0; i < scoreLst.length; i++) {
            dic[projectLst.current[i].id] = scoreLst[i]
        }

        projectLst.current.sort((a, b) => {
            return dic[b.id] - dic[a.id]
        })
        const under_zero_count = scoreLst.filter((score) => score <= 0).length
        setDisplayLst(projectLst.current.slice(0, projectLst.current.length - under_zero_count))

    }

    const onClickClearBtn = () => {
        document.getElementById("serch_word").value = ""
        setInputValue("")
        var children = document.getElementById("checkbox2").checked
        if (children) {
            children = !children
            setForChildFilterCheck(prev => !prev)
        }
        var crowd = document.getElementById("checkbox3").checked
        if (crowd) {
            crowd = !crowd
            setAvoidCrowdFilterCheck(prev => !prev)
        }
    }

    function eventPlace(project) {
        if (project.section === "mogiten") {
            return "テント" + project.eventPlace
        } else if (project.section === "stage") {
            return "ステージ" + project.eventPlace
        } else {
            return project.eventPlace
        }
    }

    function visitorPhoto(project) {
        if (project.visitorPhoto) {
            return "撮影可"
        } else {
            return "撮影禁止"
        }
    }

    function children(project) {
        if (project.age) {
            return <div>子ども向け</div>
        } else {
            return null
        }
    }

    const PageChange=()=> {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    function detail(project) {
        return <Link className="toDetail" to={"/project-search/" + project.id} onClick={PageChange}>▷もっと見る</Link>
    }

    return (
        <div className="main">
            <Helmet>
                <title>企画検索|まちかね祭2023</title>
            </Helmet>
            <div className="sky-project">
                <div className="search-header">
                    <PageTitles titles="企画検索" kame={true}></PageTitles>
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
                                ["ダンス", "ライブ", "お昼ごはん"].map((keyword) => {
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
                            {/* <div>
                                <label htmlFor="checkbox1">
                                    <input type="checkbox" id="checkbox1" checked={nowBuildingFilterCheck} onChange={() => setNowBuildingFilterCheck(prevState => !prevState)} />
                                    <span>今いる建物内で検索</span>
                                </label>
                            </div> */}
                            <div>
                                <label htmlFor="checkbox2">
                                    <input type="checkbox" id="checkbox2" checked={forChildFilterCheck} onChange={() => setForChildFilterCheck(prev => !prev)} />
                                    <span>子ども向けの企画に絞る</span>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="checkbox3">
                                    <input type="checkbox" id="checkbox3" checked={avoidCrowdFilterCheck} onChange={() => setAvoidCrowdFilterCheck(prev => !prev)} />
                                    <span>混雑している企画を除く</span>
                                </label>
                            </div>
                        </div>
                        <div style={{ marginTop: '15px' }}>▷企画区分で絞る</div>
                        <div className="pickup-keyword-container">
                            {
                                ["館内", "屋外", "ステージ", "模擬店"].map((keyword) => {
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
                    {displayLst.slice(0, loadingNum).map((project) => {
                        if (!project) {
                            return null
                        }
                        return (
                            <Link className="card-detailLink" to={"/project-search/" + project.id} onClick={PageChange}>
                                <div key={project.id} className="project-container">
                                    <img src={project.icon} className="project-card-icon" alt="icon"></img>
                                    <div className="card-content">
                                        <div className="projectName">{project.projectName}</div>
                                        <div>{project.groupName}</div>
                                        <div>▷{eventPlace(project)}</div>
                                        <div className="card-tags">
                                            <div>{project.projectGenre}</div>
                                            <div>{project.cost}</div>
                                            <div>{visitorPhoto(project)}</div>
                                            {children(project)}
                                        </div>
                                        <div className="toDetailParent">{detail(project)}</div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
                <div className="more-load">
                    {loadingNum < displayLst.length &&
                        <button onClick={() => setLoadingNum(loadingNum + 20)}>もっと見る</button>
                    }
                </div>
                <Link className="toTheTop" to="/" onClick={PageChange}>トップページへ戻る</Link>
            </div>
            <div className="ocean">
                <div className="bottom">
                </div>
            </div>
        </div>
    )
}
