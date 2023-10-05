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

export default function ProjectEn() {
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
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
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
        },1000)
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
                "mogiten": "模擬店、屋台、昼食、お昼ごはん、eat、lunch",
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
        setInputValue("")
        setForChildFilterCheck(false)
        setAvoidCrowdFilterCheck(false)
        setTimeout(() => {
            onClickSearchBtn()
        },1000)
    }

    function visitorPhoto(project) {
        if (project.visitorPhoto) {
            return "Photo allowed"
        } else {
            return "No photos"
        }
    }

    function children(project) {
        if (project.age) {
            return <div>For children</div>
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
        return <Link className="toDetail" to={"/project-search/" + project.id} onClick={PageChange}>▷see more</Link>
    }

    var eventPlaceEn={
        '共A101': 'CELAS A101',
        '共A102': 'CELAS A102',
        '共A103': 'CELAS A103',
        '共A104': 'CELAS A104',
        '共A114': 'CELAS A114',
        '共B107': 'CELAS B107',
        '共B108': 'CELAS B108',
        '共B118': 'CELAS B118',
        '共A202': 'CELAS A202',
        '共A214': 'CELAS A214',
        '共B206': 'CELAS B206',
        '共B207': 'CELAS B207',
        '共B208': 'CELAS B208',
        '共B218': 'CELAS B218',
        '共A301': 'CELAS A301',
        '共A312': 'CELAS A312',
        '共A313': 'CELAS A313',
        '共B306': 'CELAS B306',
        '共B307': 'CELAS B307',
        '共B316': 'CELAS B316',
        '共C101': 'CELAS C101',
        '共C102': 'CELAS C102',
        '共C104': 'CELAS C104',
        '共C105': 'CELAS C105',
        '共C106': 'CELAS C106',
        '共C107': 'CELAS C107',
        '共C201': 'CELAS C201',
        '共C202': 'CELAS C202',
        '共C203': 'CELAS C203',
        '共C204': 'CELAS C204',
        '共C205': 'CELAS C205',
        '共C206': 'CELAS C206',
        '共C207': 'CELAS C207',
        '共C208': 'CELAS C208',
        '共C301': 'CELAS C301',
        '共C302': 'CELAS C302',
        '共C303': 'CELAS C303',
        '共C304': 'CELAS C304',
        '共C305': 'CELAS C305',
        '共C306': 'CELAS C306',
        '共C307': 'CELAS C307',
        '共C308': 'CELAS C308',
        '共C402': 'CELAS C402',
        '共C403': 'CELAS C403',
        '共C404': 'CELAS C404',
        '共C405': 'CELAS C405',
        '共C406': 'CELAS C406',
        '共C407': 'CELAS C407',
        '共C408': 'CELAS C408',
        '文法経経第3演習室': 'Lect① Econ.Seminar3',
        '文法経経第4演習室': 'Lect① Econ.Seminar4',
        '文法経経第5演習室': 'Lect① Econ.Seminar5',
        '文法経経第6演習室': 'Lect① Econ.Seminar6',
        '文法経経第7演習室': 'Lect① Econ.Seminar7',
        '文法経文11講義室': 'Lect① Let.Lecture11',
        '文法経文12講義室': 'Lect① Let.Lecture12',
        '文法経文13講義室': 'Lect① Let.Lecture13',
        '文法経法22講義室': 'Lect① Let.Lecture22',
        '文法経法23講義室': 'Lect① Let.Lecture23',
        '文法経法31講義室': 'Lect① Let.Lecture31',
        '文法経法演習室H': 'Lect① Seminar H',
        '文法経法演習室I': 'Lect① Seminar I',
        '法経1番教室': 'Lect② Classroom1',
        '法経2番教室': 'Lect② Classroom2',
        '法経3番教室': 'Lect② Classroom3',
        '法経4番教室': 'Lect② Classroom4',
        '法経5番教室': 'Lect② Classroom5',
        '法経演習室E': 'Lect② Seminar E',
        '法経第1演習室': 'Lect② Seminar1',
        '法経第2演習室': 'Lect② Seminar2',
        '学生会館集会室１': 'Student Union Assembly-room 1',
        '学生会館集会室２': 'Student Union Assembly-room 2',
        '学生会館集会室３': 'Student Union Assembly-room 3',
        '学生会館集会室４': 'Student Union Assembly-room 4',
        '学生会館集会室５': 'Student Union Assembly-room 5',
        '学生会館集会室６': 'Student Union Assembly-room 6',
        '学生会館集会室７': 'Student Union Assembly-room 7',
        '学生会館大集会室': 'Student Union Main-Assembly-room',
        '大学会館21世紀懐徳堂': 'University Hall (Kaitoku-dou)',
        '1': 'Tent No.1',
        '2': 'Tent No.2',
        '3': 'Tent No.3',
        '4': 'Tent No.4',
        '5': 'Tent No.5',
        '6': 'Tent No.6',
        '7': 'Tent No.7',
        '8': 'Tent No.8',
        '9': 'Tent No.9',
        '10': 'Tent No.10',
        '11': 'Tent No.11',
        '12': 'Tent No.12',
        '13': 'Tent No.13',
        '14': 'Tent No.14',
        '15': 'Tent No.15',
        '16': 'Tent No.16',
        '17': 'Tent No.17',
        '18': 'Tent No.18',
        '19': 'Tent No.19',
        '20': 'Tent No.20',
        '21': 'Tent No.21',
        '22': 'Tent No.22',
        '23': 'Tent No.23',
        '24': 'Tent No.24',
        '25': 'Tent No.25',
        '26': 'Tent No.26',
        '27': 'Tent No.27',
        '28': 'Tent No.28',
        '29': 'Tent No.29',
        '30': 'Tent No.30',
        '31': 'Tent No.31',
        '32': 'Tent No.32',
        '33': 'Tent No.33',
        '34': 'Tent No.34',
        '35': 'Tent No.35',
        '36': 'Tent No.36',
        '37': 'Tent No.37',
        '38': 'Tent No.38',
        '40': 'Tent No.40',
        '41': 'Tent No.41',
        '42': 'Tent No.42',
        '43': 'Tent No.43',
        '44': 'Tent No.44',
        '45': 'Tent No.45',
        '46': 'Tent No.46',
        '47': 'Tent No.47',
        'C棟前': 'Front of CELAS build.C',
        'サイバーメディアセンター横': 'Beside Cyber-Media-Center',
        '学生会館横': 'Beside Student Union',
        '言語文化研究棟前': 'Front of Grad-School of Langage & Culture',
        '文学研究棟前': 'Front of Grad-School of Literature',
    }

    var genre={
        '物販': 'Goods sales',
        '展示': 'Exhibition',
        '演奏': 'Music',
        'ダンス': 'Dance',
        'ゲーム・体験': 'Game&Experience',
        'その他パフォーマンス': 'Other performances',
        '麺、丼、カレー': 'Rice&Noodles',
        'おかず': 'Side dish',
        '揚げ物': 'Fried',
        'スイーツ・スナック': 'Sweets&Snacks',
        '汁物': 'Soup',
        'その他': 'Other foods',
    }

    var cost={
        '無料': 'Free',
        '有料': 'Paid',
        '一部有料': 'Partly Paid',
    }

    return (
        <div className="main">
            <Helmet>
                <title>Project Search|2023 Machikane Festival</title>
            </Helmet>
            <div className="sky-project">
                <div className="search-header">
                    <PageTitles titles="Project Search" kame={true}></PageTitles>
                    <div className="search-mainpageEn">
                        <div>
                            <input
                                placeholder="Type free words"
                                value={inputValue}
                                id="serch_word"
                                onChange={onChangeInputValue}
                            ></input>
                        </div>

                        {/* おすすめキーワード */}
                        <div className="pickup-keyword-container">Ex.:
                            {
                                ["Dance performance", "Live performance", "For lunch"].map((keyword) => {
                                    return (
                                        <div
                                            onClick={() => onPickupKeywordClick(keyword)}
                                            key={keyword}
                                            className="pickup-keywordEn"
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
                                    <span>Filter to For children</span>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="checkbox3">
                                    <input type="checkbox" id="checkbox3" checked={avoidCrowdFilterCheck} onChange={() => setAvoidCrowdFilterCheck(prev => !prev)} />
                                    <span>Except crowded projects</span>
                                </label>
                            </div>
                        </div>
                        <div style={{ marginTop: '15px' }}>▷Filter to each project category</div>
                        <div className="pickup-keyword-container">
                            {
                                ["In-Facility Projects", "Outdoor Project", "Stage Performance", "Food Stalls"].map((keyword) => {
                                    return (
                                        <div
                                            onClick={() => onPickupKeywordClick(keyword)}
                                            key={keyword}
                                            className="pickup-keywordEn"
                                        >
                                            {keyword}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button onClick={onClickSearchBtn}>Search</button>
                        <button onClick={onClickClearBtn}>Clear</button>
                    </div>
                </div>

                {/* 検索結果 */}
                <div className="search-result">{displayLst.length}search results</div>
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
                                        <div className="projectName">{project.projectNameEn}</div>
                                        <div>{project.groupNameEn}</div>
                                        <div>▷{eventPlaceEn[project.eventPlace]}</div>
                                        <div className="card-tags">
                                            <div>{genre[project.projectGenre]}</div>
                                            <div>{cost[project.cost]}</div>
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
                        <button onClick={() => setLoadingNum(loadingNum + 20)}>see more</button>
                    }
                </div>
                <Link className="toTheTop" to="/" onClick={PageChange}>Back to TOP</Link>
            </div>
            <div className="ocean">
                <div className="bottom">
                </div>
            </div>
        </div>
    )
}
