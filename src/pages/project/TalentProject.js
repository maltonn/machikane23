import { Helmet } from "react-helmet"
import PageTitles from "../../components/PageTitles"
import "../../css/TalentProject.css"

import tombrown from "../../imgs/talentProject/tombrown.png"
import machikame1 from "../../imgs/animal/machikame1.png"
import machikame2 from "../../imgs/animal/machikame2.png"
import machikani from "../../imgs/animal/machikani.png"

export default function TalentProject(){
    return(
        <div className="talent">
            <Helmet>
                <title>タレント企画|まちかね祭2023</title>
            </Helmet>
            <div className="talentTop">
                <PageTitles titles="お笑いライブ" kame={true}></PageTitles>
                <div className="talentBox">
                    <h1 className="talentTitle"><span className="ribon">阪大にトム・ブラウンがやってくる！</span></h1>
                    <div className="machikame1"><img src={machikame1} alt="まちかめ"></img></div>
                    <div className="tombrown"><img src={tombrown} className="tombrownImg"　alt="トム・ブラウン"></img></div>
                </div>
                <div className="autographBlock">
                    <div className="machikani1"><img src={machikani} alt="まちかに"></img></div>
                    <p className="autograph">サインがもらえるかも!?</p>
                    <div className="machikani2"><img src={machikani} alt="まちかに"></img></div>
                </div>
                <div className="talentInfor">
                    <p className="talentDay">日時：11月4日(土) 14:00～15:00</p>
                    <p className="talentPlace">場所：大学会館 講堂</p>
                    <p className="startCaution">開場は13時からです。早めにお越しください。</p>
                </div>
                <h2 className="caution greeting-titles">注意事項</h2>
                <ul className="cautionAll">
                    <li className="caution1">この企画は事前予約制なので、以下のリンクからご予約お願いします。<br></br><a href="https://app.tyuujitu-system.net/machikane23/visotor/talent-live/reservation">https://app.tyuujitu-system.net/machikane23/visotor/talent-live/reservation</a></li>
                    <br></br>
                    <li className="caution2">当日キャンセルが出た場合は大学会館前で12:45から当日券を配布します。</li>
                    <br></br>
                    <li className="caution3">大学会館では、ご飲食・写真撮影はご遠慮ください。</li>
                    <br></br>
                </ul>
            </div>
        </div>
    )
}