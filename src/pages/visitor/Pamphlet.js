import { Helmet } from "react-helmet";
import "../../css/Common.css"
import "../../css/Pamphlet.css"
import PageTitles from "../../components/PageTitles";
import Bubble from "../../components/Bubble";
import { useEffect } from "react";
import pamphlet from "../../data/machikane23pamphlet.pdf";
import pamphletTop from "../../data/pamphletTop.jpg";
export default function Pamphlet() {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    },[])
    return(
        <div className="main">
            <Helmet>
            <title>公式パンフレット|まちかね祭2023</title>
            </Helmet>
            <div className="about-sky">
                <PageTitles titles="公式パンフレット" kame={true}></PageTitles>
                <div>
                    <p style={{margin:"10px"}}>以下の表紙をクリックすると電子版パンフレットをご覧いただけます。</p>
                    <a href={pamphlet} className="pamphImg_A" target="_blank" rel="noreferrer">
                        <img src={pamphletTop} class="pamphTop"></img>
                    </a>
                    <p className="sorry-pamph">パンフレットに記載の内容に誤りがございました。</p>
                    <p className="sorry-pamph">ご来場の皆様にはご迷惑をお掛けいたしましたことをお詫び申し上げますとともに、下記の通り訂正いたします。</p>
                    <table className="correction">
                        <tbody>
                            <tr>
                                <th>ページ</th>
                                <th>訂正箇所</th>
                                <th>誤</th>
                                <th>正</th>
                            </tr>
                            <tr>
                                <td>P.31</td>
                                <td>大阪大学体育会 企画場所</td>
                                <td className="boolean">文法経講義棟 文13講義室</td>
                                <td className="boolean">第一体育館</td>
                            </tr>
                            <tr>
                                <td>P.39</td>
                                <td>大阪大学ヲタ芸サークル 企画場所</td>
                                <td className="boolean">学生会館 集会室7</td>
                                <td className="boolean">大阪大学会館 21世紀懐徳堂スタジオ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Bubble bubbleSwitch={false}></Bubble>
        </div>
    )
}