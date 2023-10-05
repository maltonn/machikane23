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
import PageTitles from "../../components/PageTitles";
import Bubble from "../../components/Bubble";
export default function GoodsEn() {
    return(
        <div className="main">
            <Helmet>
            <title>Goods|Machikane2023</title>
            </Helmet>
            <div className="goods-sky">
                <PageTitles titles="Official Goods" kame={false}></PageTitles>
                <div className="goods-mainpage">
                    <div className="goods-back-card">
                        <p>At this 2023 Machikane Festival, we will offer our original stickers, ballpoint pens and tote bags!</p>
                        <p>Please come to the general information center and don’t miss the chance!</p>
                        <div className="goods-image">
                            <img src={allgoods} alt="ステッカー、ボールペン、トートバッグ"></img>
                        </div>
                    </div>
                </div>
                    <div className="goods-detail">
                        <div className="goods-title">Goods Introduction</div>
                                <div className="stickers">
                                    <img src={allstickers} alt="allstickers"></img>
                                </div>
                                <div className="stickers-content">
                                    <div className="goods-subtitle">Stickers (a set of 2)　300yen</div>
                                    <p>We will offer original stickers again by popular demand at the last festival! Find your favorite one from cute & cool designs!</p>
                                </div>
                                <div className="pen">
                                    <img src={pendetail} alt="pendetail"></img>
                                </div>
                                <div className="pen-content">
                                    <div className="goods-subtitle">Ballpoint pen　300yen</div>
                                    <p>We designed it to be cool and metallic. The logo “Han-Sun-Sun” on the pen is the main theme of the 2023 Machikane Festival.</p>
                                </div>
                                <div className="totebag-content">
                                    <div className="goods-subtitle">Tote bag　500yen</div>
                                    <p>Its size is for A4 and really convenient! You can also use this when looking around the festival.</p>
                                </div>
                                <div className="totebag">
                                    <img src={tote} alt="tote"></img>
                                </div>

                    </div>

                
            </div>
            <Bubble></Bubble>
        </div>
    )
}