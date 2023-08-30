import { Helmet } from "react-helmet";
import "../../css/Common.css"
export default function Pamphlet() {
    return(
        <div className="main">
        <Helmet>
          <title>公式パンフレット|まちかね祭2023</title>
        </Helmet>
            <h2>ここにpamphletページ</h2>
            <p>pages/Pamphlet.jsとcss/~.cssを編集</p>
            <a href="./">トップページへ戻る</a>
        </div>
    )
}