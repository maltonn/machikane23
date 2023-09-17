import { Helmet } from "react-helmet";
import "../../css/Common.css"
import "../../css/Sponsor.css"
import bigecho from "../../imgs/sponsor/big-echo.jpg"
import jankara from "../../imgs/sponsor/sudio.jpg"
import kawashofoods from "../../imgs/sponsor/kawasho-foods.png"
import senrihankyuhotel from "../../imgs/sponsor/senri-hankyu-hotel.png"
import solaniwaonsen from "../../imgs/sponsor/sudio.png"
import sorakakeru from "../../imgs/sponsor/sorakakeru.jpg"
import sudio from "../../imgs/sponsor/sudio.png"
export default function Sponsor() {
    return(
        <div className="main">
            <Helmet>
            <title>ご協賛|まちかね祭2023</title>
            </Helmet>
            <div className="sponsor">
                <img src={bigecho}></img>
                <img src={jankara}></img>
                <img src={kawashofoods}></img>
                <img src={senrihankyuhotel}></img>
                <img src={solaniwaonsen}></img>
                <img src={sorakakeru}></img>
                <img src={sudio}></img>
            </div>
        </div>
    )
}