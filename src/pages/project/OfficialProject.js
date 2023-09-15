import { Helmet } from "react-helmet";
import "../../css/Common.css"
import "../../css/OfficialProject.css"

import machikaneForestLogo from "../../imgs/official_project/machikaneForest.png"
import pancakeLogo from "../../imgs/official_project/pancake.png"
import nepleage from "../../imgs/official_project/nepleague.png"
import O1Logo from "../../imgs/official_project/O-1.png"

export default function OfficialProject() {
    return(
        <div className="main">
            <Helmet>
            <title>委員会企画|まちかね祭2023</title>
            </Helmet>
            <h1 className="pageTitle">委員会企画|まちかね祭2023</h1>
            <div className="officialProAll">
                <div class="offiProCard">
                    <div class="offiProCard-title">ぱんけえき焼きた亭</div>
                    <div className="inforAll">
                        <img className="officialIcon" src={pancakeLogo} alt="ぱんけえき焼きた亭のアイコン"></img>
                        <div className="information">
                            時間:10:00-18:00<br></br>
                            場所:メインストリート テント40<br></br>
                            整理券:なし<br></br>
                            おすすめ:全年齢（お子様にも）<br></br>
                            有料<br></br>
                        </div>
                    </div>
                    企画内容ここに書く。企画内容ここに書く。企画内容ここに書く。企画内容ここに書く。企画内容ここに書く。企画内容ここに書く。企画内容ここに書く。
                </div> 
                <div class="offiProCard">
                    <div class="offiProCard-title">まちかねの森</div>
                    <div className="inforAll">
                        <img className="officialIcon" src={machikaneForestLogo} alt="まちかねの森のアイコン"></img>
                        <div className="information">
                        時間:10:00-12:00,13:00-17:00<br></br>
                        場所:C106<br></br>
                        整理券:あり<br></br>
                        おすすめ:全年齢（お子様にも）<br></br>
                        無料<br></br>
                        </div>
                    </div>
                    企画内容ここに書く。企画内容ここに書く。企画内容ここに書く。企画内容ここに書く。企画内容ここに書く。企画内容ここに書く。企画内容ここに書く。
                </div> 
                <div class="offiProCard">
                    <div class="offiProCard-title">マチカネプリーグ</div>
                    <div className="inforAll">
                        <img className="officialIcon" src={nepleage} alt="マチカネプリーグのアイコン"></img>
                        <div className="information">
                            時間:10:00-12:00 13:00-17:00<br></br>
                            場所:C105<br></br>
                            整理券:あり<br></br>
                            おすすめ:高校生、大学生<br></br>
                            無料<br></br>
                        </div>
                    </div>
                    企画内容ここに書く。企画内容ここに書く。企画内容ここに書く。企画内容ここに書く。企画内容ここに書く。企画内容ここに書く。企画内容ここに書く。
                </div> 
                <div class="offiProCard">
                    <div class="offiProCard-title">O-1GrandPrix</div>
                    <div className="inforAll">
                        <img className="officialIcon" src={O1Logo} alt="O-1GrandPrixのアイコン"></img>
                        <div className="information">
                            時間:11/05（企画日3日目） 17:00-19:00<br></br>
                            場所:ステージ奏<br></br>
                            整理券:なし<br></br>
                            おすすめ:全年齢<br></br>
                            無料<br></br>
                        </div>
                    </div>
                    企画内容ここに書く。企画内容ここに書く。企画内容ここに書く。企画内容ここに書く。企画内容ここに書く。企画内容ここに書く。企画内容ここに書く。
                </div>
            </div>
            <div className="officialProDetail">
                <div className="detailCard">
                    <div className="machikaneForest">
                        <span>ぱんけえき焼きた亭</span>
                        <span class="rate rate4-5"></span>
                        <a>
                            <span>焼きた亭のパンケーキはいつでも「焼きたて」を提供!</span>
                            注文を受けてから作るのでパンケーキはいつでも焼きたて! 好きなトッピングをかけてできあがったホクホクパンケーキはうまいこと間違いなし!
                        </a>
                        <a>
                            <span>パンケーキ以外のメニューも豊富</span>
                            焼きた亭ではドリンクも提供しています。みんなだいすきラムネジュース! 学祭で飲むラムネは青春の味! シュワっとはじけてさらにまちかね祭へのモチベを上げちゃいませんか?!
                        </a>
                        <a>
                            <span>おいしいパンケーキに種類豊富なトッピング</span>
                            選べるトッピングは、①パンケーキの王道！「メイプルシロップ」②甘党さんにおすすめ！「塩キャラメル」③深みのある味！「黒蜜きなこ」④食べたことない組み合わせ？！「はちみつレモン」皆さんの推しトッピングを見つけてくださいね
                        </a>
                        <a>
                            <span>甘いもの苦手さんにはこちら</span>
                            パンケーキに何かトッピングはしたいけど、甘いものは苦手だなあという方には「ベーコンケチャップ」がおすすめ！他のお店ではあまり見ないパンケーキとベーコンのコラボ！ぜひご賞味あれ～
                        </a>
                    </div>
                    <div className="pancake">

                    </div>
                    <div className="NepLeague">

                    </div>
                    <div className="O-1">

                    </div>
                </div>
            </div>
        </div>
    )
}