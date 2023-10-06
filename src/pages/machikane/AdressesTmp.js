import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";

import "../../css/Common.css"
import { useEffect } from "react";
export default function AdressesTmp() {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    },[])
    return(
        <div className="main">
            <Helmet>
            <title>ご挨拶|まちかね祭2023</title>
            </Helmet>
            <div className="preparation">
                <p>ただいまページ作成中です。しばらくお待ちください。</p>
                <span>現在のページ：ご挨拶</span><br></br>
                <Link to="/" >トップページへ戻る</Link>
            </div>
        </div>
    )
}