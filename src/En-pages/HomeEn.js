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
import { Link } from "react-router-dom";


export default function HomeEn() {
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

  const PageChange=()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

  return (
    <div className="top-main">
      <Helmet>
        <title>TOP|2023 Machikane Festival</title>
      </Helmet>
      <div id="loader">
        <div className="machikame1">
          <img src={machikame1} alt="まちかめ1"></img>
        </div>
        <div className="holding-parent">
          <div className="holding">
            <div className="sub-holding">
              <p className="holding-title">Venue</p>
              <p className="holding-content">Osaka University, Toyonaka Campus</p>
              <p className="holding-title">Date</p>
              <p className="holding-content">November 3rd(Fri.)~5th (Sun.),2023</p>
            </div>
          </div>
        </div>
        <div id="move">
          <img src={left_cloud} alt="左雲"></img>
          <img src={right_cloud} alt="右雲"></img>
        </div>
      </div>

      <div className="sky2">
        <div className="mainpage1">
          <div className="top-backCard">
            <span id="title">Updates</span>
            <table className="news-table">
              <tbody>
                <tr>
                  <td className="news-date">Oct.13(Fri.)</td>
                  <td className="news-content">"Addresses" and "Stage Performance Schedule" pages are now open.</td>
                </tr>
                <tr>
                  <td className="news-date">Oct.6(Fri.)</td>
                  <td className="news-content">The official website is now open!</td>
                </tr>
                <tr>
                  <td className="news-date">Sep.10(Sun.)</td>
                  <td className="news-content">The TOP page is now available!</td>
                </tr>
              </tbody>
            </table>
          </div>     
          <div className="top-backCard">
            <span id="title">To all the visitors</span>
            <div className="content"><div className="noreserve">You do not need to make a visit reservation.</div>Cars are not allowed on campus.<br/>Please use public transportation when you come to the Toyonaka Campus.</div>
            <p>Reservation is required for the Comedy LIVE Show. Please move on to the reservation site from the button below.</p>
            <div className="top-linkButton live-reservation"><a href="https://app.tyuujitu-system.net/machikane23/visitor/talent-live" target="_blank" rel="noreferrer">Reserve for<br/>the Comedy LIVE Show</a></div>
            <p>Click <Link to="./talent-project" onClick={PageChange}>Here</Link> for more details.</p>
            <p>You can look up the projects of the festival.<br></br>Click the button below <br></br>and find your favorite projects!</p>
            <div className="top-linkButton"><Link to="./project-search" className="pretty-button" onClick={PageChange}>Project Search</Link></div> 
            <p>Click the button below and please check the notes.</p>
            <div className="top-linkButton"><Link to="./notes" className="pretty-button" onClick={PageChange}>Notes</Link></div>
          </div>
          <div className="machikani-1"><img src={machikani} alt="まちかに"></img></div>
        </div>
      </div>

      <div id="surface">
        <div className="ocean">
          <div className="mainpage2">

          <div className="ocean-card" id="pickup">
            <div className="pickup-titles"><nobr><p className="item1">●</p><span id="title">PICKUP</span><p className="item2">●</p><p className="item3">●</p></nobr></div>
            <div className="pickup-box">
                <Link to="/project-search" onClick={PageChange}><div className="pickup-button">
                  <div className="pickup-icon"><img src={search} alt="search"></img></div>
                  <div className="pickup-title">Project Search</div>
                </div></Link>
                <Link to="/goods" onClick={PageChange}><div className="pickup-button">
                  <div className="pickup-icon"><img src={goods} alt="goods"></img></div>  
                  <div className="pickup-title">Official Goods</div>
                </div></Link>
                <Link to="/official-project" onClick={PageChange}><div className="pickup-button">
                  <div className="pickup-icon"><img src={recommend} alt="recommend"></img></div>  
                  <div className="pickup-title">Official Projects</div>
                </div></Link><br/>
                <Link to="/access" onClick={PageChange}><div className="pickup-button">
                  <div className="pickup-icon"><img src={access} alt="access"></img></div>
                  <div className="pickup-title">Access</div>
                </div></Link>
                <Link to="/map" onClick={PageChange}><div className="pickup-button">
                  <div className="pickup-icon"><img src={map} alt="map"></img></div>  
                  <div className="pickup-title">Map</div>
                </div></Link>
                <Link to="/timetable" onClick={PageChange}><div className="pickup-button">
                  <div className="pickup-icon"><img src={timetable} alt="timetable"></img></div> 
                  <div className="pickup-title">Stage Performance Schedule</div>
                </div></Link>
            </div>
          </div>

            <div className="ocean-card">
              <div className="titles"><nobr><p className="item1">●</p><span id="title">Project Categoly</span><p className="item2">●</p><p className="item3">●</p></nobr></div>
              <p>For more information, please click the button below.</p>
              <div className="ocean-link-button"><Link to="./sections" onClick={PageChange}>Project Category</Link></div>
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

            <div className="swim-kame1">
              <img src={machikame2} alt="まちかめ2"></img>
            </div>

          <div className="ocean-card lab">
            <div className="titles"><nobr><p className="item1">●</p><span id="title">Open Lab</span><p className="item2">●</p><p className="item3">●</p></nobr></div>
            <p>For more information, please click the button below.</p>
            <div className="ocean-link-button"><Link to="/lab-open" onClick={PageChange}>Open Lab</Link></div>
            </div>

            <div className="ocean-card top-about">
              <div className="titles"><nobr><p className="item1">●</p><span id="title">Theme</span><p className="item2">●</p><p className="item3">●</p></nobr></div>
              <div className="theme-title">"<ruby>阪燦々<rt>Han-Sun-Sun</rt></ruby>"</div>
              <div className="theme-context">
                <p>The theme for Machikane Festival 2023 is ─── "Han-Sun-Sun. "</p>
                <p>We hope that every student of Osaka University will shine their characteristics as brightly as the sunlight.</p>
                <div className="ocean-link-button"><Link to="/theme" onClick={PageChange}>Message behind the theme</Link></div>
              </div>
            </div>
          </div>

          <div className="bottoms">
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
