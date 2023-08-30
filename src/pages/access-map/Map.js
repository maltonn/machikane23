import { Helmet } from "react-helmet";
import "../../css/Common.css"
export default function Map() {
    return(
        <div className="main">
        <Helmet>
          <title>マップ|まちかね祭2023</title>
        </Helmet>
            <h2>ここにmapページ</h2>
            <p>pages/Map.jsとcss/~.cssを編集</p>
            <a href="./">トップページへ戻る</a>
        </div>
    )
}