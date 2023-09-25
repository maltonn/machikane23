import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";

import "../../css/Common.css"
export default function LabOpen() {
    function PageChange(){
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    return(
        <div className="main">
            <Helmet>
            <title>研究室紹介|まちかね祭2023</title>
            </Helmet>
            <div className="preparation">
                <p>ただいまページ作成中です。しばらくお待ちください。</p>
                <span>現在のページ：研究室紹介</span><br></br>
                <Link to="/" onClick={PageChange}>トップページへ戻る</Link>
            </div>
        </div>
    )
}