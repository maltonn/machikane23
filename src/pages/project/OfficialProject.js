import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";

import "../../css/Common.css"
export default function OfficialProject() {
    return(
        <div className="main">
            <Helmet>
            <title>委員会企画|まちかね祭2023</title>
            </Helmet>
            <div className="preparation">
                <p>ただいまページ作成中です。しばらくお待ちください。</p>
                <span>現在のページ：委員会企画</span><br></br>
                <Link to="/" >トップページへ戻る</Link>
            </div>
        </div>
    )
}