import { Helmet } from "react-helmet";
import "../../css/Common.css"
import "../../css/ralley.css"
import "../../css/Project.css"
import { useEffect } from "react" 
import PageTitles from "../../components/PageTitles";
import Bubble from "../../components/Bubble";
import ralley1_icon from "../../imgs/ralley/ralley1_icon.png"
import ralley2_icon from "../../imgs/ralley/ralley2_icon.jpg"
import ralley3_icon from "../../imgs/ralley/ralley3_icon.jpg"
import startbooth from "../../imgs/ralley/startbooth.png"
import { useParams } from "react-router-dom";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function RalleyEn() {
    const { id } = useParams();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    },[id])
    return(
        <div className="main">
            <Helmet>
            <title>Rally Project|2023 Machikane Festival</title>
            </Helmet>
            <div className="ralley-sky">
                <PageTitles titles="Ralley Project" kam={false}></PageTitles>
                <div className="ralley-mainpage">
                    <p> At this Rally Project, visitors yourselves are going to go around the campus area. You can look around the whole Machikane Festival while enjoying our special project!
                    </p>
                    <p>
                    The starting point is the TENT on the Main street, near the piloti.(⭐on the map below)
We are looking forward to you coming!

                    </p>
                    <img src={startbooth} alt="スタートブース"></img>
                </div>
                <div className="ralley-intro">
                    <div className="ralley1">
                        <img src={ralley1_icon} alt="アイコン１"></img>
                        <div className="ralley1-content">
                            <div className="ralley1-title">Inter Campus Shuttle Bus Club</div>
                            <div classname="ralley1-intro">
                            Osaka University has unique club activities that you would rarely find elsewhere - and this "Surname Research Club" is one of them (though it's fictional). Collect "Inkan" - name stamps used in Japan in place of signatures - as you visit 5 club activity classrooms  placed around the campus.
                            </div>
                        </div>
                    </div>
                    <div className="ralley2">
                        <img src={ralley2_icon} alt="アイコン２"></img>
                        <div className="ralley2-content">
                            <div className="ralley2-title">Handai language circle GGC</div>
                            <div className="ralley2-intro">
                            Languages we often take for granted actually hold intriguing histories and linguistic perspectives. Why not delve into this with a quiz and uncover some fascinating facts?
                            </div>
                        </div>
                    </div>

                    <div className="ralley3">
                        <img src={ralley3_icon} alt="アイコン３"></img>
                        <div className="ralley3-content">
                            <div className="ralley3-title">OUtfoX</div>
                            <div className="ralley3-intro">
                            A lot of riddles in the classroom. But something seems strange. Can you solve all the riddles!? Now, your “Inspiration power” will be tested!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Bubble bubbleSwitch={false}></Bubble>
        </div>
    )
}