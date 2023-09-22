import { Helmet } from "react-helmet";
import "../../css/Common.css"
import {Link} from "react-router-dom";

export default function MapEn() {
    return(
        <div className="main">
            <Helmet>
            <title>Map|Machikane2023</title>
            </Helmet>
            <div className="preparation">
                <p>Coming soon! Now preparing.</p>
                <span>Current page：Map</span><br></br>
                <Link to="/" >Back to the TOP</Link>
            </div>
        </div>
    )
}