import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";

import "../css/Common.css"
import"../css/Home.css"
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
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  });

    var move = document.getElementById('move').children;
    setTimeout(function () {
      for (var i = 0; i < move.length; i++) {
        move[i].classList.add('loaded');
      }
    }, 0);

    const $ = el => document.querySelector(el);
    var surfaceHeight = document.getElementById('surface').getBoundingClientRect().bottom - document.getElementById('surface').getBoundingClientRect().top;
    $(':root').style.setProperty('--base-height', `${surfaceHeight}px`);
  }, [])
  
      return(
    <div className="top-main">
          <Helmet>
            <title>Top|Machikane2023</title>
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
            <div className="content">Cars are not allowed on campus.<br/>Please use public transportation when you come to the Toyonaka Campus.</div>
          </div>
          <div className="machikani1"><img src={machikani} alt="まちかに"></img></div>
        </div>
      </div>
  
      <div id="surface">
        <div className="ocean">
          <div className="mainpage2">
  
            <div className="ocean-card">
              <div className="titles"><nobr><p className="item1">●</p><span id="title">Project Category</span><p className="item2">●</p><p className="item3">●</p></nobr></div>
              <div className="sections">
                <span style={{right:0, color:'#F4E511'}}>
In-Facility Projects</span>
                <p>You will enjoy attractive music performances, workshops and exhibitions, and also can purchase some original goods offered by various clubs.  These projects are held at each classroom of CELAS buildings, lecture buildings(Let.Law.Econ, Law.Econ) and Student Union. Please come by and have fun!</p>
                <span style={{right:0, color:'#F4E511'}}>Rally Projects</span>
                <p>※Included in In-Facility Projects</p>
                <p>All the visitors can enjoy several projects walking around the campus and look around other projects. The starting point is the tent on the mainstreet, near piloti. We hope you enjoy!</p>
              </div>
              <div className="okugai">
                <span style={{right:0, color:'#F4E511'}}>Outdoor Projects</span>
                <p>Street performances and exhibitionswill be held outside the buildings. You can find them around the Student Service Center(Kasane), Student Union and Cybermedia Center or in front of CELAS building C and graduate school of language. Walk around the campus and enjoy the show!</p>
              </div>
              <div className="stage">
                <span style={{right:0, color:'#F4E511'}}>Stage Performances</span>
                <p> We have two stages, “Kanade” which is in front of cafeteria Quartier and “Sora” which is in front of cafeteria Kasane. You will be impressed by powerful dance and band performances! Please come and let’s share the passion!</p>
              </div>
              <div className="mogiten">
                <span style={{right:0, color:'#F4E511'}}>Food Stalls</span>
                <p>At this 2023 Machikane Festial, we set up food stalls on Main street and in front of Osaka University Hall. We expect more liveliness than during the covid. We also prepare seats and tents to eat in. Come by and enjoy our food!</p>
              </div>
            </div>
  
            <div className="ocean-card schedule">
              <div className="subtitle">
                <div className="titles"><nobr><p className="item1">●</p><span id="title">Event Hours</span><p className="item2">●</p><p className="item3">●</p></nobr></div>
              </div>
              <table className="section-schedule">
                <tbody>
                      <tr>
                          <td className="section">In-Facility</td>
                          <td className="section-time">10:00〜18:20</td>
                      </tr>
                      <tr>
                          <td className="section">Outdoor</td>
                          <td className="section-time">10:00〜18:00</td>
                      </tr>
                      <tr>
                          <td className="section"><nobr>Stage</nobr></td>
                          <td className="section-time">10:00〜19:00</td>
                      </tr>
                      <tr>
                          <td className="section">Food Stalls</td>
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
              <Link to="/lab-open" >Click here</Link>
            </div>
  
            <div className="ocean-card" id="pickup">
              <div className="pickup-titles"><nobr><p className="item1">●</p><span id="title">PICKUP</span><p className="item2">●</p><p className="item3">●</p></nobr></div>
              <div className="pickup-box">
                  <Link to="/project-search" ><div className="pickup-button">
                    <div className="pickup-icon"><img src={search} alt="search"></img></div>
                    <div className="pickup-title">Project Search</div>
                  </div></Link>
                  <Link to="/goods" ><div className="pickup-button">
                    <div className="pickup-icon"><img src={goods} alt="goods"></img></div>  
                    <div className="pickup-title">Official Goods</div>
                  </div></Link>
                  <Link to="/official-project" ><div className="pickup-button">
                    <div className="pickup-icon"><img src={recommend} alt="recommend"></img></div>  
                    <div className="pickup-title">Projects by Festival Committee</div>
                  </div></Link><br/>
                  <Link to="/access" ><div className="pickup-button">
                    <div className="pickup-icon"><img src={access} alt="access"></img></div>
                    <div className="pickup-title">Access</div>
                  </div></Link>
                  <Link to="/map" ><div className="pickup-button">
                    <div className="pickup-icon"><img src={map} alt="map"></img></div>  
                    <div className="pickup-title">Map</div>
                  </div></Link>
                  <Link to="/timetable" ><div className="pickup-button">
                    <div className="pickup-icon"><img src={timetable} alt="timetable"></img></div> 
                    <div className="pickup-title">Stage Performance Schedule</div>
                  </div></Link>
              </div>
            </div>
    
            <div className ="ocean-card about">
              <div className="titles"><nobr><p className="item1">●</p><span id="title">- Theme -<br></br>~The message behind the theme~</span><p className="item2">●</p><p className="item3">●</p></nobr></div>
              <div className="theme-title">"Han-Sun-Sun"</div>
              <div className="theme-context">
                <p>The theme for Machikane Festival 2023 is ─── "Han-Sun-Sun. "</p>
                <p>We hope that every student of Osaka University will shine their characteristics as brightly as the sunlight.</p>
                <p>Machikane Festival is the place where students can show off their accomplishments through everyday studies.</p>
                <p>And those outcomes don’t have so many opportunities that can see the light of day.  Their efforts will be recognized only by being shown to the world.</p>
                <p> Interactions with foreigners will make students’ characteristics more bright —- as the golden ginkgo trees glow under the autumn sunshine.  The brightness of students’ characteristics will inspire others —- as the ginkgo leaves turn to bright yellow pleasing people’s eyes.  In this unstable society and depressing world, young generations will surely be the light of hope for the future.</p>
                <p>Through the theme “Han-Sun-Sun,” we sincerely hope all the Osaka University students show their characteristics by interacting with visitors and enlighten the whole campus with their brightness.</p>
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
  