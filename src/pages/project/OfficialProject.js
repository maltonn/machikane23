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
            <div className="machikaneForest">

            </div>
            <div className="pancake">

            </div>
            <div className="NepLeague">

            </div>
            <div className="O-1">

            </div>
        </div>
    )
}