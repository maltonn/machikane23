import { Helmet } from "react-helmet";
import "../../css/Common.css"
import {Link} from "react-router-dom";
import "../../css/About.css"
import PageTitles from "../../components/PageTitles";
import Bubble from "../../components/Bubble";

export default function AboutEn() {
    return(
        <div className="main">
            <Helmet>
            <title>What is Machikane Festival?|Machikane2023</title>
            </Helmet>
            <div className="about-sky">
            <PageTitles titles="What is Machikane Festival?" kame={true}></PageTitles>
            <div className="about-mainpage"> 
                <p> ”Machikane Festival” is the festival we hold every November. 
                    This time will be our 64th, since its former “Sports & Culture Festival” turned into “Machikane Festival” in 1960. 
                    The name of the festival was elected from public submission in 1963.
                </p>
                <p>
                Over 170 projects will be held this year and it is the biggest number after the pandemic. 
                Also, food stalls and stage performances will come back to the main street, so you can feel more of Osaka University students’ passion. 
                 Please come and enjoy our updated Machikane Festival!
                </p>
             </div>
          </div>
          <Bubble></Bubble>
        </div>
    )
}