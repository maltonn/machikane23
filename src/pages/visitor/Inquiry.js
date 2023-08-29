import { Helmet } from "react-helmet";
import "../../css/Common.css"
export default function Inquiry() {
    return(
        <div className="main">
        <Helmet>
          <title>お問い合わせ|まちかね祭2023</title>
        </Helmet>
            <h2>ここにinquiryページ</h2>
            <p>pages/Inquiry.jsとcss/~.cssを編集</p>
            <a href="./">トップページへ戻る</a>
        </div>
    )
}