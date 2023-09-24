import { Helmet } from "react-helmet";
// import {Link} from "react-router-dom";

import "../../css/Common.css"
import "../../css/About.css"
import "../../css/Goods.css"
import stickers from "../../imgs/goods/stickers.png"
import stickers2 from "../../imgs/goods/stickers2.png"
import pendetail from "../../imgs/goods/pen-detail.png"
import pen1 from "../../imgs/goods/pen1.jpg"
import tote from "../../imgs/goods/tote.png"

import PageTitles from "../../components/PageTitles";
import Bubble from "../../components/Bubble";
export default function Goods() {
    return(

        <div className="main">
            <Helmet>
            <title>グッズ|まちかね祭2023</title>
            </Helmet>
            <div className="goods-sky">
                <PageTitles titles="グッズ"></PageTitles>
                <div className="goods-mainpage">
                    <div className="goods-back-card">
                        <p>今年のまちかね祭では、ステッカー　ボールペン　トートバックを総合案内所にて販売します。</p>
                        <div className="goods-image">
                            <img src={stickers} alt="ステッカー５種"></img>
                            <img src={pen1} alt="ペン"></img>
                            <img src={tote} alt="トートバック"></img>
                        </div>
                    </div>
                </div>
                    <div className="goods-detail">
                        <div className="goods-title">グッズ紹介</div>
                            <div className="goods-stickers">
                                <div className="goods-subtitle">ステッカー</div>
                                <p>前回好評いただいたステッカーが今回も登場です。かわいいデザインからカッコイイデザインまで、様々なステッカをご用意しました。</p>
                            </div>
                            <img src={stickers2} alt="ステッカー"></img>
                            <div className="goods-pen">
                                <div className="goods-subtitle">ボールペン</div>
                                <p>メタリックでかっこいいデザインにしました。ロゴの「阪燦々」は今回のまちかね祭のメインテーマです。</p>
                            </div>
                            <img src={pendetail} alt="ペン"></img>
                            <div className="goods-totebag">
                                <div className="goods-subtitle">トートバック</div>
                                <p>A4サイズのものがしっかり入る便利な仕様です。学祭を回る際にぜひご活用ください。</p>
                            </div>
                            <img src={tote} alt="トートバック"></img>
                    </div>

                
            </div>
            <Bubble></Bubble>
        </div>
    )

}