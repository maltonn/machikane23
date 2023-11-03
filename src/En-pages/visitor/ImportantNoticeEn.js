import { Helmet } from "react-helmet";
import "../../css/Common.css"
import "../../css/About.css"
import PageTitles from "../../components/PageTitles";
import Bubble from "../../components/Bubble";
import { useEffect } from "react";

export default function About() {
    useEffect(()=>{
      window.scrollTo({
          top: 0,
          behavior: "smooth",
      });
    },[])
    
    return(
      <div className="main">
        <Helmet>
          <title>大阪大学からの重要なお知らせ|まちかね祭2023</title>
        </Helmet>
        <div className="about-sky">
            <PageTitles titles="大阪大学からの重要なお知らせ" kame={true}></PageTitles>
            <div className="about-mainpage">
                <div className="notes-miniTitle">[IMPORTANT] Regarding contamination of emergency drinking water distributed at the Machikane Festival (Friday, November 3)</div>
                <p> On Friday, November 3, 2023, on Osaka University’s Toyonaka Campus, the Osaka University Department of Safety and Hygiene distributed emergency food and drinking water* stockpiled at the university to attendees to the Machikane Festival who wished to receive them.</p>
                <p>Later, a report was received that a white mold-like substance was found in one of the 500 ml bottles of drinking water that had been distributed.</p>
                <p>Additionally, if you happen to find any foreign matter contained within drinking water that you have received, we ask that you do not open it and instead contact the email address listed below.</p>
                <p style={{textAlign:"center"}}>Contact
Osaka University Department of Safety and Hygiene
anzen-suisindai1@office.osaka-u.ac.jp
</p>
                <p>We sincerely apologize for any trouble and concern we may have caused regarding this matter.</p>
                <p>We sincerely apologize for any trouble and concern we may have caused regarding this matter.</p>
                <div className="name"><p>Osaka University Executive Vice President TANAKA Toshihiro<br></br>
                Osaka University Executive Vice President INOUE Keiji</p></div>
             </div>
          </div>
          <Bubble bubbleSwitch={false}></Bubble>
      </div>
    )
}
