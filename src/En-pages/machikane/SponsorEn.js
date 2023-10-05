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
import kasugai from "../../imgs/sponsor/kasugai.png"
import cowsoap from "../../imgs/sponsor/cow-soap.png"
import osakatoka from "../../imgs/sponsor/osakatoka.png"
import tondemi from "../../imgs/sponsor/tondemi.jpg"
import VSPARK from "../../imgs/sponsor/VSPARK.jpg"
import homecomingday from "../../imgs/sponsor/home-coming-day.jpg"
import rokkosai from "../../imgs/sponsor/rokkosai.jpeg"
import PageTitles from "../../components/PageTitles";

export default function SponsorEn() {
    return(
        <div className="main">
            <Helmet>
            <title>Our sponsors|2023 Machikane Festival</title>
            </Helmet>
            <div className="sponsor-sky">
                <PageTitles titles="Our sponsors"></PageTitles>
                <p>We would like to express our sincere appreciation toward all the sponsors for the 2023 Machikane Festival.</p>
                <div className="companies goods">
                    <div className="sponsor-miniTitles-En1">Goods Sponsoring<br className="smartphone"></br>&nbsp;(without honorifics and order)</div>
                    <div className="sponsor-imgs">
                    <a href="https://solaniwa.com/"><img src={solaniwaonsen} alt="solaniwa"></img></a>
                        <a href="https://www.sudio.com/jp/"><img src={sudio} alt="sudio"></img></a>
                        <a href="https://www.sorakakeru.com/"><img src={sorakakeru} alt="sorakakeru"></img></a>
                        <a href="https://jankara.ne.jp/index.html"><img src={jankara} alt="jankara"></img></a>
                        <a href="https://big-echo.jp/"><img src={bigecho} alt="big-echo"></img></a>
                        <a href="https://www.cornedbeef.jp/"><img src={kawashofoods} alt="cornedbeef"></img></a>
                        <a href="https://www.hankyu-hotel.com/hotel/hh/senrihh"><img src={senrihankyuhotel} alt="senri-hankyu-hotel"></img></a>
                        <a href="https://www.kasugai.co.jp/"><img src={kasugai} alt="kasugai"></img></a>
                        <a href="https://www.cow-soap.co.jp/"><img src={cowsoap} alt="cow-soap"></img></a>
                        <a href="https://www.osaka-toka.co.jp/"><img src={osakatoka} alt="osaka-toka"></img></a>
                        <a href="https://bandainamco-am.co.jp/others/tondemi/"><img src={tondemi} alt="tondemi"></img></a>
                        <a href="https://bandainamco-am.co.jp/others/vspark/"><img src={VSPARK} alt="VSPARK"></img></a>
                    </div>
                </div>
                <div className="companies advertise">
                    <div className="sponsor-miniTitles-En2">Ad Sponsoring<br className="smartphone"></br>&nbsp;(without honorifics and order)</div>
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
                    <div className="sponsor-miniTitles-En3">Special Sponsoring<br className="smartphone"></br>&nbsp;(without honorifics and order)</div>
                    <div className="sponsor-imgs">
                        <a href="https://ou2023hcd.alumni.osaka-u.ac.jp/"><img src={homecomingday}></img></a>
                        <a href="http://www.rokkosai-kobe-univ.site/"><img src={rokkosai}></img></a>
                    </div>
                </div>
            </div>      
        </div>
    )
}