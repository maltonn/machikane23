import { Helmet } from "react-helmet";
import "../../css/Common.css"
export default function Goods() {
    return(
        <div className="main">
        <Helmet>
          <title>グッズ|まちかね祭2023</title>
        </Helmet>
            <h2>ここにgoodsページ</h2>
            <p>pages/Goods.jsとcss/~.cssを編集</p>
            <a href="./">トップページへ戻る</a>
        </div>
    )
}