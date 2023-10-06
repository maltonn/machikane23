import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";
import Bubble from "../../components/Bubble";
import "../../css/Common.css"
import { useEffect } from "react";
export default function AdressesEnTmp() {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    },[])
    return(
        <div className="main">
            <Helmet>
            <title>Adresses|2023 Machikane Festival</title>
            </Helmet>
            <div className="preparation">
                <div className="preparation-children">
                <p>Coming soon! Now preparing.</p>
                <span>Current page：Adresses</span><br></br>
                <Link to="/" >Back to the TOP</Link>
                </div>
            </div>
            <Bubble bubbleSwitch={false}></Bubble>
        </div>
    )
}