import { Helmet } from "react-helmet";
import PageTitles from "../../components/PageTitles";
import tombrown from "../../imgs/talentProject/tombrown.png"
import machikani from "../../imgs/animal/machikani.png"
import Bubble from "../../components/Bubble"
import { useEffect } from "react";

export default function TalentProjectEn(){
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: "smooth",
        })
    })
    return(
        <div className="talent">
            <Helmet>
                <title>タレント企画|2023 Machikane Festival</title>
            </Helmet>
            <div className="talentTop">
                <PageTitles titles="Comedy LIVE Show" kame={true}></PageTitles>
                <div className="talentBox">
                    <h1 className="talentTitle"><span className="ribon">“Tombrown” comes to Osaka University!</span></h1>
                    <div className="tombrown"><img src={tombrown} className="tombrownImg"　alt="トム・ブラウン"></img></div>
                </div>
                <div className="autographBlockEn">
                    <div className="machikani1"><img src={machikani} alt="まちかに"></img></div>
                    <p className="autograph">You may have a chance to get an autograph!?</p>
                    <div className="machikani2"><img src={machikani} alt="まちかに"></img></div>
                </div>
                <div className="talentInfor">
                    <p className="talentDay">Date : Nov.4 (Sat.)  14:00~15:00</p>
                    <p className="talentPlace">Place : Auditorium, Osaka University Hall</p>
                    <p className="startCaution">Doors open at 13:00. Please come early and have a seat.</p>
                </div>
                <div className="talentProjectCaution">
                    <h2 className="caution">Notice</h2>
                    <ul className="cautionAll">
                        <li className="caution1">The show requires an advance reservation. Please make a <strong>reservation</strong> from the link below.
                        <p className="reservationUrl">
                            <a href="https://app.tyuujitu-system.net/machikane23/visotor/talent-live/reservation">reservation</a>
                        </p>
                        </li>
                        <br></br>
                        <li className="caution2">If a cancellation happens on a day, we  will distribute walk-up tickets in front of the Osaka University Hall.</li>
                        <br></br>
                        <li className="caution3">No eating, drinking and photos inside the auditorium. Thank you for your cooperation.</li>
                        <br></br>
                    </ul>
                </div>
            </div>
            <Bubble></Bubble>
        </div>
    )
}