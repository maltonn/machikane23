import { Helmet } from "react-helmet";
import "../../css/Common.css"
export default function Goods() {
    return(
        <div className="main">
            <Helmet>
            <title>グッズ|まちかね祭2023</title>
            </Helmet>
            <div className="preparation">
                <p>ただいまページ作成中です。しばらくお待ちください。</p>
                <span>現在のページ：グッズ</span><br></br>
                <a href="./">トップページへ戻る</a>
            </div>
        </div>
    )
}