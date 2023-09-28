import { Helmet } from "react-helmet";
// import {Link} from "react-router-dom";

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
import PageTitles from "../../components/PageTitles";

export default function Sponsor() {
    return(
        <div className="main">
            <Helmet>
            <title>Our sponsors|Machikane2023</title>
            </Helmet>
            <div className="sponsor-sky">
                <PageTitles titles="ご協賛"></PageTitles>
                <p>まちかね祭開催にあたって、多くのご協賛・ご協力をいただきました。ここに深く御礼申し上げます。</p>
                <div className="companies goods">
                    <div className="sponsor-miniTitles">物品協賛（順不同）</div>
                    <div className="sponsor-imgs">
                        <a href="https://solaniwa.com/"><img src={solaniwaonsen}></img></a>
                        <a href="https://www.sudio.com/jp/"><img src={sudio}></img></a>
                        <a href="https://www.sorakakeru.com/"><img src={sorakakeru}></img></a>
                        <a href="https://jankara.ne.jp/index.html"><img src={jankara}></img></a>
                        <a href="https://big-echo.jp/"><img src={bigecho}></img></a>
                        <a href="https://www.cornedbeef.jp/"><img src={kawashofoods}></img></a>
                        <a href="https://www.hankyu-hotel.com/hotel/hh/senrihh"><img src={senrihankyuhotel}></img></a>
                    </div>
                </div>
                <div className="companies advertise">
                    <div className="sponsor-miniTitles">広告協賛（順不同）</div>
                    <div className="sponsor-imgs">
                        <a href="https://ou2023hcd.alumni.osaka-u.ac.jp/"><img src={homecomingday}></img></a>
                        <a href="https://ou2023hcd.alumni.osaka-u.ac.jp/"><img src={homecomingday}></img></a>
                        <a href="https://ou2023hcd.alumni.osaka-u.ac.jp/"><img src={homecomingday}></img></a>
                        <a href="https://ou2023hcd.alumni.osaka-u.ac.jp/"><img src={homecomingday}></img></a>
                    </div>
                </div>
            </div>
            <div className="sponsor-ocean">
                <div className="companies special">
                    <div className="sponsor-miniTitles">特別協賛</div>
                    <div className="sponsor-imgs">
                        <a href="https://ou2023hcd.alumni.osaka-u.ac.jp/"><img src={homecomingday}></img></a>
                    </div>
                </div>
            </div>      
        </div>
    )
}