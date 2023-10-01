import { Helmet } from "react-helmet";
// import {Link} from "react-router-dom";
import "../../css/Common.css"
import "../../css/FAQ.css"
import PageTitle from "../../components/PageTitles"
import Bubble from "../../components/Bubble"
import map from "../../imgs/map/屋外メインストリート.png"
export default function FAQ() {
    return(
        <div className="main">
            <Helmet>
            <title>よくあるご質問|まちかね祭2023</title>
            </Helmet>
            <div className="FAQ">
                <PageTitle titles="FAQ" ></PageTitle>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">企画時間を教えてください。</div>
                    <div className="FAQ-card-A">
                        <table className="FAQ-table">
                            <tr>
                                <th>場所</th>
                                <th>11/3(金)</th>
                                <th>11/4(土)</th>
                                <th>11/5(日)</th>
                            </tr>
                            <tr>
                                <td >館内</td>
                                <td colSpan={3}className="FAQ-table">10:00~18:20</td>
                            </tr>
                            <tr>
                                <td >屋外・模擬店</td>
                                <td colSpan={3}className="FAQ-table">10:00~18:00</td>
                            </tr>
                            <tr>
                                <td>ステージ奏</td>
                                <td colSpan={3}className="FAQ-table">10:00~19:00</td>
                            </tr>
                            <tr>
                                <td>ステージ宙</td>
                                <td>10:00~17:20</td>
                                <td>10:00~17:00</td>
                                <td>10:00~16:20</td>
                            </tr>
                        </table>
                    </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">購入したものを食べられるところはありますか？</div>
                    <div className="FAQ- card-A"> 食事席をご利用頂けます。</div>   
                </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">食事席はどこですか？</div>
                    <div className="FAQ- card-A">マップをご参照ください。
                    <img  src={map} alt="map"className="FAQ-map"></img></div>
                </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">自販機はどこにありますか？</div>
                    <div className="FAQ-card-A"> 全学教育共通A･B棟間ピロティ、図書館下食堂前、豊中総合学館横、学生交流棟横（かさね出口付近）、学生会館横、サイバーメディアセンター（CMC）横などにございます。
模擬店（グラウンド内）でも飲料の販売がございます。</div>
                </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">トイレはどこにありますか？</div>
                    <div className="FAQ-card-A">. 全学共通棟、法経講義棟（ 1・２F）、文法経講義棟（男１・４F/女２・３F）、学生交流棟、学生会館、図書館下などにございます。</div>
                </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">多目的トイレはどこですか？</div>
                    <div className="FAQ-card-A">共通Ａ棟の西（奏側）１～４F、共通Ａ棟の東（Ｂ側）１F、共通Ｂ棟１F、共通Ｃ棟１F、法経講義棟１F、文法経講義棟１Fなどにございます。</div>
                </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">営業中のコンビニ・食堂はありますか？</div>
                    <div className="FAQ-card-A">図書館下コンビニ、ローソン、ミュージアムカフェ「坂」は以下の通り、営業しております。<br></br>
 図書館下コンビニ:全日とも11:00～15:00
  ローソン:1日目（11/3）・3日目（11/5）は9:00～16:00、2日目（11/4）は8:00～21:00<br></br>
  ミュージアムカフェ「坂」:全日とも11:00～14:00<br></br>
  ※図書館下食堂、福利会館購買は全日とも休業しております。</div>
                </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">ATMはありますか？</div>
                    <div className="FAQ-card-A"> ローソンのATM、福利会館前(三井住友銀行)、郵便局がご利用頂けます。<br></br>
                                                （郵便局のATMは2日目（11/4）のみ、ご利用頂けます）</div>
                </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q"> ゴミ箱はどこにありますか？</div>
                    <div className="FAQ-card-A">屋外に3か所、全学教育共通棟内に8か所の計11か所に設置しております。<br ></br>
  分別して捨てて頂きますよう、お願い致します。<br></br>
  屋外(ゴミステーション)：メインストリート大講義室前、法経講義棟・文法経講義棟前道路、サイエンスコモンズ前(大学会館駐車場の食事席付近)<br></br>
  共通棟内:A棟1Ｆ、Ｂ棟1Ｆ、ＡＢ棟2Ｆ・3Ｆ、Ｃ棟1Ｆ・2Ｆ・3Ｆ・4Ｆ
                    </div>
                </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">総合案内所はどこですか？</div>
                    <div className="FAQ-card-A">メインストリート中央付近にございます。</div>
                </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">阪大グッズ（ワニ博士など）はどこで買えますか？</div>
                    <div className="FAQ-card-A">図書館下コンビニで購入可能です。<br></br>
                                               5日（日）は、学生交流棟（かさね）前での出張販売を行います。</div>
                </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">まちかね祭のグッズはどこで買えますか？</div>
                    <div className="FAQ-card-A">総合案内所でご購入頂けます。</div>
                </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">パンフレットはどこで配っていますか？</div>
                    <div className="FAQ-card-A">総合案内所、柴原インフォメーション、石橋インフォメーションにて配布しております。</div>
                </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">充電できるところはありますか？</div>
                    <div className="FAQ-card-A">ありません。</div>
                </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">たばこは吸えますか？</div>
                    <div className="FAQ-card-A">基礎工学部棟前、理学部棟前が喫煙可能場所となっております。キャンパス内は、それらの場所を除き、全面的に禁煙であることをご了承ください。</div>
                </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">お酒を飲んでも良いですか？</div>
                    <div className="FAQ-card-A">飲めません。</div>
                </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">ペット同行は可能ですか？</div>
                    <div className="FAQ-card-A">模擬店エリア（メインストリート）：ペット同伴でのご来場はご遠慮ください。<br></br>
ステージ、館内、屋外：ケージに入れて頂いた場合は同伴可能です。</div></div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">体調が優れないときはどうすれば良いですか？</div>
                    <div className="FAQ-card-A"> お近くの中実員へお声がけください。</div>
                </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">迷子を発見 / 落とし物を拾いました</div>
                    <div className="FAQ-card-A">本部受付（ピロティ）までお連れ/お持ち頂くか、お近くの中実員へお声がけください。</div></div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q"> 迷子/落とし物を探しています</div>
                    <div className="FAQ-card-A">本部受付（ピロティ）へお越しください。</div></div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">屋外の企画場所はどこですか？</div>
                    <div className="FAQ-card-A">学生会館横、共通棟C棟前、サイバーメディアセンター(CMC)横、文学研究棟前、言語文化研究棟前の計５ヶ所です。</div></div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">グラウンドでは何かやっていますか？</div>
                    <div className="FAQ-card-A">企画は行っておりません。</div></div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">図書館は開いていますか？</div>
                    <div className="FAQ-card-A">開いておりません。</div></div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">再履バスは走りますか？</div>
                    <div className="FAQ-card-A">走りません。</div>
                </div>
                </div>
            </div>
        </div>
    )
}