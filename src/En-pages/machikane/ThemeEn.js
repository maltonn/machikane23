import { Helmet } from "react-helmet";
// import {Link} from "react-router-dom";
import PageTitles from "../../components/PageTitles";
import Bubble from "../../components/Bubble";

import "../../css/Common.css"
import "../../css/Theme.css"
import "../../css/About.css"
export default function ThemeEn() {
    return(
        <div className="main">
            <Helmet>
            <title>Theme|2023 Machikane Festival</title>
            </Helmet>
            <div className ="theme-sky">
            <PageTitles titles="Theme" kame={true}></PageTitles>
              <div className = "themep-mainpage">
                <div className="themepen-nameEn">
                  "Han-Sun-<nobr>Sun. "</nobr>
                </div>
                <div className="themep-context">
                    <p>The theme for Machikane Festival 2023 is ─── "Han-Sun-<nobr>Sun "</nobr></p>
                    <p>We hope that every student of Osaka University will shine their characteristics as brightly as the sunlight.</p>
                    <p>Machikane Festival is the place where students can show off their accomplishments through everyday studies.  And those outcomes don’t have so many opportunities that can see the light of day.  Their efforts will be recognized only by being shown to the world.</p>
                    <p>Interactions with foreigners will make students’ characteristics more bright —- as the golden ginkgo trees glow under the autumn sunshine.  The brightness of students’ characteristics will inspire others —- as the ginkgo leaves turn to bright yellow pleasing people’s eyes.  In this unstable society and depressing world, young generations will surely be the light of hope for the future.</p>
                    <p>Through the theme “Han-Sun-Sun,” we sincerely hope all the Osaka University students show their characteristics by interacting with visitors and enlighten the whole campus with their brightness.</p>
                </div>
              </div>
            </div>
            <Bubble bubbleSwitch={false}></Bubble>
        </div>
    )
}