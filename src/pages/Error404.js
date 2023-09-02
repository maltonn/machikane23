import { Helmet } from "react-helmet";
import "../css/Common.css"
export default function Error404() {
    return(
        <div className="main">
        <Helmet>
          <title>まちかね祭2023</title>
        </Helmet>
            <h2>404</h2>
            <a href="./">トップページへ戻る</a>
        </div>
    )
}