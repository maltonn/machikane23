import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";

import "../../css/Common.css"
import "../../css/Theme.css"
import "../../css/About.css"
import machikame1 from "../../imgs/animal/machikame1.png"
export default function Theme() {
    return(
        <div className="main">
            <Helmet>
            <title>テーマ|まちかね祭2023</title>
            </Helmet>
            <div className ="sky">
              <div className="themep-top">
                <div className="themep-title">
                    <h1>テーマ</h1>
                </div>
              </div>
              <div className = "themep-mainpage">
                <div className="themep-name">
                  "<ruby>阪燦々<rt>はんさんさん</rt></ruby>"
                </div>
                <div className="themep-context">
                  <p>まちかね祭は、学生たちが日々の研鑽の成果を世に示す場です。</p>
                  <p>緑に覆われた待兼山で努力する学生の成果が日の目を浴びる機会は多くはありません。世の人々の目に触れることによって初めて、学生の努力は光を放ちます。</p>
                  <p>秋の陽光によって銀杏並木が光り輝くように、外部との交流によって学生の個性は光り輝きます。紅葉した銀杏の鮮やかな色彩が歩行者の目を楽しませるように、学生が放つ個性の輝きは来場者の感性を刺激します。暗い社会情勢、鬱屈した世相の中、若い世代の輝きは明るい光となるで<nobr>しょう。</nobr></p>
                  <p>来場者との関わりの中で、また阪大生同士の交わりのなかで、阪大生の個性が燦々と輝き、阪大全体が明るい光に包まれますようにとの思いを込めて「阪燦々」のテーマを決定いたしました。</p>
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