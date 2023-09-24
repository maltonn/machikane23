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
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export default function Home() {
  const [isThemeOpen, setIsThemeOpen] = useState(true)
  function onThemeClick() {
    setIsThemeOpen(prev => !prev)
    var themeHidden = document.getElementById('theme-hidden');
    var buttonOpen = document.getElementById('theme-button-open');
    var buttonClose = document.getElementById('theme-button-close');
    if (isThemeOpen) {
      themeHidden.style.display = 'block';
      buttonOpen.style.display = 'none';
      buttonClose.style.display = 'block';
    } else {
      themeHidden.style.display = 'none';
      buttonOpen.style.display = 'block';
      buttonClose.style.display = 'none';
    }
  }
  /* sectionについてのところ */
  const [isSectionOpenA, setIsSectionOpenA] = useState(true)
  function onSectionClickA() {
    setIsSectionOpenA(prev => !prev)
    var sectionHidden = document.getElementById('section-hiddenA');
    var buttonOpen = document.getElementById('section-button-openA');
    var buttonClose = document.getElementById('section-button-closeA');
    if (isSectionOpenA) {
      sectionHidden.style.display = 'block';
      buttonOpen.style.display = 'none';
      buttonClose.style.display = 'block';
    } else {
      sectionHidden.style.display = 'none';
      buttonOpen.style.display = 'block';
      buttonClose.style.display = 'none';
    }
  }
  const [isSectionOpenB, setIsSectionOpenB] = useState(true)
  function onSectionClickB() {
    setIsSectionOpenB(prev => !prev)
    var sectionHidden = document.getElementById('section-hiddenB');
    var buttonOpen = document.getElementById('section-button-openB');
    var buttonClose = document.getElementById('section-button-closeB');
    if (isSectionOpenB) {
      sectionHidden.style.display = 'block';
      buttonOpen.style.display = 'none';
      buttonClose.style.display = 'block';
    } else {
      sectionHidden.style.display = 'none';
      buttonOpen.style.display = 'block';
      buttonClose.style.display = 'none';
    }
  }
  const [isSectionOpenC, setIsSectionOpenC] = useState(true)
  function onSectionClickC() {
    setIsSectionOpenC(prev => !prev)
    var sectionHidden = document.getElementById('section-hiddenC');
    var buttonOpen = document.getElementById('section-button-openC');
    var buttonClose = document.getElementById('section-button-closeC');
    if (isSectionOpenC) {
      sectionHidden.style.display = 'block';
      buttonOpen.style.display = 'none';
      buttonClose.style.display = 'block';
    } else {
      sectionHidden.style.display = 'none';
      buttonOpen.style.display = 'block';
      buttonClose.style.display = 'none';
    }
  }
  const [isSectionOpenD, setIsSectionOpenD] = useState(true)
  function onSectionClickD() {
    setIsSectionOpenD(prev => !prev)
    var sectionHidden = document.getElementById('section-hiddenD');
    var buttonOpen = document.getElementById('section-button-openD');
    var buttonClose = document.getElementById('section-button-closeD');
    if (isSectionOpenD) {
      sectionHidden.style.display = 'block';
      buttonOpen.style.display = 'none';
      buttonClose.style.display = 'block';
    } else {
      sectionHidden.style.display = 'none';
      buttonOpen.style.display = 'block';
      buttonClose.style.display = 'none';
    }
  }
  const [isSectionOpenE, setIsSectionOpenE] = useState(true)
  function onSectionClickE() {
    setIsSectionOpenE(prev => !prev)
    var sectionHidden = document.getElementById('section-hiddenE');
    var buttonOpen = document.getElementById('section-button-openE');
    var buttonClose = document.getElementById('section-button-closeE');
    if (isSectionOpenE) {
      sectionHidden.style.display = 'block';
      buttonOpen.style.display = 'none';
      buttonClose.style.display = 'block';
    } else {
      sectionHidden.style.display = 'none';
      buttonOpen.style.display = 'block';
      buttonClose.style.display = 'none';
    }
  }

  useEffect(() => {
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

  return (
    <div className="top-main">
      <Helmet>
        <title>トップページ|まちかね祭2023</title>
      </Helmet>
      <div id="loader">
        <div className="machikame1">
          <img src={machikame1} alt="まちかめ1"></img>
        </div>
        <div className="holding-parent">
          <div className="holding">
            <div className="sub-holding">
              <p className="holding-title">開催場所</p>
              <p className="holding-content">大阪大学 豊中キャンパス</p>
              <p className="holding-title">開催日程</p>
              <p className="holding-content">11/3(金),4(土),5(日)</p>
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
            <span id="title">お知らせ</span>
            <table className="news-table">
              <tbody>
                <tr>
                  <td className="news-date">10/3(火)</td>
                  <td className="news-content">まちかね祭2023公式サイトが完成しました。</td>
                </tr>
                <tr>
                  <td className="news-date">9/10(日)</td>
                  <td className="news-content">まちかね祭2023公式サイトのトップページが完成しました。</td>
                </tr>
              </tbody>
            </table>
          </div>     
          <div className="top-backCard">
            <span id="title">ご来場の皆様へ</span>
            <div className="content">まちかね祭に車でご来場いただくことはできません。<br/>ご来場の際は公共交通機関をご利用ください。<br/>来場予約は不要です。</div>
            <p>お笑いライブは、予約必須です。下のボタンから予約サイトへアクセスください。</p>
            <div className="top-linkButton live-reservation"><a href="./notes">お笑いライブ<br></br>予約サイト</a></div>
            <p>その他注意事項がございますので、下のボタンからご覧ください。</p>
            <div className="link-button top-linkButton"><Link to="./notes">注意事項</Link></div>
          </div>
          <div className="machikani-1"><img src={machikani} alt="まちかに"></img></div>
        </div>
      </div>

      <div id="surface">
        <div className="ocean">
          <div className="mainpage2">

            <div className="ocean-card">
              <div className="titles"><nobr><p className="item1">●</p><span id="title">企画区分について</span><p className="item2">●</p><p className="item3">●</p></nobr></div>
              <p>企画区分の説明は下のボタンから</p>
              <div className="ocean-link-button"><Link to="./sections">企画区分を知る</Link></div>
            </div>
            <div className="ocean-card schedule">
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

            <div className="swim-kame1">
              <img src={machikame2} alt="まちかめ2"></img>
            </div>

          <div className="ocean-card lab">
            <div className="titles"><nobr><p className="item1">●</p><span id="title">研究室紹介</span><p className="item2">●</p><p className="item3">●</p></nobr></div>
            <p>研究室の企画は、以下のリンクからご覧ください。</p>
            <div className="ocean-link-button"><Link to="/lab-open" >詳細はこちら</Link></div>
            </div>

          <div className="ocean-card" id="pickup">
            <div className="pickup-titles"><nobr><p className="item1">●</p><span id="title">PICKUP</span><p className="item2">●</p><p className="item3">●</p></nobr></div>
            <div className="pickup-box">
                <Link to="/project-search" ><div className="pickup-button">
                  <div className="pickup-icon"><img src={search} alt="search"></img></div>
                  <div className="pickup-title">企画検索</div>
                </div></Link>
                <Link to="/goods" ><div className="pickup-button">
                  <div className="pickup-icon"><img src={goods} alt="goods"></img></div>  
                  <div className="pickup-title">グッズ</div>
                </div></Link>
                <Link to="/official-project" ><div className="pickup-button">
                  <div className="pickup-icon"><img src={recommend} alt="recommend"></img></div>  
                  <div className="pickup-title">委員会企画</div>
                </div></Link><br/>
                <Link to="/access" ><div className="pickup-button">
                  <div className="pickup-icon"><img src={access} alt="access"></img></div>
                  <div className="pickup-title">アクセス</div>
                </div></Link>
                <Link to="/map" ><div className="pickup-button">
                  <div className="pickup-icon"><img src={map} alt="map"></img></div>  
                  <div className="pickup-title">マップ</div>
                </div></Link>
                <Link to="/timetable" ><div className="pickup-button">
                  <div className="pickup-icon"><img src={timetable} alt="timetable"></img></div> 
                  <div className="pickup-title">ステージタイムテーブル</div>
                </div></Link>
            </div>
          </div>

            <div className="ocean-card top-about">
              <div className="titles"><nobr><p className="item1">●</p><span id="title">テーマ</span><p className="item2">●</p><p className="item3">●</p></nobr></div>
              <div className="theme-title">"<ruby>阪燦々<rt>はんさんさん</rt></ruby>"</div>
              <div className="theme-context">
                <p>2023年度まちかね祭のテーマは「阪燦々」（はんさんさん）に決定いたしました。</p>
                <p>このテーマには、まちかね祭において阪大生の個性が燦々と輝きますように、との思いが込められています。</p>
                <div className="ocean-link-button"><Link to="/theme" >もっと見る</Link></div>
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
