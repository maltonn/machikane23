import { Helmet } from "react-helmet";
// import {Link} from "react-router-dom";
import "../../css/Common.css"
export default function FAQ() {
    return(
        <div className="main">
            <Helmet>
            <title>よくあるご質問|まちかね祭2023</title>
            </Helmet>
            <div className="FAQ">
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">企画時間を教えてください。</div>
                    <div className="FAQ- card-A">
                        <table>
                            <tr>
                                <th colSpan={2}>場所</th>
                                <th>時間</th>
                            </tr>
                            <tr>
                                <td colSpan={2}>館内</td>
                                <td>全日とも10:00~18:20</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>屋外・模擬店</td>
                                <td>全日とも10:00~18:00</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>ステージ奏</td>
                                <td>全日とも10:00~19:00</td>
                            </tr>
                            <tr>
                                <td rowSpan={3}>ステージ宙</td>
                                <td>1日目</td>
                                <td>10:00~17:20</td>
                            </tr>
                            <tr>
                                <td>2日目</td>
                                <td>10:00~17:00</td>
                            </tr>
                            <tr>
                                <td>3日目</td>
                                <td>10:00~16:20</td>
                            </tr>
                        </table>
                    </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">購入したものを食べられる場所はありますか？</div>
                    <div className="FAQ- card-A">食事席</div>   
                </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">食事席はどこですか？</div>
                    <div className="FAQ- card-A">地図を貼りたい。</div>
                </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">自販機はどこにありますか？</div>
                    <div className="FAQ-card-A"> 全学共通Ａ･Ｂ棟間ピロティ、館下食堂前、豊総横、学生交流棟（かさね出口）横、学生会館横、サイバー（CMC）横など。模擬店でも飲料販売有り。</div>
                </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">トイレはどこにありますか？</div>
                    <div className="FAQ-card-A">. 全学共通棟、法経講義棟（１・２F）、文法経講義棟（男１・４F/女２・３F）、学生交流棟、学生会館、図書館下など。</div>
                </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">多目的トイレはどこですか？</div>
                　　<div className="FAQ-card-A">共通Ａ棟の西（奏側）１～４F、共通Ａ棟の東（Ｂ側）１F、共通Ｂ棟１F、共通Ｃ棟１F、法経講義棟１F、文法経講義棟１Fなど。</div>
                 </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">営業中のコンビニ・食堂は？</div>
                    <div className="FAQ-card-A"></div>
                </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">ATMはありますか？</div>
                    <div className="FAQ-card-A"> ローソンのATM、福利会館前(三井住友銀行)、郵便局が利用可能。</div>
                </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q"> ゴミ箱はどこにありますか？</div>
                    <div className="FAQ-card-A">屋外に3か所、館内に8か所あります。分別して捨てましょう。<br></br>
                                                屋外(ゴミステーション):メインストリート大講義室前、法経講義棟・文法経講義棟前道路、サイエンスコモンズ前(大学会館駐車場の食事席付近)<br></br>
                                                館内:共通棟A棟1F、B棟1F、AB棟2F・3F、C棟1F・2F・3F・4F</div>
                </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">総合案内所はどこですか？</div>
                    <div className="FAQ-card-A">メインストリート付近のテント。</div>
                </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">阪大グッズ（ワニ博士など）はどこで買えますか？</div>
                    <div className="FAQ-card-A">図書館下コンビニで購入可能です。<br></br>
                                               5日（日）は、学生交流棟（かさね）前での出張販売もあります。</div>
                </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">まちかね祭のグッズはどこで買えますか？</div>
                    <div className="FAQ-card-A">総合案内所です。</div>
                </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">パンフレットはどこで配っていますか？</div>
                    <div className="FAQ-card-A">総合案内所、柴原インフォ、石橋インフォ</div>
                </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">充電できるところはありますか？</div>
                    <div className="FAQ-card-A">ありません。</div>
                </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">たばこは吸えますか？</div>
                    <div className="FAQ-card-A">基礎工学部棟前、理学部棟前で可。キャンパス内は基本禁煙。</div>
                </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">お酒を飲んでも良いですか？</div>
                    <div className="FAQ-card-A">飲めません。</div>
                </div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">ペット同行は可能ですか？</div>
                    <div className="FAQ-card-A">ステージ、館内、屋外:ケージに入れたら可<br></br>
                          模擬店エリア（メインストリート）:ケージの有無に関わらず不可</div></div>
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
                    <div className="FAQ-card-A">学生会館横、共通棟C棟前、サイバーメディアセンター(CMC)横、文学研究棟前、言語文化研究棟前</div></div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">グラウンドでは何かやっていますか？</div>
                    <div className="FAQ-card-A">未定</div></div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">図書館は開いていますか？</div>
                    <div className="FAQ-card-A">開いていません。</div></div>
                <div className="FAQ-card">
                    <div className="FAQ-card-Q">再履バスは走りますか？</div>
                    <div className="FAQ-card-A">走りません。</div>
                </div>
                </div>
            </div>
        </div>
    )
}