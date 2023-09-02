import { Helmet } from "react-helmet";
import "../../css/Common.css"
export default function Notes() {
    return(
        <div className="main">
            <Helmet>
            <title>注意事項|まちかね祭2023</title>
            </Helmet>
            <div className="preparation">
                <p>ただいまページ作成中です。しばらくお待ちください。</p>
                <a href="./">トップページへ戻る</a>
            </div>
        </div>
    )
}