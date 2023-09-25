import { Helmet } from "react-helmet";
import "../../css/Common.css"
import "../../css/About.css"
import PageTitles from "../../components/PageTitles";
import Bubble from "../../components/Bubble";

export default function About() {
    return(
      <div className="main">
        <Helmet>
          <title>まちかね祭とは|まちかね祭2023</title>
        </Helmet>
        <div className="about-sky">
            <PageTitles titles="まちかね祭について"></PageTitles>
            <div className="about-mainpage"> 
                <p> まちかね祭」は、11月に開催される大阪大学の大学祭です。
                  1960年まで行われていた「体育文化祭」が「大学祭」へと改められたことに始まり、今年で63回目の開催となります。
                  まちかね祭という名前は1996年に公募により決められました。
                </p>
                <p>
                  今回のまちかね祭では、コロナ禍以降では最多の170以上の企画に加え、
                  メインストリートでの模擬店・屋外企画の復活により、阪大生の活気をより一層感じていただけます。
                  かつての学祭の姿を取り戻し、さらなる進化を見せるまちかね祭にぜひお越しください。
                </p>
             </div>
          </div>
          <Bubble></Bubble>
      </div>
    )
}
