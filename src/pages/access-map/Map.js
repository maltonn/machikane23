import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";

import "../../css/Common.css"
export default function Map() {
    return(
        <div className="main">
            <Helmet>
            <title>マップ|まちかね祭2023</title>
            </Helmet>
            <div className="preparation">
                <p>ただいまページ作成中です。しばらくお待ちください。</p>
                <span>現在のページ：マップ</span><br></br>
                <Link to="/" >トップページへ戻る</Link>
            </div>
        </div>
    )
}