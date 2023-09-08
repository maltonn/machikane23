import { Helmet } from "react-helmet";
import "../../css/Common.css"
export default function Theme() {
    return(
        <div className="main">
            <Helmet>
            <title>テーマ|まちかね祭2023</title>
            </Helmet>
            <div className ="ocean-card about">
            <div className="titles"><nobr><p className="item1">●</p><span id="title">テーマ</span><p className="item2">●</p><p className="item3">●</p></nobr></div>
            <div className="theme-title">"<ruby>阪燦々<rt>はんさんさん</rt></ruby>"</div>
            <div className="theme-context">
              <p>2023年度まちかね祭のテーマは「阪燦々」（はんさんさん）に決定いたしました。</p>
              <p>このテーマには、まちかね祭において阪大生の個性が燦々と輝きますように、との思いが込められています。</p>
              <p>まちかね祭は、学生たちが日々の研鑽の成果を世に示す場です。</p>
              <p>緑に覆われた待兼山で努力する学生の成果が日の目を浴びる機会は多くはありません。世の人々の目に触れることによって初めて、学生の努力は光を放ちます。</p>
              <p>秋の陽光によって銀杏並木が光り輝くように、外部との交流によって学生の個性は光り輝きます。紅葉した銀杏の鮮やかな色彩が歩行者の目を楽しませるように、学生が放つ個性の輝きは来場者の感性を刺激します。暗い社会情勢、鬱屈した世相の中、若い世代の輝きは明るい光となるでしょう。</p>
              <p>来場者との関わりの中で、また阪大生同士の交わりのなかで、阪大生の個性が燦々と輝き、阪大全体が明るい光に包まれますようにとの思いを込めて「阪燦々」のテーマを決定いたしました。</p>
            </div>
          </div>
        </div>
    )
}