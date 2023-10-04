import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";
import "../../css/Common.css"
export default function PamphletEn() {
    return(
        <div className="main">
            <Helmet>
            <title>Pamphlet|2023 Machikane Festival</title>
            </Helmet>
            <div className="preparation">
                <p>Coming soon! Now preparing.</p>
                <span>Current page：Pamphlet</span><br></br>
                <Link to="/" >Back to the TOP</Link>
            </div>
        </div>
    )
}