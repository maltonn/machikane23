import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";

import "../css/Common.css"
export default function Error404() {
    function PageChange(){
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    return(
        <div className="main">
            <Helmet>
            <title>まちかね祭2023</title>
            </Helmet>
            <div className="preparation">
                <p>404<br/>Not Found</p>
                <span>お探しのページは見つかりませんでした。</span><br/>
                <Link to="/" onClick={PageChange}>トップページへ戻る</Link>
            </div>
        </div>
    )
}