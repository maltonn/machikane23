import { Helmet } from "react-helmet";
import "../../css/Common.css"
import"../../css/Home.css"
import machikame1 from "../../imgs/animal/machikame1.png"
import machikame2 from "../../imgs/animal/machikame2.png"
import left_cloud from "../../imgs/cloud/left_cloud.png"
import right_cloud from "../../imgs/cloud/right_cloud.png"
import machikani from "../../imgs/animal/machikani.png"
import search from "../../imgs/pickup_icon/icon_search.png"
import goods from "../../imgs/pickup_icon/icon_goods.png"
import recommend from "../../imgs/pickup_icon/icon_recommend.png"
import access from "../../imgs/pickup_icon/icon_access.png"
import map from "../../imgs/pickup_icon/icon_map.png"
import timetable from "../../imgs/pickup_icon/icon_stage.png"
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
            <span id="title">Updates</span>
              <table className="news-table">
                <tbody>
                      <tr>
                          <td className="news-date">Sep.16(Sat.)</td>
                          <td className="news-content">We've updated the top page.</td>
                      </tr>
                      <tr>
                          <td className="news-date">Sep.1(Fri.)</td>
                          <td className="news-content">The official website is now open!</td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <div className="notes">
            <span id="title">To all the visitors</span>
            <div className="content">Cars are not allowed on campus.<br/>Please use public transportation when you come to the Toyonaka Campus</div>
          </div>
          <div className="machikani1"><img src={machikani} alt="まちかに"></img></div>
        </div>
      </div>
  
      <div id="surface">
        <div className="ocean">
          <div className="mainpage2">
  
            <div className="ocean-card">
              <div className="titles"><nobr><p className="item1">●</p><span id="title">About Projects</span><p className="item2">●</p><p className="item3">●</p></nobr></div>
              <div className="sections">
                <span style={{right:0, color:'#F4E511'}}>館内区分</span>
                <p>館内区分では、様々なサークル、部活による個性豊かな演奏、販売、体験、展示などの企画が行われます。これらはその名の通り、全学教育共通棟、文法経講義棟、法経講義棟、学生会館の教室内で実施されております。ぜひお立ち寄りください。</p>
                <span style={{right:0, color:'#F4E511'}}>ラリー企画</span>
                <p>※館内区分内で実施</p>
                <p>ラリー企画では、来場者の皆さん自身が大学構内を移動しながら楽しんでいただけます。企画を楽しみながら、まちかね祭全体をぐるっと回る事ができます。メインストリート上、ピロティ付近のテントがスタートです。是非お越しください！！</p>
              </div>
              <div className="okugai">
                <span style={{right:0, color:'#F4E511'}}>屋外区分</span>
                <p>屋外区分では、パフォーマンスを中心として、展示など多様な企画が行われます。2023年度まちかね祭では、学生交流棟・学生会館横・c棟前・文学研究棟前・サイバーメディアセンター横など建物外かつ模擬店のテント以外の場所で行われます。ぜひお越しください。</p>
              </div>
              <div className="stage">
                <span style={{right:0, color:'#F4E511'}}>ステージ区分</span>
                <p>ステージ区分では、カルチェ前のステージ奏とかさね前のステージ宙の2つのステージで様々な企画が行われます。バンド演奏からダンスパフォーマンスまで、迫力あるステージをぜひ楽しんでください！</p>
              </div>
              <div className="mogiten">
                <span style={{right:0, color:'#F4E511'}}>模擬店区分</span>
                <p>模擬店区分では、食品の提供などが行われます。食事席もご用意しております。2023年度まちかね祭では、大阪大学会館(旧イ号館)前及びメインストリート南側(浪高庭園側)のテントで行われます。ぜひお越しください。</p>
              </div>
            </div>
  
            <div className="ocean-card schedule">
              <div className="subtitle">
                <div className="titles"><nobr><p className="item1">●</p><span id="title">Event Hours</span><p className="item2">●</p><p className="item3">●</p></nobr></div>
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
  
            <div className="swimkame1"> 
              <img src={machikame2} alt="まちかめ2"></img>
            </div>
  
            <div className="ocean-card stage">
              <div className="titles" id="stage-title"><p className="item1">●</p><span id="title"><nobr>Stage Performances</nobr> now ongoing</span><p className="item2">●</p><p className="item3">●</p></div>
              <div className="pre-ocean">Coming soon!</div>
            </div>
  
            <div className="ocean-card lab">
              <div className="titles"><nobr><p className="item1">●</p><span id="title">Invite to Lab</span><p className="item2">●</p><p className="item3">●</p></nobr></div>
              <p>Please click the link below.</p>
              <a href="./lab-open">詳細はこちら</a>
            </div>
  
            <div className="ocean-card" id="pickup">
              <div className="pickup-titles"><nobr><p className="item1">●</p><span id="title">PICKUP</span><p className="item2">●</p><p className="item3">●</p></nobr></div>
              <div className="pickup-box">
                  <a href="./project-search"><div className="pickup-button">
                    <div className="pickup-icon"><img src={search} alt="search"></img></div>
                    <div className="pickup-title">Project Search</div>
                  </div></a>
                  <a href="./goods"><div className="pickup-button">
                    <div className="pickup-icon"><img src={goods} alt="goods"></img></div>  
                    <div className="pickup-title">Official Goods</div>
                  </div></a>
                  <a href="./official-project"><div className="pickup-button">
                    <div className="pickup-icon"><img src={recommend} alt="recommend"></img></div>  
                    <div className="pickup-title">Projects by Festival Committee</div>
                  </div></a><br/>
                  <a href="./access"><div className="pickup-button">
                    <div className="pickup-icon"><img src={access} alt="access"></img></div>
                    <div className="pickup-title">Access</div>
                  </div></a>
                  <a href="./map"><div className="pickup-button">
                    <div className="pickup-icon"><img src={map} alt="map"></img></div>  
                    <div className="pickup-title">Map</div>
                  </div></a>
                  <a href="./timetable"><div className="pickup-button">
                    <div className="pickup-icon"><img src={timetable} alt="timetable"></img></div> 
                    <div className="pickup-title">Stage Performance Schedule</div>
                  </div></a>
              </div>
            </div>
    
            <div className ="ocean-card about">
              <div className="titles"><nobr><p className="item1">●</p><span id="title">Theme</span><p className="item2">●</p><p className="item3">●</p></nobr></div>
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
  