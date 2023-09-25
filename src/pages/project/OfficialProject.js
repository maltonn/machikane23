import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";

import "../../css/Common.css"
import "../../css/OfficialProject.css"

import machikaneForestLogo from "../../imgs/official_project/machikaneForest.png"
import pancakeLogo from "../../imgs/official_project/pancake.png"
import nepleage from "../../imgs/official_project/nepleague.png"
import O1Logo from "../../imgs/official_project/O-1.png"
import free from "../../imgs/official_project/free.png"
import ticket from "../../imgs/official_project/ticket.png"
import house from "../../imgs/official_project/house.png"
import clock from "../../imgs/official_project/clock.png"
import leaf from "../../imgs/official_project/leaf.png"
import bonber from "../../imgs/official_project/bonber.png"

import PageTitles from "../../components/PageTitles";

export default function OfficialProject() {
    return(
        <div className="officialProject">
            <Helmet>
            <title>委員会企画|まちかね祭2023</title>
            </Helmet>
            <div className="sky">
                <PageTitles titles="委員会企画|まちかね祭2023"></PageTitles>
                <div className="officialProAll">
                    <div className="offiProCard">
                        <div className="offiProCard-title">ぱんけえき焼きた亭</div>
                        <div className="inforAll">
                            <img className="officialIcon" src={pancakeLogo} alt="ぱんけえき焼きた亭のアイコン"></img>
                            <div className="information">
                                <p>・時間:10:00-18:00</p>
                                <p>・場所:メインストリート テント40</p>
                                <p>・整理券:なし</p>
                                <p>・おすすめ:全年齢（お子様にも）</p>
                                <p>・有料</p>
                            </div>
                        </div>
                    </div> 
                    <div className="offiProCard">
                        <div className="offiProCard-title">まちかねの森</div>
                        <div className="inforAll">
                            <img className="officialIcon" src={machikaneForestLogo} alt="まちかねの森のアイコン"></img>
                            <div className="information">
                                <p>・時間:10:00-12:00,13:00-17:00</p>
                                <p>・場所:C106</p>
                                <p>・整理券:あり</p>
                                <p>・おすすめ:全年齢（お子様にも）</p>
                                <p>・無料</p>
                            </div>
                        </div>
                    </div> 
                    <div className="offiProCard nepleageCard">
                        <div className="offiProCard-title">マチカネプリーグ</div>
                        <div className="inforAll">
                            <img className="officialIcon" src={nepleage} alt="マチカネプリーグのアイコン"></img>
                            <div className="information">
                                <p>・時間:10:00-12:00 13:00-17:00</p>
                                <p>・場所:C105</p>
                                <p>・整理券:あり</p>
                                <p>・おすすめ:高校生、大学生</p>
                                <p>・無料</p>
                            </div>
                        </div>
                    </div> 
                    <div className="offiProCard O-1card">
                        <div className="offiProCard-title">O-1GrandPrix</div>
                        <div className="inforAll">
                            <img className="officialIcon" src={O1Logo} alt="O-1GrandPrixのアイコン"></img>
                            <div className="information">
                                <p>・時間:11/05（企画日3日目） 17:00-19:00</p>
                                <p>・場所:ステージ奏</p>
                                <p>・整理券:なし</p>
                                <p>・おすすめ:全年齢</p>
                                <p>・無料</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="officialProDetail">
                    <div className="detailCard">
                        <div className="detail">
                            <h2 className="projectTitle">ぱんけえき焼きた亭</h2>
                            <div className="grade">
                                <div className="rate rate5">
                                </div>
                                <div className="rateNumber">5.0</div>
                            </div>
                            <div className="pancakeInfor">
                                <ul>
                                    <li className="pancakePlace">場所：メインストリート テント40</li>
                                    <li className="pancakeGenre">ジャンル：パンケーキ</li>
                                    <li className="pancakeTime">営業時間：11月3、4、5日<br></br>     10:00～18:00</li>
                                    <li className="pancakeMoney">予算：350－400</li>
                                </ul>
                            </div>
                            <div className="pancakeDetail">
                                <div className="iconAround"><img className="detailIcon" src={pancakeLogo} alt="ぱんけえき焼きた亭のアイコン"></img></div>
                                <div className="pancakeBoxs">
                                    <div className="pancakeBoxAround">
                                        <p className="pancakeBox">
                                            <div>1．焼きた亭のパンケーキはいつでも「焼きたて」を提供!</div>
                                            注文を受けてから作るのでパンケーキはいつでも焼きたて! 好きなトッピングをかけてできあがったホクホクパンケーキはうまいこと間違いなし!
                                        </p>
                                        <p className="pancakeBox">
                                            <div className="pancakeBoxTitle">2．パンケーキ以外のメニューも豊富</div>
                                            焼きた亭ではドリンクも提供しています。みんなだいすきラムネジュース! 学祭で飲むラムネは青春の味! シュワっとはじけてさらにまちかね祭へのモチベを上げちゃいませんか?!
                                        </p>
                                        <p className="pancakeBox">
                                            <div className="pancakeBoxTitle">3．おいしいパンケーキに種類豊富なトッピング</div>
                                            選べるトッピングは、①パンケーキの王道！「メイプルシロップ」②甘党さんにおすすめ！「塩キャラメル」③深みのある味！「黒蜜きなこ」④食べたことない組み合わせ？！「はちみつレモン」皆さんの推しトッピングを見つけてくださいね
                                        </p>
                                        <p className="pancakeBox">
                                            <div className="pancakeBoxTitle">4．甘いもの苦手さんにはこちら</div>
                                            パンケーキに何かトッピングはしたいけど、甘いものは苦手だなあという方には「ベーコンケチャップ」がおすすめ！他のお店ではあまり見ないパンケーキとベーコンのコラボ！ぜひご賞味あれ～
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="detail">
                            <h2 className="projectTitle">まちかねの森</h2>
                            <ul className="forestSimpleInfor">
                                <li className="forestPlace"><img src={house}></img>C-106</li>
                                <li className="forestMoney"><img src={free}></img>無料</li>
                                <li className="forestTicket"><img src={ticket}></img>なくなり次第終了</li>
                                <li className="forestTime"><img src={clock}></img><p>10：00～12：00</p><p>13:00～17:00（全日）</p></li>
                            </ul>
                            <div className="pointAll">
                                <div className="pointBox">
                                    <p className="pointTitle">Point1</p>
                                    <p className="pointContent">
                                    どうぶつの森のようにフルーツ狩りや魚釣りができます！（丁寧にルール説明をするのでどうぶつの森を知らなくても楽しめます！）
                                    </p>
                                </div>
                                <div className="pointBox">
                                    <p className="pointTitle">Point2</p>
                                    <p className="pointContent">
                                    小さなお子様大歓迎！どなたにでも楽しんでいただけるゲームをご用意しています！
                                    </p>
                                </div>
                                <div className="pointBox">
                                    <p className="pointTitle">Point3</p>
                                    <p className="pointContent">
                                    どうぶつの森の世界観を再現しつつ実行委員のオリジナルも盛り込まれた素敵な空間です
                                    </p>
                                </div>
                                <div className="pointBox">
                                    <p className="pointTitle">Point4</p>
                                    <p className="pointContent">
                                    各ゲームでポイントをゲットできます！沢山ポイントを集められた人には豪華な景品があるかも！？
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="detail">
                            <div className="nepleageQuestion">
                                Q．マチカネプリーグの特徴4つ答えろ
                            </div>
                            <div className="nepleageBar"><img src={bonber}></img></div>
                            <div className="nepleageInfor">
                                <div className="nepleagePlace">C105</div>
                                <div className="nepleageFree">無料</div>
                                <div className="nepleageTicket">整理券あり</div>
                                <div className="nepleageFor">高校生・大学生向け</div>
                            </div>
                        </div>
                        <div className="detail">
                            <div className="O-1Title"></div>
                            <div className="O-1DetailIcon"><img src={O1Logo}></img></div>
                            <div className="O-1Preparetion">Coming soon</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ocean">
                
            </div>
        </div>
    )
}