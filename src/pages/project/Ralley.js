import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";

import "../../css/Common.css"
export default function Ralley() {
    return(
        <div className="main">
            <Helmet>
            <title>ラリー企画一覧|まちかね祭2023</title>
            </Helmet>
            <div className="preparation">
                <p>ただいまページ作成中です。しばらくお待ちください。</p>
                <span>現在のページ：ラリー企画一覧</span><br></br>
                <Link to="/" >トップページへ戻る</Link>
            </div>
        </div>
    )
}