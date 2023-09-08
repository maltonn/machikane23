import { Helmet } from "react-helmet";
import circlecloud1 from "../../imgs/circlecloud1.png"
import circlecloud2 from "../../imgs/circlecloud2.png"
import circlecloud3 from "../../imgs/circlecloud3.png"
import cloud1 from "../../imgs/cloud/left_cloud.png"
import cloud2 from "../../imgs/cloud/right_cloud.png"
import machikame1 from "../../imgs/animal/machikame1.png"
import "../../css/Common.css"
import "../../css/About.css"
export default function About() {
    return(
      <div className="main">
        <Helmet>
          <title>まちかね祭とは|まちかね祭2023</title>
        </Helmet>
        <div className="sky">
          <div className="top">
            <div className="machikame1"> 
              <img src={machikame1} alt="まちかめ1"></img>
            </div>
            {/* <div className="circlecloud1"><img src={circlecloud1} alt="くも"></img></div> */}
           
            <div className="title">
                <h1>まちかね祭に<nobr>ついて</nobr></h1>
            </div>
            {/* <div className="cloud2"><img src={cloud2} alt="雲"></img></div> */}
          </div>
          {/* <div className="circlecloud2"><img src={circlecloud2} alt="くも"></img></div>
          <div className="circlecloud3"><img src={circlecloud3} alt="くも"></img></div> */}
            <div className="mainpage"> 
              <div className="notes">
                {/* <span id="notes-title">来場者の方へ</span> */}
                <div className="contents">「まちかね祭」は、11月に開催される大阪大学の大学祭です。
1960年まで行われていた「体育文化祭」が「大学祭」へと改められたことに始まり、今年で63回目の開催となります。
まちかね祭という名前は1996年に公募により決められました。</div>
              </div>
            </div>
        </div>
        <div className="ocean">
      
            <div className="bottom">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
            </div>
        </div>
    </div>
    )
}
