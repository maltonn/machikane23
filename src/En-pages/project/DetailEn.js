import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";

import "../../css/Common.css"
export default function DetailEn() {
    return(
        <div className="main">
            <Helmet>
            <title>Project Detail|Machikane2023</title>
            </Helmet>
            <div className="preparation">
                <p>Coming soon! Now preparing.</p>
                <span>Current page：Project Detail</span><br></br>
                <Link to="/" >Back to the TOP</Link>
            </div>
        </div>
    )
}