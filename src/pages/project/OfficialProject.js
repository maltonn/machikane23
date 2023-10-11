import { Helmet } from "react-helmet";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
import leaf from "../../imgs/official_project/leaf1.png"
import bonber from "../../imgs/official_project/bonber.png"
import tomosankaku from "../../imgs/official_project/98D797FC-C7EF-403E-BC42-D1E724A9F536 - 毛笠龍之介.jpeg"
import DJcola from "../../imgs/official_project/IMG_20230930_094521 - たいち.jpg"
import santiago from "../../imgs/official_project/IMG_3680 - まつし.jpeg"
import noimage from "../../imgs/official_project/noimage.png"

import PageTitles from "../../components/PageTitles";
import { useEffect } from "react";
import Bubble from "../../components/Bubble";

export default function OfficialProject() {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    },[])

    const O1Participant=[
        {
            "name":"突き抜けた赤子",
            "catchCopy":"伊勢神宮のアンチ",
            "grade":"非公開",
            "comment":"やるぞ！",
            "image":noimage
        },
        {
            "name":"トモサンカク",
            "catchCopy":"お笑いエンジニアリング",
            "grade":"工学部M2と工学部M2 ",
            "comment":"私たちの漫才による腹痛に、トモサンカクは一切の責任を負いません。",
            "image":tomosankaku
        },
        {
            "name":"山婆",
            "catchCopy":"香り高い隣人",
            "grade":"人間科学部2年",
            "comment":"俺たちについてこい",
            "image":noimage
        },
        {
            "name":"DJ Cola",
            "catchCopy":"サステナブルお笑い学（再履修）",
            "grade":"工学部環境エネルギー学科B4の２人",
            "comment":"絶対に触るなよ、訴えるぞ！",
            "image":DJcola
        },
        {
            "name":"スッカラカン",
            "catchCopy":"全部使い切れ！",
            "grade":"文学部B4と外部生",
            "comment":"中学以来の同期コンビです！ふたりとも初の舞台ですが、目標に向かってまっすぐ頑張ります",
            "image":noimage
        },
        {
            "name":"カマスカダイ",
            "catchCopy":"舞台を大きく",
            "grade":"法学部B2と法学部B2",
            "comment":"ベストを尽くします",
            "image":noimage
        },
        {
            "name":"探偵ジム",
            "catchCopy":"新感覚お笑い表現",
            "grade":"工学部B1と人間科学部B1",
            "comment":"心に沁みる漫才をします",
            "image":noimage
        },
        {
            "name":"サンティアゴ",
            "catchCopy":"吹かせろ異国の風",
            "grade":"二人とも工学部B2",
            "comment":"優勝します！",
            "image":santiago
        },
        {
            "name":"七尺",
            "catchCopy":"ファンタジー成長中",
            "grade":"人間科学部B2と文学部B2",
            "comment":"我々の話を是非楽しんでください！",
            "image":noimage
        },
    ]

    return(
        <div className="officialProject">
            <Helmet>
            <title>実行委員企画|まちかね祭2023</title>
            </Helmet>
            <div className="sky">
            <PageTitles titles="実行委員企画" kame={true}></PageTitles>
                <div className="officialProAll">
                    <AnchorLink href="#pancake" className="officialProject-link">
                        <div className="offiProCard">
                            <div className="offiProCard-title">ぱんけえき焼きた亭</div>
                            <div className="inforAll">
                                <div className="IconBox">
                                    <img className="officialIcon" src={pancakeLogo} alt="ぱんけえき焼きた亭のアイコン"></img>
                                </div>
                                <div className="information">
                                    <p>・時間 : 10:00-18:00</p>
                                    <p>・場所 : メインストリート テント40</p>
                                    <p>・整理券 : なし</p>
                                    <p>・おすすめ : 全年齢（お子様にも）</p>
                                    <p>・有料</p>
                                </div>
                            </div>
                        </div> 
                    </AnchorLink>
                    <AnchorLink href="#machikaneForest" className="officialProject-link">
                        <div className="offiProCard">
                            <div className="offiProCard-title">まちかねの森</div>
                            <div className="inforAll">
                                <div className="IconBox">
                                    <img className="officialIcon" src={machikaneForestLogo} alt="まちかねの森のアイコン"></img>
                                </div>
                                <div className="information">
                                    <p>・時間 : 10:00-12:00,13:00-17:00</p>
                                    <p>・場所 : C106</p>
                                    <p>・整理券 : あり</p>
                                    <p>・おすすめ : 全年齢（お子様にも）</p>
                                    <p>・無料</p>
                                </div>
                            </div>
                        </div> 
                    </AnchorLink>
                    <AnchorLink href="#nepleage" className="officialProject-link">
                        <div className="offiProCard nepleageCard">
                            <div className="offiProCard-title">マチカネプリーグ</div>
                            <div className="inforAll">
                                <div className="IconBox">
                                    <img className="officialIcon" src={nepleage} alt="マチカネプリーグのアイコン"></img>
                                </div>
                                <div className="information">
                                    <p>・時間 : 10:00-12:00 13:00-17:00</p>
                                    <p>・場所 : C105</p>
                                    <p>・整理券 : あり</p>
                                    <p>・おすすめ : 高校生、大学生</p>
                                    <p>・無料</p>
                                </div>
                            </div>
                        </div> 
                    </AnchorLink>
                    <AnchorLink href="#O-1" className="officialProject-link">
                        <div className="offiProCard O-1card">
                            <div className="offiProCard-title">O-1GrandPrix</div>
                            <div className="inforAll">
                                <div className="IconBox">
                                    <img className="officialIcon" src={O1Logo}  alt="O-1GrandPrixのアイコン"></img>
                                </div>
                                <div className="information">
                                    <p>・時間 : 11/05（企画日3日目） 17:00-19:00</p>
                                    <p>・場所 : ステージ奏</p>
                                    <p>・整理券 : なし</p>
                                    <p>・おすすめ : 全年齢</p>
                                    <p>・無料</p>
                                </div>
                            </div>
                        </div>
                    </AnchorLink>
                </div>
                <div className="officialProDetail">
                    <div className="detailCard">
                        <div className="detail" id="pancake">
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
                                    <li className="pancakeTime">営業時間：11月3、4、5日  10:00～18:00</li>
                                    <li className="pancakeMoney">予算：350－400</li>
                                </ul>
                            </div>
                            <div className="pancakeDetail">
                                <div className="iconAround"><img className="detailIcon" src={pancakeLogo} alt="ぱんけえき焼きた亭のアイコン"></img></div>
                                
                                <div className="pancakeBoxs">
                                    <div className="pancakeBoxAround">
                                        <p className="pancakeBox">
                                            <div><strong>1．焼きた亭のパンケーキはいつでも「焼きたて」を提供!</strong></div>
                                            注文を受けてから作るのでパンケーキはいつでも焼きたて! 好きなトッピングをかけてできあがったホクホクパンケーキは美味しいこと間違いなし!
                                        </p>
                                        <p className="pancakeBox">
                                            <div className="pancakeBoxTitle"><strong>2．パンケーキ以外のメニューも！</strong></div>
                                            焼きた亭ではドリンクも提供しています。みんなだいすきラムネジュース! 学祭で飲むラムネは青春の味! シュワっとはじけてさらにまちかね祭へのモチベを上げちゃいませんか?!
                                        </p>
                                        <p className="pancakeBox">
                                            <div className="pancakeBoxTitle"><strong>3．おいしいパンケーキに種類豊富なトッピング</strong></div>
                                            選べるトッピングは、①パンケーキの王道！「メイプルシロップ」②甘党さんにおすすめ！「塩キャラメル」③深みのある味！「黒蜜きなこ」④食べたことない組み合わせ？！「はちみつレモン」皆さんの推しトッピングを見つけてくださいね！
                                        </p>
                                        <p className="pancakeBox">
                                            <div className="pancakeBoxTitle"><strong>4．甘いもの苦手さんにはこちら</strong></div>
                                            パンケーキに何かトッピングはしたいけど、甘いものは苦手だなあという方には「ベーコンケチャップ」がおすすめ！他のお店ではあまり見ないパンケーキとベーコンのコラボ！ぜひご賞味あれ～！
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="detail machikaneForestDetail" id="machikaneForest">
                            <h2 className="projectTitle">まちかねの森</h2>
                            <ul className="forestSimpleInfor">
                                <li className="forestPlace">
                                    <table>
                                        <tr>
                                            <td><img src={house} alt="まちかねの森企画場所"></img></td>
                                            <td>C-106</td>
                                        </tr>
                                    </table>
                                </li>
                                <li className="forestMoney">
                                    <table>
                                        <tr>
                                            <td><img src={free} alt="まちかねの森"></img></td>
                                            <td>無料</td>
                                        </tr>
                                    </table>
                                </li>
                                <li className="forestTicket">
                                    <table>
                                        <tr>
                                            <td><img src={ticket} alt="整理券"></img>
                                            </td>
                                            <td>なくなり次第終了</td>
                                        </tr>
                                    </table>
                                </li>
                                <li className="forestTime">
                                    <table>
                                        <tr>
                                            <td><img src={clock} alt="開催時間"></img>
                                            </td>
                                            <td><p>10：00～12：00</p><p>13:00～17:00（全日）</p></td>
                                        </tr>
                                    </table>
                                </li>
                            </ul>
                            <div className="pointAll">
                                <div className="pointBox">
                                    <img src={leaf} alt="葉っぱ"></img>
                                    <p className="pointContent">
                                    <span>Point1</span>
                                        <p>
                                            どうぶつの森のようにフルーツ狩りや魚釣りができます！（丁寧にルール説明をするのでどうぶつの森を知らなくても楽しめます！）
                                        </p>
                                    </p>
                                </div>
                                <div className="pointBox">
                                    <img src={leaf} alt="葉っぱ"></img>
                                    <p className="pointContent">
                                    <span>Point2</span>
                                        <p>
                                            小さなお子様大歓迎！どなたにでも楽しんでいただけるゲームをご用意しています！
                                        </p>
                                    </p>
                                </div>
                                <div className="pointBox">
                                    <img src={leaf} alt="葉っぱ"></img>
                                    <p className="pointContent">
                                    <span>Point3</span>
                                        <p>
                                            どうぶつの森の世界観を再現しつつ実行委員のオリジナルも盛り込まれた素敵な空間です！
                                        </p>
                                    </p>
                                </div>
                                <div className="pointBox">
                                    <img src={leaf} alt="葉っぱ"></img>
                                    <p className="pointContent">
                                    <span>Point4</span>
                                        <p>
                                            各ゲームでポイントをゲットできます！沢山ポイントを集められた人には豪華な景品があるかも！？
                                        </p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="detail" id="nepleage">
                            <div className="nepleageQuestion">
                                <p>
                                    Q．マチカネプリーグの特徴4つ答えろ
                                </p>
                            </div>
                            <div className="nepleageBar"><img src={bonber} alt="ネプリーグのバー"></img></div>
                            <ul className="nepleageInfor">
                                <li className="nepleagePlace"> C105 </li>
                                <li className="nepleageFree"> 無料 </li>
                                <li className="nepleageTicket">整理券あり</li>
                                <li className="nepleageFor">高校生・大学生向け</li>
                            </ul>
                        </div>
                        <div className="detail O-1Detail" id="O-1">
                            <div className="O-1Title"></div>
                            <div className="O-1DetailIcon"><img src={O1Logo} alt="O-1アイコン"></img></div>
                            <div className="O-1boxAround">
                                {O1Participant.map((data)=>{
                                    return(
                                        <div className="O-1box">
                                            <div className="O1Image"><img src={data.image} alt="出場者写真"></img></div>
                                            <p>{data.name}</p>
                                            <p>{data.grade}</p>
                                            <p>{data.catchCopy}</p>
                                            <p>{data.comment}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Bubble bubbleSwitch={false}></Bubble>
        </div>
    )
}