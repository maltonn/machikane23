import { Helmet } from "react-helmet"
import "../../css/TalentProject.css"

import tombrown from "../../imgs/talentProject/tombrown.png"

export default function TalentProject(){
    return(
        <div className="main">
            <Helmet>
                <title>タレント企画|まちかね祭2023</title>
            </Helmet>
            <h1>阪大にトムブラウンがやってくる！</h1>
            <figure><img src={tombrown}></img></figure>
            <p>サインがもらえるかも</p>
            <p>日時：11月4日(土) 14:00～15:00</p>
            <p>場所：大学会館</p>
            <p>開場は13時からです。<br></br>早めにお越しください。</p>
            <h2>注意事項</h2>
            <ul>
                <li>この企画は事前予約制なので、以下のリンクからご予約お願いします。</li>
                <li>当日キャンセルが出た場合は大学会館前で12:45から当日券を配布します。</li>
                <li>大学会館では、ご飲食・写真撮影はご遠慮ください。</li>
            </ul>
        </div>
    )
}