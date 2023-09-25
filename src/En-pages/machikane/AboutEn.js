import { Helmet } from "react-helmet";
import "../../css/Common.css"
import {Link} from "react-router-dom";

export default function AboutEn() {
    return(
        <div className="main">
            <Helmet>
            <title>About Machikanesai|Machikane2023</title>
            </Helmet>
            <div className="preparation">
                <p>Coming soon! Now preparing.</p>
                <span>Current page：About Machikanesai</span><br></br>
                <Link to="/" >Back to the TOP</Link>
            </div>
        </div>
    )
}