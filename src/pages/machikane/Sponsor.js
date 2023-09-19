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
                            <div className="solaniwaonsen"><img src={solaniwaonsen}></img></div>
                            <div className="sudio"><img src={sudio}></img></div>
                        </div>
                        <div className="center">
                            <div className="sorakakeru"><img src={sorakakeru}></img></div>
                            <div className="jankara"><img src={jankara}></img></div>
                            <div className="bigecho"><img src={bigecho}></img></div>
                        </div>
                        <div className="right">
                            <div className="kawashofoods"><img src={kawashofoods}></img></div>
                            <div className="senrihankyuhotel"><img src={senrihankyuhotel}></img></div>
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
                        <div className="???"><p>ホームカミングデイとか旧帝大交流会はどうなったんだろう</p></div>
                    </div>
                </div>             
            </div>
        </div>
    )
}