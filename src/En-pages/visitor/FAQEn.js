import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";
import "../../css/Common.css"
export default function FAQEn() {
    return(
        <div className="main">
            <Helmet>
            <title>FAQ|Machikane2023</title>
            </Helmet>
            <div className="preparation">
                <p>Coming soon! Now preparing.</p>
                <span>Current page：FAQ</span><br></br>
                <Link to="/" >Back to the TOP</Link>
            </div>
        </div>
    )
}