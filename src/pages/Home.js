import "../css/Home.css"
import machikame from "../imgs/animal/machikame1.png"
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
// import logo from "../imgs/logo.png"
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
          {/* <div className="logo"><img src={logo} alt="ロゴ"></img></div> */}
          <div className="machikame1"> 
            <img src={machikame} alt="まちかめ1"></img>
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

          <div className="stage">
            <div className="titles" id="stage-title"><nobr><p className="item1">●</p><span id="title">現在のステージ企画</span><p className="item2">●</p><p className="item3">●</p></nobr></div>
            <div className="pre-ocean">現在準備中</div>
            <div className="machikani1"><img src={machikani} alt="まちかに"></img></div>
          </div>

          <div className="lab">
            <div className="titles"><nobr><p className="item1">●</p><span id="title">研究室紹介</span><p className="item2">●</p><p className="item3">●</p></nobr></div>
            <div className="pre-ocean">現在準備中</div>
          </div>

          <div id="pickup">
            <div className="titles"><nobr><p className="item1">●</p><span id="title">PICKUP</span><p className="item2">●</p><p className="item3">●</p></nobr></div>
            <div className="pickup-box">
                <a href="./project-search"><div className="pickup-button">
                  <div className="pickup-icon"><img src={search}></img></div>
                  <div className="pickup-title">企画検索</div>
                </div></a>
                <a href="./goods"><div className="pickup-button">
                  <div className="pickup-icon"><img src={goods}></img></div>  
                  <div className="pickup-title">グッズ</div>
                </div></a>
                <a href="./official-project"><div className="pickup-button">
                  <div className="pickup-icon"><img src={recommend}></img></div>  
                  <div className="pickup-title">委員会企画</div>
                </div></a><br/>
                <a href="./access"><div className="pickup-button">
                  <div className="pickup-icon"><img src={access}></img></div>
                  <div className="pickup-title">アクセス</div>
                </div></a>
                <a href="./map"><div className="pickup-button">
                  <div className="pickup-icon"><img src={map}></img></div>  
                  <div className="pickup-title">マップ</div>
                </div></a>
                <a href="./timetable"><div className="pickup-button">
                  <div className="pickup-icon"><img src={timetable}></img></div> 
                  <div className="pickup-title">ステージタイムテーブル</div>
                </div></a>
            </div>
          </div>
  
          <div className ="about">
            <div className="titles"><nobr><p className="item1">●</p><span id="title">テーマ</span><p className="item2">●</p><p className="item3">●</p></nobr></div>
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
