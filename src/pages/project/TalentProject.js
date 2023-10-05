import { Helmet } from "react-helmet"
import PageTitles from "../../components/PageTitles"
import "../../css/TalentProject.css"

import tombrown from "../../imgs/talentProject/tombrown.png"
import machikani from "../../imgs/animal/machikani.png"
import Bubble from "../../components/Bubble"
import { useEffect } from "react"

export default function TalentProject(){
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    },[])
    return(
        <div className="talent">
            <Helmet>
                <title>タレント企画|まちかね祭2023</title>
            </Helmet>
            <div className="talentSky">
                <div className="talentTop">
                    <PageTitles titles="お笑いライブ" kame={true}></PageTitles>
                    <div className="talentBox">
                        <h1 className="talentTitle"><span className="ribon">阪大にトム・ブラウンがやってくる！</span></h1>
                        <div className="tombrown"><img src={tombrown} className="tombrownImg" alt="トム・ブラウン"></img></div>
                    </div>
                    <div className="autographBlock">
                        <div className="machikani1"><img src={machikani} alt="まちかに"></img></div>
                        <p className="autograph">サインがもらえるかも!?</p>
                        <div className="machikani2"><img src={machikani} alt="まちかに"></img></div>
                    </div>
                    <div className="talentInfor">
                        <p className="talentDay">日時：11月4日(土) 14:00～15:00</p>
                        <p className="talentPlace">場所：大学会館 講堂</p>
                        <p className="startCaution">開場は13時からです。お早めにお越しください。</p>
                    </div>
                    <div className="talentProjectCaution">
                        <h2 className="caution">注意事項</h2>
                        <ul className="cautionAll">
                            <li className="caution1">この企画は<strong>事前予約</strong>制なので、以下のリンクからご予約お願いします。応募者多数の場合は、抽選を行います。予めご了承ください。
                            </li>
                        </ul>    
                            <div className="reservationUrl">
                                <a href="https://app.tyuujitu-system.net/machikane23/visitor/talent-live" target="_blank" rel="noreferrer">予約</a>
                            </div>
                        <ul className="cautionAll"> 
            
                            <br></br>
                            <li className="caution2">当日キャンセルが出た場合は大学会館前で12:45から当日券を配布します。</li>
                            <br></br>
                            <li className="caution3">大学会館では、ご飲食・写真撮影はご遠慮ください。</li>
                            <br></br>
                        </ul>
                    </div>
                </div>
            </div>
            <Bubble bubbleSwitch={false}></Bubble>
        </div>
    )
}
