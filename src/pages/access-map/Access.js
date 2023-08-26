import { Helmet } from "react-helmet";
import "../../css/Common.css"
export default function Access() {
    return(
        <div className="main">
        <Helmet>
          <title>アクセス|まちかね祭2023</title>
        </Helmet>
            <h2>ここにaccessページ</h2>
            <p>pages/Access.jsとcss/~.cssを編集</p>
            <a href="./">トップページへ戻る</a>
        </div>
    )
}