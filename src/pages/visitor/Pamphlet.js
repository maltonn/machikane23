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
                </div>
            </div>
            <Bubble bubbleSwitch={false}></Bubble>
        </div>
    )
}