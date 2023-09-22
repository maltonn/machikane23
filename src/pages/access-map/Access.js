import { Helmet } from "react-helmet";
import machikame1 from "../../imgs/animal/machikame1.png"
import {Link} from "react-router-dom";

import "../../css/Common.css"
import "../../css/Access.css"
import guide from "../../imgs/map/2023年度まちかね祭駐輪場案内.png"
export default function Access() {
    return(
        <div className="main">
            <Helmet>
            <title>アクセス|まちかね祭2023</title>
            </Helmet>
            <div className="sky">
                <div className="top">
                    <div className="machikame"> 
                    <img src={machikame1} alt="まちかめ1"></img>
                    </div>
                    <div className="title">
                        <h1>開催場所</h1>
                    </div>
                </div>
                <div className="mainpage"> 
                    <div className="notes">
                        <div className="content">大阪大学豊中キャンパス
                        </div>
                    </div>
                </div>
                <div className="top">
                    <div className="machikame"> 
                    <img src={machikame1} alt="まちかめ1"></img>
                    </div>
                    <div className="title">
                        <h1>アクセス</h1>
                    </div>
                </div>
                <div className="mainpage"> 
                    <div className="notes">
                        <div className="content">
                            <li>阪急電車宝塚線　石橋阪大前駅より徒歩約15分<br></br>
                                阪大坂を上り、総合案内所までお越しください
                            </li>
                            <li>大阪モノレール　柴原阪大前駅より徒歩約15分<br></br>
                                正門を通ってまっすぐ進み、総合案内所までお越しください
                            </li>
                        </div>
                    </div>
                </div>
                <div className="top">
                    <div className="machikame"> 
                    <img src={machikame1} alt="まちかめ1"></img>
                    </div>
                    <div className="title">
                        <h1>注意</h1>
                    </div>
                </div>
                <div className="mainpage"> 
                    <div className="notes">
                        <div className="naiyou">
                        <li>まちかね祭会場及び会場付近に駐車場はありませんので、公共交通機関をご利用ください。
                            ただし、歩行が困難であるなどやむを得ない事情をお持ちの方は、事前に当委員会までご連絡ください。
                            <div className="button"><a className="inquiry" href="./inquiry">お問い合わせ</a>
                            </div>{/* お問い合わせボタンで飛べるようにする */}
                        </li>
                        <li>自転車でお越しの方は図に記載の駐輪場をご利用くださいますようお願いいたします。
                        </li>
                        <li>まちかね祭期間中、メインストリート及びグラウンド付近の一部は駐輪禁止となっております。
                        </li>
                        <li>駐輪されている場合、サイバーメディアセンター北側の駐輪場へ移動させることがあります。
                        </li>
                        <div className="guide"> 
                            <img src={guide} alt="2023年度まちかね祭駐輪場案内"></img>
                        </div>
                        </div>
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
/*             <a href="./">トップページへ戻る</a>
        </div> 
    )
} */
