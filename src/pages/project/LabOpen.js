import { Helmet } from "react-helmet";
import "../../css/Common.css"
export default function LabOpen() {
    return(
        <div className="main">
        <Helmet>
          <title>研究室紹介|まちかね祭2023</title>
        </Helmet>
            <h2>ここにlab-openページ</h2>
            <p>pages/LabOpen.jsとcss/~.cssを編集</p>
            <a href="./">トップページへ戻る</a>
        </div>
    )
}