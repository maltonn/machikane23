import { Helmet } from "react-helmet";
import "../../css/Common.css"
export default function HomeEn() {
    return(
        <div className="main">
            <Helmet>
            <title>TopPage|Machikane2023</title>
            </Helmet>
            <div className="preparation">
                <p>ただいまページ作成中です。しばらくお待ちください。</p>
                <span>現在のページ：グッズ</span><br></br>
            </div>
        </div>
    )
}