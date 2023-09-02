import { Helmet } from "react-helmet";
import "../../css/Common.css"
export default function Timetable() {
    return(
        <div className="main">
            <Helmet>
            <title>ステージタイムテーブル|まちかね祭2023</title>
            </Helmet>
            <div className="preparation">
                <p>ただいまページ作成中です。しばらくお待ちください。</p>
                <span>現在のページ：ステージタイムテーブル</span><br></br>
                <a href="./">トップページへ戻る</a>
            </div>
        </div>
    )
}