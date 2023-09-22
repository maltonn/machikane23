import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";
import "../../css/Common.css"
export default function Pamphlet() {
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
        </div>
    )
}