import { Helmet } from "react-helmet";
// import {Link} from "react-router-dom";
import PageTitles from "../../components/PageTitles";
import Bubble from "../../components/Bubble";

import "../../css/Common.css"
import { useEffect } from "react";
export default function Sections() {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    },[])
    return(
        <div className="main">
            <Helmet>
            <title>Project Category|2023 Machikane Festival</title>
            </Helmet>
            <div className="notes-sky">
                <PageTitles titles="Project Category" kame={true}></PageTitles>
                <div className="notes-mainpage">
                    <div className="notes-all">
                        <div className="notes-naiyou">
                            <div className="notes-miniTitle">In-Facility Projects</div>
                            <div className="notes-miniContent">
                                <p>　You will enjoy attractive music performances, workshops and exhibitions, and also can purchase some original goods offered by various clubs.  These projects are held at each classroom of CELAS buildings, lecture buildings(Let.Law.Econ, Law.Econ) and Student Union. Please come by and have fun!</p>
                            </div>
                        </div>
                        <div className="notes-naiyou">
                            <div className="notes-miniTitle">Rally Project</div>
                            <div className="notes-miniContent">
                                <p>※Included in In-Facility Projects </p>
                                <p>All the visitors can enjoy several projects walking around the campus and look around other projects. The starting point is the tent on the mainstreet, near piloti. We hope you enjoy!
                                </p>
                            </div>
                        </div>
                        <div className="notes-naiyou">
                            <div className="notes-miniTitle">Outdoor Projects</div>
                            <div className="notes-miniContent">
                                <p>　Street performances and exhibitionswill be held outside the buildings. You can find them around the Student Service Center(Kasane), Student Union and Cybermedia Center or in front of CELAS building C and graduate school of language. Walk around the campus and enjoy the show!</p>
                            </div>
                        </div>
                        <div className="notes-naiyou">
                            <div className="notes-miniTitle">Stage Performances</div>
                            <div className="notes-miniContent">
                                <p>　We have two stages, <ruby>奏<rt>“Kanade”</rt></ruby> which is in front of cafeteria Quartier and <ruby>宙<rt>"Sora"</rt></ruby> which is in front of cafeteria Kasane. You will be impressed by powerful dance and band performances! Please come and let’s share the passion!</p>
                            </div>
                        </div>
                        <div className="notes-naiyou">
                            <div className="notes-miniTitle">Food Stalls</div>
                            <div className="notes-miniContent">
                                <p>　At this 2023 Machikane Festial, we set up food stalls on Main street (<ruby>浪高庭園<rt>Namikou Garden</rt></ruby>side) and in front of Osaka University Hall. We expect more liveliness than during the covid. We also prepare seats and tents to eat in. Come by and enjoy our food!
</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Bubble></Bubble>
        </div>
    )
}