import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";
import Bubble from "../../components/Bubble";
import "../../css/Common.css"
export default function TimetableEn() {
    return(
        <div className="main">
            <Helmet>
            <title>TimeTable|2023 Machikane Festival</title>
            </Helmet>
            <div className="preparation">
                <div className="preparation-children">
                <p>Coming soon! Now preparing.</p>
                <span>Current page：TimeTable</span><br></br>
                <Link to="/" >Back to the TOP</Link>
                </div>
            </div>
            <Bubble bubbleSwitch={false}></Bubble>
        </div>
    )
}