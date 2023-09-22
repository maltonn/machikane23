import { Helmet } from "react-helmet";
import "../../css/Common.css"
import "../../css/Sponsor.css"
import bigecho from "../../imgs/sponsor/big-echo.jpg"
import jankara from "../../imgs/sponsor/jankara.jpg"
import kawashofoods from "../../imgs/sponsor/kawasho-foods.png"
import senrihankyuhotel from "../../imgs/sponsor/senri-hankyu-hotel.png"
import solaniwaonsen from "../../imgs/sponsor/solaniwa-onsen.jpg"
import sorakakeru from "../../imgs/sponsor/sorakakeru.png"
import sudio from "../../imgs/sponsor/sudio.png"
import homecomingday from "../../imgs/sponsor/home-coming-day.jpg"
export default function Sponsor() {
    return(
        <div className="main">
            <Helmet>
            <title>ご協賛|まちかね祭2023</title>
            </Helmet>
            <div className="sponsor-contents">
                <div className="sky">
                    <br></br>
                    <span className="title">ご協賛</span>
                    <br></br>
                    <div className="companies">
                        <div className="left">
                            <div className="solaniwaonsen"><a href="https://solaniwa.com/"><img src={solaniwaonsen}></img></a></div>
                            <div className="sudio"><a href="https://www.sudio.com/jp/"><img src={sudio}></img></a></div>
                        </div>
                        <div className="center">
                            <div className="sorakakeru"><a href="https://www.sorakakeru.com/"><img src={sorakakeru}></img></a></div>
                            <div className="jankara"><a href="https://jankara.ne.jp/index.html"><img src={jankara}></img></a></div>
                            <div className="bigecho"><a href="https://big-echo.jp/"><img src={bigecho}></img></a></div>
                        </div>
                        <div className="right">
                            <div className="kawashofoods"><a href="https://www.cornedbeef.jp/"><img src={kawashofoods}></img></a></div>
                            <div className="senrihankyuhotel"><a href="https://www.hankyu-hotel.com/hotel/hh/senrihh"><img src={senrihankyuhotel}></img></a></div>
                        </div>
                    </div> 
                    <br></br>
                </div>
                <div className="ocean">
                    <div className="cooperation">
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="homecomingday"><a href="https://ou2023hcd.alumni.osaka-u.ac.jp/"><img src={homecomingday}></img></a></div>
                        <br></br>
                        <br></br>
                    </div>
                </div>             
            </div>
        </div>
    )
}