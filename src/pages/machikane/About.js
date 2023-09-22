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
            <div className="machikame"> 
             <img src={machikame1} alt="まちかめ1"></img>
            </div>
            <div className="title">
                <h1>まちかね祭に<nobr>ついて</nobr></h1>
            </div>
          </div>
            <div className="mainpage"> 
              <div className="notes">
                <div className="contents">「まちかね祭」は、11月に開催される大阪大学の大学祭です。
                  1960年まで行われていた「体育文化祭」が「大学祭」へと改められたことに始まり、今年で63回目の開催となります。
                  まちかね祭という名前は1996年に公募により決められました。
                  <br></br>
                  今回のまちかね祭では、コロナ禍以降では最多の170以上の企画に加え、
                  メインストリートでの模擬店・屋外企画の復活により、阪大生の活気をより一層感じていただけます。
                  かつての学祭の姿を取り戻し、さらなる進化を見せるまちかね祭にぜひお越しください。
                </div>
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
