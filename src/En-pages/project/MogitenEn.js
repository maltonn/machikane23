import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";

import "../../css/Common.css"
import "../../css/Mogiten.css"
export default function MogitenEn() {
    return(
        <div className="main">
            <Helmet>
            <title>Mogiten|Machikane2023</title>
            </Helmet>
            <div className="preparation">
                <p>Coming soon! Now preparing.</p>
                <span>Current page：Mogiten</span><br></br>
                <Link to="/" >Back to the TOP</Link>
            </div>
        </div>
    )
}