import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";

import "../../css/Common.css"
export default function ProjectTmp() {
    return(
        <div className="main">
            <Helmet>
            <title>企画検索|まちかね祭2023</title>
            </Helmet>
            <div className="preparation">
                <p>ただいまページ作成中です。しばらくお待ちください。</p>
                <span>現在のページ：企画検索</span><br></br>
                <Link to="/" >トップページへ戻る</Link>
            </div>
        </div>
    )
}