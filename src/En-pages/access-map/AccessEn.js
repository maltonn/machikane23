import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";
import "../../css/Common.css"
import "../../css/Access.css"
import Bubble from "../../components/Bubble";
import PageTitles from "../../components/PageTitles";
import guide from "../../imgs/map/2023年度まちかね祭駐輪場案内.png"

export default function Access() {
    function PageChange(){
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    return(
        <div className="main">
            <Helmet>
            <title>Access|Machikane2023</title>
            </Helmet>
            <div className="access-sky">
                
                <PageTitles titles="Access" kame={true}></PageTitles>
                
                <div className="sponsor-miniTitles">Venue</div>
                <div className="access-mainpage"> 
                    <div className="access-notes">
                        <div className="access-content access-holdingPlace">
                            <p>Toyonaka Campus, Osaka University</p>
                            <p>〒560-0043 1 Machikaneyama-town, Toyonaka-city, Osaka</p>
                        </div>
                    </div>
                </div>
                <div className="sponsor-miniTitles">Access</div>
                <div className="access-mainpage"> 
                    <div className="access-notes">
                        <div className="access-content">
                            <li>About 15mins walk from Ishibashi handai-mae Station, Hankyu line.<br></br>
                            Firstly, please walk up Handai-zaka and come to the General Information Center.
                            </li>
                            <li>5〜15 mins walk from monorail Shibahara-handai-mae Station.<br></br>
                            Firstly, please come to the General Information Center through the Main gate.
                            </li>
                        </div>
                    </div>
                </div>
                <div className="sponsor-miniTitles">Notice</div>
                <div className="access-mainpage"> 
                    <div className="access-notes">
                        <div className="access-content">
                        <li>There is no parking lot in and around Toyonaka Campus, so please try to use public transportations when you come.
                        However, whoever has any disabilities should contact us in advance.
                            <div className="link-button access-center"><Link className="access-inquiry" to="./inquiry" onClick={PageChange}>Inquiry</Link>
                            </div>
                        </li>
                        <li>When you come by bicycle, please use the parking lot on the map below.
                        </li>
                        <li>During the festival, you can not park your bicycle on the Main street and some areas around the playground.
                        </li>
                        <li>When you park at the banned area, we will move the bicycle to the north-side of the Cyber Media Center.
                        </li>
                        <div className="access-guide"> 
                            <img src={guide} alt="2023年度まちかね祭駐輪場案内"></img>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <Bubble></Bubble>
        </div>
    )
}