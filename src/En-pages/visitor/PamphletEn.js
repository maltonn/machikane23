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
            <title>Official Pamphlet|2023 Machikane Festival</title>
            </Helmet>
            <div className="about-sky">
                <PageTitles titles="Official Pamphlet" kame={true}></PageTitles>
                <div>
                    <p style={{margin:"10px"}}>Click here and check the E-pamphlet!</p>
                    <a href={pamphlet} className="pamphImg_A" target="_blank" rel="noreferrer">
                        <img src={pamphletTop} class="pamphTop"></img>
                    </a>
                    <p className="sorry-pamph">We are sorry that there are some mistakes with the content of the official pamphlet.</p>
                    <p className="sorry-pamph">Corrections are below.</p>
                    <table className="correction">
                        <tbody>
                            <tr>
                                <th>Page</th>
                                <th>Corrected part</th>
                                <th>Error</th>
                                <th>Correct</th>
                            </tr>
                            <tr>
                                <td>P.31</td>
                                <td>大阪大学体育会()<br></br>Project locations</td>
                                <td className="boolean">文法経講義棟 文13講義室<br></br>(Lect① Let.Lecture13)</td>
                                <td className="boolean">第一体育館<br></br>(Gymnasium1)</td>
                            </tr>
                            <tr>
                                <td>P.39</td>
                                <td>大阪大学ヲタ芸サークル(Cyalume dance club)<br></br>Project locations</td>
                                <td className="boolean">学生会館 集会室7<br></br>(Student Union Assembly-room 7)</td>
                                <td className="boolean">大阪大学会館 21世紀懐徳堂スタジオ<br></br>(Osaka University Hall)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Bubble bubbleSwitch={false}></Bubble>
        </div>
    )
}