import { Helmet } from "react-helmet";
import "../../css/Common.css"
export default function Access() {
    return(
        <div className="main">
            <Helmet>
            <title>アクセス|まちかね祭2023</title>
            </Helmet>
            <div className="preparation">
            </div>
            <div class="content">
                <div class="content_title">開催場所</div>
                    <div class="sub_content">
                        <div class="box1">大阪大学豊中キャンパス
                        </div>
                        <div class="box2"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.9961035925603!2d135.45196971519707!3d34.80603988507688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000fa8756800633%3A0x1140196a12668a41!2z5aSn6Ziq5aSn5a2mIOixiuS4reOCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1679931384942!5m2!1sja!2sjp" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                    </div>
            </div>
            <div class="content">
                <div class="content_title">アクセス</div>
                    <div class="sub_content">
                        <div class="box1">
                            <ul>
                                <li>阪急電車宝塚線　石橋阪大前駅より徒歩約15分
                                    <br>阪大坂を上り、総合案内所までお越しください</br>
                                </li>
                                <li>大阪モノレール　柴原阪大前駅より徒歩約15分
                                    <br>正門を通ってまっすぐ進み、総合案内所までお越しください</br>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
            <div class="content">
            <div class="content_title">注意</div>
                <div class="sub_content">
                    <div class="box1">
                        <ul>
                            <li>まちかね祭会場及び会場付近に駐車場はありませんので、公共交通機関をご利用ください。
                                 ただし、歩行が困難であるなどやむを得ない事情をお持ちの方は、事前に当委員会までご連絡ください。{/* お問い合わせはこちらで飛べるようにする */}
                            </li>
                            <li>自転車でお越しの方は図に記載の駐輪場をご利用くださいますようお願いいたします。
                            </li>
                            <li>まちかね祭期間中、メインストリート及びグラウンド付近の一部は駐輪禁止となっております。
                            </li>
                            <li>駐輪されている場合、サイバーメディアセンター北側の駐輪場へ移動させることがあります。
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="box2"><img src="img/2023年度まちかね祭駐輪場案内.png" alt="場所"></img></div>
            </div>
            <a href="./">トップページへ戻る</a>
        </div>
    )
}
