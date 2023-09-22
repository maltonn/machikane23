import { Helmet } from "react-helmet";
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
            <div className="sky">
                <div className="goodsp-top">
                    <div className="machikame"> 
                        <img src={machikame1} alt="まちかめ1"></img>
                    </div>
                    <div className="goodsp-title">
                        <h1>グッズ</h1>
                    </div>
                </div>
                <div className="goods-mainpage">
                    {/* <div className="goods-intro">
                        ここに『グッズ販売をすること』を書く。
                        <p>ここに『グッズ販売をすること』を書く。</p>
                    </div> */}
                    <div className="goods-name">
                        ・ステッカー　300円（二枚セット）
                    </div>
                    <div className="goods-content">                    
                        前回好評いただいたステッカーが今回も登場。かわいいものから<nobr>かっ</nobr>こいいものまでデザイン様々取り揃えています。
                    </div>
                    <div className="goods-images3">
                        <img src={sticker1} alt="ステッカー1"></img>
                    </div>
                    <div className="goods-images3">
                        <img src={sticker2} alt="ステッカー2"></img>
                    </div>
                    <div className="goods-images3">
                        <img src={sticker4} alt="ステッカー3"></img>
                    </div>
                    <div className="goods-images3">
                        <img src={sticker3} alt="ステッカー4"></img>
                    </div>
                    <div className="goods-images2">
                        <img src={sticker5} alt="ステッカー5"></img>
                    </div>

                    <div className="goods-name">
                        ・ボールペン　300円
                    </div>
                    <div className="goods-content">                    
                        メタリックでかっこいいデザイン。書かれたロゴ「阪燦々」は今回のまちかね祭のメインテーマです。
                    </div>
                    <div className="goods-box">
                        <div className="goods-images3">
                            <img src={pen1} alt="ボールペン1"></img>
                        </div>
                        <div className="goods-images3">
                            <img src={pen2} alt="ボールペン2"></img>
                        </div>
                    </div>
                    <div className="goods-name">
                        ・トートバッグ　500円
                    </div>
                    <div className="goods-content">                    
                        A4サイズがしっかり入る便利なトートバッグ。学祭を回るときのお供にぜひ。
                    </div>
                    <div className="goods-images1">
                        <img src={totebag} alt="トートバッグ"></img>
                    </div>
                    {/* <div className="goods-accesstitle">
                        販売場所
                    </div> */}
                </div>
            </div>

            <div className="ocean">      
                <div className="bottom">
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                </div>
            </div>

        </div>
    )
}