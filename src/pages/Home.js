import "../css/Home.css"
import machikame1 from "../imgs/animal/machikame1.png"
import machikame2 from "../imgs/animal/machikame2.png"
import left_cloud from "../imgs/cloud/left_cloud.png"
import right_cloud from "../imgs/cloud/right_cloud.png"
import machikani from "../imgs/animal/machikani.png"
import search from "../imgs/pickup_icon/icon_search.png"
import goods from "../imgs/pickup_icon/icon_goods.png"
import recommend from "../imgs/pickup_icon/icon_recommend.png"
import access from "../imgs/pickup_icon/icon_access.png"
import map from "../imgs/pickup_icon/icon_map.png"
import timetable from "../imgs/pickup_icon/icon_stage.png"
import { Helmet } from "react-helmet";
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    window.addEventListener('load', () => {
      var move = document.getElementById('move').children;
      setTimeout(function () {
        for (var i = 0; i < move.length; i++) {
          move[i].classList.add('loaded');
        }
      }, 1000);
    });
    const $ = el => document.querySelector(el);
    window.addEventListener('load', () => {
      var surfaceHeight=document.getElementById('surface').getBoundingClientRect().bottom-document.getElementById('surface').getBoundingClientRect().top;
      $(':root').style.setProperty('--base-height', `${surfaceHeight}px`);
    });
  },[])

    return(
  <div className="top-main">
        <Helmet>
          <title>トップページ|まちかね祭2023</title>
        </Helmet>
        <div id="loader">
          <div className="machikame1"> 
            <img src={machikame1} alt="まちかめ1"></img>
          </div>
          <div id="move">
            <img src={left_cloud} alt="左雲"></img>
            <img src={right_cloud} alt="右雲"></img>
          </div>
        </div>  

    <div className="sky2">
      <div className="mainpage1">
        <div className="news">
          <span id="title">お知らせ</span>
            <table className="news-table">
              <tbody>
                    <tr>
                        <td className="news-date">9/16(土)</td>
                        <td className="news-content">トップページを更新しました。</td>
                    </tr>
                    <tr>
                        <td className="news-date">9/1(金)</td>
                        <td className="news-content">まちかね祭2023公式サイトが完成しました。</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="notes">
          <span id="title">来場者の方へ</span>
          <div className="content">まちかね祭に車でご来場いただくことはできません。<br/>ご来場の際は公共交通機関をご利用ください。</div>
        </div>
      </div>
    </div>

    <div id="surface">
      <div className="ocean">
        <div className="mainpage2">

          <div className="schedule">
            <div className="subtitle">
              <div className="titles"><nobr><p className="item1">●</p><span id="title">企画時間</span><p className="item2">●</p><p className="item3">●</p></nobr></div>
            </div>
            <table className="section-schedule">
              <tbody>
                    <tr>
                        <td className="section">館内</td>
                        <td className="section-time">10:00〜18:20</td>
                    </tr>
                    <tr>
                        <td className="section">屋外</td>
                        <td className="section-time">10:00〜18:00</td>
                    </tr>
                    <tr>
                        <td className="section"><nobr>ステージ</nobr></td>
                        <td className="section-time">10:00〜19:00</td>
                    </tr>
                    <tr>
                        <td className="section">模擬店</td>
                        <td className="section-time">10:00〜18:00</td>
                    </tr>
                </tbody>
            </table>
          </div>
          <div className="machikame1"> 
            <img src={machikame2} alt="まちかめ2"></img>
          </div>

          <div className="stage">
            <div className="titles" id="stage-title"><nobr><p className="item1">●</p><span id="title">現在のステージ企画</span><p className="item2">●</p><p className="item3">●</p></nobr></div>
            <div className="pre-ocean">まちかね祭当日までお待ちください</div>
            <div className="machikani1"><img src={machikani} alt="まちかに"></img></div>
          </div>

          <div className="lab">
            <div className="titles"><nobr><p className="item1">●</p><span id="title">研究室紹介</span><p className="item2">●</p><p className="item3">●</p></nobr></div>
            <p>研究室の企画は、以下のリンクからご覧ください</p>
            <a href="./lab-open">詳細はこちら</a>
          </div>

          <div id="pickup">
            <div className="pickup-titles"><nobr><p className="item1">●</p><span id="title">PICKUP</span><p className="item2">●</p><p className="item3">●</p></nobr></div>
            <div className="pickup-box">
                <a href="./project-search"><div className="pickup-button">
                  <div className="pickup-icon"><img src={search} alt="search"></img></div>
                  <div className="pickup-title">企画検索</div>
                </div></a>
                <a href="./goods"><div className="pickup-button">
                  <div className="pickup-icon"><img src={goods} alt="goods"></img></div>  
                  <div className="pickup-title">グッズ</div>
                </div></a>
                <a href="./official-project"><div className="pickup-button">
                  <div className="pickup-icon"><img src={recommend} alt="recommend"></img></div>  
                  <div className="pickup-title">委員会企画</div>
                </div></a><br/>
                <a href="./access"><div className="pickup-button">
                  <div className="pickup-icon"><img src={access} alt="access"></img></div>
                  <div className="pickup-title">アクセス</div>
                </div></a>
                <a href="./map"><div className="pickup-button">
                  <div className="pickup-icon"><img src={map} alt="map"></img></div>  
                  <div className="pickup-title">マップ</div>
                </div></a>
                <a href="./timetable"><div className="pickup-button">
                  <div className="pickup-icon"><img src={timetable} alt="timetable"></img></div> 
                  <div className="pickup-title">ステージタイムテーブル</div>
                </div></a>
            </div>
          </div>
  
          <div className ="about">
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

          <div className="bottom">
            <div className="bubble"></div>
            <div className="bubble1"></div>
            <div className="bubble"></div>
            <div className="bubble1"></div>
            <div className="bubble"></div>
            <div className="bubble1"></div>
            <div className="bubble"></div>
            <div className="bubble1"></div>
            <div className="bubble"></div>
            <div className="bubble1"></div>
            <div className="bubble"></div>
            <div className="bubble1"></div>
          </div>

      </div>
    </div>
  </div>
    )
}
