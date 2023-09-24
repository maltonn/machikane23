import { Helmet } from "react-helmet";
// import {Link} from "react-router-dom";

import "../../css/Common.css"
import "../../css/About.css"
import "../../css/Goods.css"
import machikame1 from "../../imgs/animal/machikame1.png"
import sticker1 from "../../imgs/goods/sticker1.png"
import sticker2 from "../../imgs/goods/sticker2.jpg"
import sticker3 from "../../imgs/goods/sticker3.jpg"
import sticker4 from "../../imgs/goods/sticker4.png"
import sticker5 from "../../imgs/goods/sticker5.png"
import pen1 from "../../imgs/goods/pen1.jpg"
import pen2 from "../../imgs/goods/pen2.png"
import pen3 from "../../imgs/goods/pen3.png"
import totebag from "../../imgs/goods/totebag.png"
export default function Goods() {
    return(

        <div className="main">
            <Helmet>
            <title>グッズ|まちかね祭2023</title>
            </Helmet>
            <div className="goods-sky">
                <PageTitles titles="グッズ"></PageTitles>
                <div className="goods-manpage">
                    <div className="goods-back-card">
                        <p>今年のまちかね祭では、ステッカー　ボールペン　トートバックを総合案内所にて販売します。</p>
                        <div className="goods-image">
                            <img src={stickers} alt="ステッカー５種"></img>
                            <img src={pen1} alt="ペン"></img>
                            <img src={totebag} alt="トートバック"></img>
                        </div>
                    </div>
                    <div className="goods-detail">
                        <div className="detail-title">グッズ紹介</div>
                            <div className="goods-stickers">
                                <div className="goods-subtitle">ステッカー</div>
                                <p>前回好評いただいたステッカーが今回も登場です。かわいいデザインからカッコイイデザインまで、様々なステッカをご用意しました。</p>
                            </div>
                            <div className="goods-pen">
                                <div className="goods-subtitle">ボールペン</div>
                                <p>メタリックでかっこいいデザインにしました。ロゴの「阪燦々」は今回のまちかね祭のメインテーマです。</p>
                            </div>
                            <div className="goods-totebag">
                                <div className="goods-subtitle">トートバック</div>
                                <p>A4サイズのものがしっかり入る便利な仕様です。学祭を回る際にぜひご活用ください。</p>
                            </div>
                    </div>

                </div>
            </div>
        </div>
    )

}