import { Helmet } from "react-helmet";
import "../../css/Common.css"
export default function About() {
    return(
        <div className="main">
        <Helmet>
          <title>まちかね祭とは|まちかね祭2023</title>
        </Helmet>
            <h2>ここにaboutページ</h2>
            <p>pages/About.jsとcss/About.cssを編集</p>
            <a href="./">トップページへ戻る</a>
        </div>
    )
}