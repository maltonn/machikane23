import { Helmet } from "react-helmet";
import "../css/Common.css"
export default function Error404() {
    return(
        <div className="main">
            <Helmet>
            <title>まちかね祭2023</title>
            </Helmet>
            <div className="preparation">
                <p>404<br/>Not Found</p>
                <span>お探しのページは見つかりませんでした。</span><br/>
                <a href="./">トップページへ戻る</a>
            </div>
        </div>
    )
}