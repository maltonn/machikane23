import { Helmet } from "react-helmet";
import "../../css/Common.css"
import "../../css/About.css"
import "../../css/Goods.css"
import machikame1 from "../../imgs/animal/machikame1.png"
export default function Goods() {
    return(
        <div className="main">
            <Helmet>
            <title>グッズ|まちかね祭2023</title>
            </Helmet>
            <div className="sky">
          <div className="top">
            <div className="machikame"> 
             <img src={machikame1} alt="まちかめ1"></img>
            </div>
            <div className="title">
                <h1>グッズ</h1>
            </div>
          </div>
          <div className="goods-mainpage">
            <div className="goods-intro">
                ここに『グッズ販売をすること』を書く。
                <p>ここに『グッズ販売をすること』を書く。</p>
            </div>
            <div className="goods-name">
                ・グッズ名
            </div>
            <div className="goods-content">                    
                グッズ紹介を入れる
                <p>グッズ紹介を入れる</p>
            </div>
            <div className="goods-name">
                ・グッズ名あいうえ
            </div>
            <div className="goods-content">                    
                グッズ紹介を入れるグッズ紹介を入れるグッズ紹介を入れるグッズ紹介を入れるグッズ紹介を入れるあいうえお
                <p>グッズ紹介を入れるグッズ紹介を入れるグッズ紹介を入れる</p>
            </div>
            <div className="goods-accesstitle">
                販売場所
            </div>
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