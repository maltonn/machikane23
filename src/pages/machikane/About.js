import "../../css/About.css"
import { Helmet } from "react-helmet";
export default function About() {
    return(
    <div>
        <Helmet>
          <title>まちかね祭とは|まちかね祭2023</title>
        </Helmet>
        <div className="sky2">
            <div className="mainpage1">
              <div class="title">
                <h1>まちかね祭に<nobr>ついて</nobr></h1>
              </div>
              <div className="notes">
                <span id="notes-title">来場者の方へ</span>
                <div className="pre-sky">まちかね祭に車でご来場いただくことはできません。<br/>ご来場の際は公共交通機関をご利用ください。</div>
              </div>
            </div>
        </div>
        <div className="ocean">
            <div className="mainpage2">
              <div className="schedule">
                <div className="subtitle">
                <nobr><p className="item1">●</p><span id="schedule-title">企画時間</span><p className="item2">●</p><p className="item3">●</p></nobr>
                </div>
                <div className="pre-ocean"><a href="./">トップページへ戻る</a></div>
              </div>
            </div>
      
            <div className="bottom">
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
