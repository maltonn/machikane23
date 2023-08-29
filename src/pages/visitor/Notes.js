import { Helmet } from "react-helmet";
import "../../css/Common.css"
export default function Notes() {
    return(
        <div className="main">
        <Helmet>
          <title>注意事項|まちかね祭2023</title>
        </Helmet>
            <h2>ここにnotesページ</h2>
            <p>pages/Notes.jsとcss/~.cssを編集</p>
            <a href="./">トップページへ戻る</a>
        </div>
    )
}