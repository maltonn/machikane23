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
import milksoap from "../../imgs/sponsor/milk-soap.png"
import osakaseika from "../../imgs/sponsor/osakaseika.png"
import tondemi from "../../imgs/sponsor/tondemi.jpg"
import VSPARK from "../../imgs/sponsor/VSPARK.jpg"
import homecomingday from "../../imgs/sponsor/home-coming-day.jpg"
import rokkosai from "../../imgs/sponsor/rokkosai.jpeg"
import PageTitles from "../../components/PageTitles";

export default function Sponsor() {
    return(
        <div className="main">
            <Helmet>
            <title>ご協賛|まちかね祭2023</title>
            </Helmet>
            <div className="sponsor-sky">
                <PageTitles titles="ご協賛" kame={true}></PageTitles>
                <p>以下の企業・団体の皆さまより、本まちかね祭の企画・運営へ多大なるご支援を賜りました。ここに深く御礼申し上げます。</p>
                <div className="companies goods">
                    <div className="sponsor-miniTitles">物品協賛（順不同）</div>
                    <div className="sponsor-imgs">
<<<<<<< HEAD
                        <a href="https://solaniwa.com/"><img src={solaniwaonsen}></img></a>
                        <a href="https://www.sudio.com/jp/"><img src={sudio}></img></a>
                        <a href="https://www.sorakakeru.com/"><img src={sorakakeru}></img></a>
                        <a href="https://jankara.ne.jp/index.html"><img src={jankara}></img></a>
                        <a href="https://big-echo.jp/"><img src={bigecho}></img></a>
                        <a href="https://www.cornedbeef.jp/"><img src={kawashofoods}></img></a>
                        <a href="https://www.hankyu-hotel.com/hotel/hh/senrihh"><img src={senrihankyuhotel}></img></a>
                        <a href="https://www.kasugai.co.jp/"><img src={kasugai}></img></a>
                        <a href="https://www.cow-soap.co.jp/"><img src={milksoap}></img></a>
                        <a href="https://www.osaka-toka.co.jp/"><img src={osakaseika}></img></a>
                        <a href="https://bandainamco-am.co.jp/others/tondemi/"><img src={tondemi}></img></a>
                        <a href="https://bandainamco-am.co.jp/others/vspark/"><img src={VSPARK}></img></a>
=======
                        <a href="https://solaniwa.com/"><img src={solaniwaonsen} alt="solaniwaonsen"></img></a>
                        <a href="https://www.sudio.com/jp/"><img src={sudio} alt="sudio"></img></a>
                        <a href="https://www.sorakakeru.com/"><img src={sorakakeru} alt="sorakakeru"></img></a>
                        <a href="https://jankara.ne.jp/index.html"><img src={jankara} alt="jankara"></img></a>
                        <a href="https://big-echo.jp/"><img src={bigecho} alt="bigecho"></img></a>
                        <a href="https://www.cornedbeef.jp/"><img src={kawashofoods} alt="kawashofoods"></img></a>
                        <a href="https://www.hankyu-hotel.com/hotel/hh/senrihh"><img src={senrihankyuhotel} alt="senrihankyuhotel"></img></a>
>>>>>>> 334047f16623ad131755f131d0b0ef4f9a46a735
                    </div>
                </div>
                <div className="companies advertise">
                    <div className="sponsor-miniTitles">広告協賛（順不同）</div>
                    <div className="sponsor-imgs">
                        <a href="https://ou2023hcd.alumni.osaka-u.ac.jp/"><img src={homecomingday} alt="homecomingday"></img></a>
                        <a href="https://ou2023hcd.alumni.osaka-u.ac.jp/"><img src={homecomingday} alt="homecomingday"></img></a>
                        <a href="https://ou2023hcd.alumni.osaka-u.ac.jp/"><img src={homecomingday} alt="homecomingday"></img></a>
                        <a href="https://ou2023hcd.alumni.osaka-u.ac.jp/"><img src={homecomingday} alt="homecomingday"></img></a>
                    </div>
                </div>
            </div>
            <div className="sponsor-ocean">
                <div className="companies special">
                    <div className="sponsor-miniTitles">特別協賛</div>
                    <div className="sponsor-imgs">
                        <a href="https://ou2023hcd.alumni.osaka-u.ac.jp/"><img src={homecomingday alt="homecomingday"}></img></a>
                        <a href="http://www.rokkosai-kobe-univ.site/"><img src={rokkosai} alt="rokkosai"></img></a>
                    </div>
                </div>
            </div>      
        </div>
    )
}