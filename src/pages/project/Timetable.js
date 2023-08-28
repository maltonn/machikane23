import { Helmet } from "react-helmet";
import "../../css/Common.css"
export default function Timetable() {
    return(
        <div className="main">
        <Helmet>
          <title>ステージタイムテーブル|まちかね祭2023</title>
        </Helmet>
            <h2>ここにタイムテーブルページ</h2>
            <p>pages/Timetable.jsとcss/~.cssを編集</p>
            <a href="./">トップページへ戻る</a>
        </div>
    )
}