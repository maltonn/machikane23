import { Helmet } from "react-helmet";
import "../../css/Common.css"
export default function FAQ() {
    return(
        <div className="main">
        <Helmet>
          <title>よくあるご質問|まちかね祭2023</title>
        </Helmet>
            <h2>ここにFAQページ</h2>
            <p>pages/FAQ.jsとcss/~.cssを編集</p>
            <a href="./">トップページへ戻る</a>
        </div>
    )
}