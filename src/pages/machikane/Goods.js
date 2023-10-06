import { Helmet } from "react-helmet";
// import {Link} from "react-router-dom";

import "../../css/Common.css"
import "../../css/About.css"
import "../../css/Goods.css"
// import stickers from "../../imgs/goods/stickers.png"
import allstickers from "../../imgs/goods/stickers_line.png"
// import stickers2 from "../../imgs/goods/stickers2.png"
import pendetail from "../../imgs/goods/pen.png"
// import pen1 from "../../imgs/goods/pen1.jpg"
import tote from "../../imgs/goods/totebag.png"
import allgoods from "../../imgs/goods/allgoods.png"
import Bubble from "../../components/Bubble";
import { useEffect } from "react";
import cloud from "../../imgs/circlecloud3.png"
import machikame1 from "../../imgs/animal/machikame1.png"
import { useGlobalContext } from "../../contexts/globalContext";
export default function Goods({titles,kame}) {
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
            <title>グッズ|まちかね祭2023</title>
            </Helmet>
            <div className="goods-sky">
                <div className="top-component-2">
                    <div className="page-titles" id="pageTitles">グッズ</div>
                    <div className="machikame-default" id="machikameNone">
                        <img src={machikame1} alt="まちかめ1"></img>
                    </div>
                </div>
                <div className="goods-mainpage">
                    <div className="goods-back-card">
                        <p>今年のまちかね祭では、ステッカー、ボールペン、トートバッグを総合案内所にて販売します。</p>
                        <div className="goods-image">
                            <img src={allgoods} alt="ステッカー、ボールペン、トートバッグ"></img>
                        </div>
                    </div>
                </div>
                <div className="cloud-1">
                    <img src={cloud} alt="丸雲"></img>
                </div>
                    <div className="goods-detail">
                        <div className="goods-title">グッズ紹介</div>
                                <div className="stickers">
                                    <img src={allstickers} alt="allstickers"></img>
                                </div>
                                <div className="stickers-content">
                                    <div className="goods-subtitle">ステッカー２枚セット　300円</div>
                                    <p>前回好評いただいたステッカーが今回も登場です。かわいいデザインからカッコイイデザインまで、様々なステッカーをご用意しました。</p>
                                </div>
                                <div className="pen">
                                    <img src={pendetail} alt="pendetail"></img>
                                </div>
                                <div className="pen-content">
                                    <div className="goods-subtitle">ボールペン　300円</div>
                                    <p>メタリックでかっこいいデザインにしました。ロゴの「阪燦々」は今回のまちかね祭のメインテーマです。</p>
                                </div>
                                <div className="totebag-content">
                                    <div className="goods-subtitle">トートバッグ　500円</div>
                                    <p>A4サイズのものがしっかり入る便利な仕様です。学祭を回る際にぜひご活用ください。</p>
                                </div>
                                <div className="totebag">
                                    <img src={tote} alt="tote"></img>
                                </div>

                    </div>

                
            </div>
            <Bubble bubbleSwitch={false}></Bubble>
        </div>
    )

}