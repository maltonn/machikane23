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
import nakamura from "../../imgs/sponsor/nakamura.jpg"
import tripfarm from "../../imgs/sponsor/tripfarm.png"
import heiwaonsen from "../../imgs/sponsor/heiwaonsen.png"
import homecomingday from "../../imgs/sponsor/home-coming-day.jpg"
import rokkosai from "../../imgs/sponsor/rokkosai.jpeg"
import maizou from "../../imgs/sponsor/maizou.jpg"
import { useEffect } from "react";
import cloud from "../../imgs/circlecloud3.png"
import machikame1 from "../../imgs/animal/machikame1.png"
import { useGlobalContext } from "../../contexts/globalContext";

export default function SponsorEn({titles,kame}) {
    const { lang } = useGlobalContext()
    useEffect(() => {
        const $ = el => document.querySelector(el);
        var titleLength = document.getElementById('pageTitles').textContent.length;
        if(lang==='en'){
            titleLength=titleLength/2.1;
        }
        $(':root').style.setProperty('--base-pageLength', `${titleLength}rem`);
        if(kame!==true){
            document.getElementById('machikameNone').style.display='none';
        }
      }, [titles,kame,lang])
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    },[])
    return(
        <div className="main">
            <Helmet>
            <title>Our sponsors|2023 Machikane Festival</title>
            </Helmet>
            <div className="sponsor-sky">
                <div className="top-component-1">
                    <div className="page-titles" id="pageTitles">Our sponsors</div>
                    <div className="machikame-default" id="machikameNone">
                        <img src={machikame1} alt="まちかめ1"></img>
                    </div>
                </div>
                <div class="thanks">We would like to express our sincere appreciation toward all the sponsors for the 2023 Machikane Festival.</div>
                <div className="cloud">
                    <img src={cloud} alt="丸雲"></img>
                </div>
                <div className="companies goods">
                    <div className="sponsor-miniTitles-En1">Goods Sponsoring<br className="smartphone"></br>&nbsp;(without honorifics and order)</div>
                    <div className="sponsor-imgs">
                        <a href="https://solaniwa.com/" target="_blank" rel="noreferrer"><img src={solaniwaonsen} alt="solaniwa"></img></a>
                        <a href="https://www.sudio.com/jp/"target="_blank" rel="noreferrer"><img src={sudio} alt="sudio"></img></a>
                        <a href="https://www.sorakakeru.com/" target="_blank" rel="noreferrer"><img src={sorakakeru} alt="sorakakeru"></img></a>
                        <a href="https://jankara.ne.jp/index.html" target="_blank" rel="noreferrer"><img src={jankara} alt="jankara"></img></a>
                        <a href="https://big-echo.jp/" target="_blank" rel="noreferrer"><img src={bigecho} alt="big-echo"></img></a>
                        <a href="https://www.cornedbeef.jp/" target="_blank" rel="noreferrer"><img src={kawashofoods} alt="cornedbeef"></img></a>
                        <a href="https://www.hankyu-hotel.com/hotel/hh/senrihh" target="_blank" rel="noreferrer"><img src={senrihankyuhotel} alt="senri-hankyu-hotel"></img></a>
                        <a href="https://www.kasugai.co.jp/" target="_blank" rel="noreferrer"><img src={kasugai} alt="kasugai"></img></a>
                        <a href="https://www.cow-soap.co.jp/" target="_blank" rel="noreferrer"><img src={cowsoap} alt="cow-soap"></img></a>
                        <a href="https://www.osaka-toka.co.jp/" target="_blank" rel="noreferrer"><img src={osakatoka} alt="osaka-toka"></img></a>
                        <a href="https://bandainamco-am.co.jp/others/tondemi/" target="_blank" rel="noreferrer"><img src={tondemi} alt="tondemi"></img></a>
                        <a href="https://bandainamco-am.co.jp/others/vspark/" target="_blank" rel="noreferrer"><img src={VSPARK} alt="VSPARK"></img></a>
                        <div>
                            <a href="http://sone.ps-vega.com" target="_blank" rel="noreferrer">VEGA曽根ボウル</a>
                            <br></br>
                            <a href="http://atoa-kobe.jp" target="_blank" rel="noreferrer">株式会社アクアメント　AQUARIUM×ART átoa</a>
                            <br></br>
                            <a href="https://www.award-style.com" target="_blank" rel="noreferrer">株式会社Award Style</a>
                            <br></br>
                            <a href="https://www.yojiya.co.jp/" target="_blank" rel="noreferrer">よーじやグループ</a>
                            <br></br>
                            <span>リーガロイヤルホテル</span>
                            <br></br>
                            <span>株式会社マンナンライフ</span>
                        </div>
                    </div>
                </div>
                <div className="companies advertise">
                    <div className="sponsor-miniTitles-En2">Ad Sponsoring<br className="smartphone"></br>&nbsp;(without honorifics and order)</div>
                    <div className="sponsor-imgs">
                        <a href="https://heiwaonsen.com/" target="_blank" rel="noreferrer"><img src={heiwaonsen} alt="heiwaonsen"></img></a>
                        <a href="https://amzn.asia/d/5zzuKa0" target="_blank" rel="noreferrer"><img src={nakamura} alt="nakamura"></img></a>
                        <a href="https://ewha-yifu.com/" target="_blank" rel="noreferrer"><img src={tripfarm}></img></a>
                        <a href="https://www.seito-jp.com/minimini/ishibashi" target="_blank" rel="noreferrer">株式会社成都賃貸ホームズミニミニFC石橋店</a>
                    </div>
                </div>
            </div>
            <div className="sponsor-ocean">
                <div className="companies special">
                    <div className="sponsor-miniTitles-En3">Special Sponsoring<br className="smartphone"></br>&nbsp;(without honorifics and order)</div>
                    <div className="sponsor-imgs">
                        <a href="https://ou2023hcd.alumni.osaka-u.ac.jp/" target="_blank" rel="noreferrer"><img src={homecomingday}></img></a>
                        <a href="http://www.rokkosai-kobe-univ.site/" target="_blank" rel="noreferrer"><img src={rokkosai}></img></a>
                        <a href="https://www.osaka-u.ac.jp/ja/event/2023/11/10510" target="_blank" rel="noreferrer"><img src={maizou} alt="maizoubunnkatyousa"></img></a>
                    </div>
                </div>
            </div>      
        </div>
    )
}