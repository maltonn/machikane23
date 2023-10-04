import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";
import "../../css/Common.css"
export default function NotesEn() {
    return(
        <div className="main">
            <Helmet>
            <title>Notes|2023 Machikane Festival</title>
            </Helmet>
            <div className="preparation">
                <p>Coming soon! Now preparing.</p>
                <span>Current page：Notes</span><br></br>
                <Link to="/" >Back to the TOP</Link>
            </div>
        </div>
    )
}