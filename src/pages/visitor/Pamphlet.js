import { Helmet } from "react-helmet";
// import {Link} from "react-router-dom";
import "../../css/Common.css"
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
                <div className='pdf'>
                    <a href={pamphlet} target="_blank" rel="noreferrer">
                        <div style={{display:"flex",justifyContent:"center"}}><img src={pamphletTop} style={{width:"80%"}}></img></div>
                    </a>
                </div>
            </div>
            <Bubble bubbleSwitch={false}></Bubble>
        </div>
    )
}