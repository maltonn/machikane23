import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";

import "../../css/Common.css"
export default function SectionsEn() {
    return(
        <div className="main">
            <Helmet>
            <title>Sections|Machikane2023</title>
            </Helmet>
            <div className="preparation">
                <p>Coming soon! Now preparing.</p>
                <span>Current page：Sections</span><br></br>
                <Link to="/" >Back to the TOP</Link>
            </div>
        </div>
    )
}