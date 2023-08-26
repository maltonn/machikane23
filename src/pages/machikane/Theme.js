import { Helmet } from "react-helmet";
import "../../css/Common.css"
export default function Theme() {
    return(
        <div className="main">
        <Helmet>
          <title>テーマ|まちかね祭2023</title>
        </Helmet>
            <h2>ここにthemaページ</h2>
            <p>pages/Thema.jsとcss/~.cssを編集</p>
            <a href="./">トップページへ戻る</a>
        </div>
    )
}