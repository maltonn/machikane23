import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";
import "../../css/Common.css"
import Bubble from "../../components/Bubble";
import { useEffect } from "react";
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
            <div className="preparation">
                <p>ただいまページ作成中です。しばらくお待ちください。</p>
                <span>現在のページ：公式パンフレット</span><br></br>
                <Link to="/" >トップページへ戻る</Link>
            </div>
            <Bubble bubbleSwitch={false}></Bubble>
        </div>
    )
}