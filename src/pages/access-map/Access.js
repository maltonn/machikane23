import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";
import "../../css/Common.css"
import "../../css/Access.css"
import Bubble from "../../components/Bubble";
import PageTitles from "../../components/PageTitles";
import guide from "../../imgs/map/2023年度まちかね祭駐輪場案内.png"

export default function Access() {
    function PageChange(){
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    return(
        <div className="main">
            <Helmet>
            <title>アクセス|まちかね祭2023</title>
            </Helmet>
            <div className="access-sky">
                
                <PageTitles titles="アクセス"></PageTitles>
                
                <h1>開催場所</h1>
                <div className="access-mainpage"> 
                    <div className="access-notes">
                        <div className="access-content">大阪大学豊中キャンパス
                        </div>
                    </div>
                </div>
                <h1>アクセス</h1>
                <div className="access-mainpage"> 
                    <div className="access-notes">
                        <div className="access-content">
                            <li>阪急電車宝塚線　石橋阪大前駅より徒歩約15分<br></br>
                                阪大坂を上り、総合案内所までお越しください
                            </li>
                            <li>大阪モノレール　柴原阪大前駅より徒歩約15分<br></br>
                                正門を通ってまっすぐ進み、総合案内所までお越しください
                            </li>
                        </div>
                    </div>
                </div>
                <h1>注意</h1>
                <div className="access-mainpage"> 
                    <div className="access-notes">
                        <div className="access-naiyou">
                        <li>まちかね祭会場及び会場付近に駐車場はありませんので、公共交通機関をご利用ください。
                            ただし、歩行が困難であるなどやむを得ない事情をお持ちの方は、事前に当委員会までご連絡ください。
                            <div className="link-button"><Link className="access-inquiry" to="./inquiry" onClick={PageChange}>お問い合わせ</Link>
                            </div>{/* お問い合わせボタンで飛べるようにする */}
                        </li>
                        <li>自転車でお越しの方は図に記載の駐輪場をご利用くださいますようお願いいたします。
                        </li>
                        <li>まちかね祭期間中、メインストリート及びグラウンド付近の一部は駐輪禁止となっております。
                        </li>
                        <li>駐輪されている場合、サイバーメディアセンター北側の駐輪場へ移動させることがあります。
                        </li>
                        <div className="access-guide"> 
                            <img src={guide} alt="2023年度まちかね祭駐輪場案内"></img>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <Bubble></Bubble>
        </div>
    )
}

