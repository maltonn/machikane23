import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";
import "../../css/Common.css"
export default function FAQ() {
    return(
        <div className="main">
            <Helmet>
            <title>よくあるご質問|まちかね祭2023</title>
            </Helmet>
            <div className="preparation">
                <p>ただいまページ作成中です。しばらくお待ちください。</p>
                <span>現在のページ：よくあるご質問</span><br></br>
                <Link to="/" >トップページへ戻る</Link>
            </div>
        </div>
    )
}