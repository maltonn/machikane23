import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";
import "../../css/Common.css"
import "../../css/Mogiten.css"
import { useEffect, useState, useRef } from "react";
import PageTitles from "../../components/PageTitles";
import Bubble from "../../components/Bubble";
import MainStreet from "../../imgs/map/main-street.jpg";

export default function MogitenEn() {
    const projectLst = useRef([]) // こっちにはすべてのプロジェクトが入る
    const [displayLst, setDisplayLst] = useState([]) // 表示するプロジェクト（検索ボタンを押したときにこっちだけ書き換わる）

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
            lst = lst.filter((project) => project.section === 'mogiten')
            lst.sort((a, b) => a.eventPlace - b.eventPlace);
            projectLst.current = lst
            setDisplayLst(lst)
        })
    }, [])
    const PageChange=()=> {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
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
    return (
        <div className="main">
            <Helmet>
            <title>Food Stalls List|2023 Machikane Festival</title>
            </Helmet>
            <div className="mogiten-sky">
                <PageTitles titles="Food Stalls" kame={true}></PageTitles>
                <div className="mogiten-mainpage">
                    <table className="mogiten-project">
                        <tr>
                            <th>Tent No.</th>
                            <th>Group name</th>
                            <th>Project name</th>
                            <th>Genre</th>
                            <th>Details</th>
                        </tr>
                        {displayLst.map((project) => {
                        if (!project) {
                            return null
                        }
                        return (
                            <tr>
                                <td>{project.eventPlace}</td>
                                <td>{project.groupNameEn}</td>
                                <td>{project.projectNameEn}</td>
                                <td>{genre[project.projectGenre]}</td>
                                <td><Link className="mogiten-link-button" to={"/project-search/" + project.id} onClick={PageChange}>Click</Link></td>
                            </tr>
                        )
                    })
                        }
                    </table>
                </div>
                <div className="mogitenProject-map"><img src={MainStreet} alt="mainStreet"></img></div>
            </div>
            <Bubble bubbleSwitch={false}></Bubble>
        </div>
    )
}