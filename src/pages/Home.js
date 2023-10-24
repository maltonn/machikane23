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
import tripfarm from "../imgs/sponsor/tripfarm.png"
import { Helmet } from "react-helmet";
import { useEffect } from "react"
import { Link } from "react-router-dom";


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

  const PageChange=()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

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
                  <td className="news-date">10/24(火)</td>
                  <td className="news-content"><Link to="./official-project" onClick={PageChange}>「実行委員企画」</Link>のページを更新しました。</td>
                </tr>
                <tr>
                  <td className="news-date"></td>
                  <td className="news-content"><Link to="./pamphlet" onClick={PageChange}>「公式パンフレット」</Link>のページを公開しました。</td>
                </tr>
                <tr>
                  <td className="news-date">10/13(金)</td>
                  <td className="news-content"><Link to="./adresses" onClick={PageChange}>「ご挨拶」</Link><Link to="./timetable" onClick={PageChange}>「ステージタイムテーブル」</Link>のページを公開しました。</td>
                </tr>
                <tr>
                  <td className="news-date">10/6(金)</td>
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
            <div className="content"><div className="noreserve">来場予約は不要です！</div>ただし、一部の企画や研究室公開には予約が必要である可能性がございます。詳しくは<Link to="/project-search" onClick={PageChange}>各出展団体</Link>・<Link to="/lab-open" onClick={PageChange}>研究室</Link>のページをご確認ください。<br/>まちかね祭に車でご来場いただくことはできません。<br/>ご来場の際は公共交通機関をご利用ください。</div>
            <p>お笑いライブは予約必須です。下のボタンから予約サイトへアクセスください。</p>
            <div className="top-linkButton live-reservation"><a href="https://app.tyuujitu-system.net/machikane23/visitor/talent-live" target="_blank" rel="noreferrer">お笑いライブ<br></br>予約サイト</a></div>
            <p>お笑いライブ詳細は<Link to="./talent-project" onClick={PageChange}>こちら</Link></p>
            <p>今年のまちかね祭の企画を検索できます。<br></br>あなたのお気に入りの企画を見つけましょう！<br></br>下のボタンからご覧ください。</p>
            <div className="top-linkButton"><Link to="./project-search" className="pretty-button" onClick={PageChange}>企画検索</Link></div> 
            <p>その他注意事項がございますので、下のボタンからご覧ください。</p>
            <div className="top-linkButton"><Link to="./notes" className="pretty-button" onClick={PageChange}>注意事項</Link></div>
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
                  <div className="pickup-title">企画検索</div>
                </div></Link>
                <Link to="/goods" onClick={PageChange}><div className="pickup-button">
                  <div className="pickup-icon"><img src={goods} alt="goods"></img></div>  
                  <div className="pickup-title">グッズ</div>
                </div></Link>
                <Link to="/official-project" onClick={PageChange}><div className="pickup-button">
                  <div className="pickup-icon"><img src={recommend} alt="recommend"></img></div>  
                  <div className="pickup-title">委員会企画</div>
                </div></Link><br/>
                <Link to="/access" onClick={PageChange}><div className="pickup-button">
                  <div className="pickup-icon"><img src={access} alt="access"></img></div>
                  <div className="pickup-title">アクセス</div>
                </div></Link>
                <Link to="/map" onClick={PageChange}><div className="pickup-button">
                  <div className="pickup-icon"><img src={map} alt="map"></img></div>  
                  <div className="pickup-title">マップ</div>
                </div></Link>
                <Link to="/timetable" onClick={PageChange}><div className="pickup-button">
                  <div className="pickup-icon"><img src={timetable} alt="timetable"></img></div> 
                  <div className="pickup-title">ステージタイムテーブル</div>
                </div></Link>
            </div>
          </div>
            <div className="ocean-card">
              <div className="titles"><nobr><p className="item1">●</p><span id="title">企画区分について</span><p className="item2">●</p><p className="item3">●</p></nobr></div>
              <p>企画区分の説明は、下のボタンからどうぞ</p>
              <div className="ocean-link-button"><Link to="./sections" onClick={PageChange}>企画区分を知る</Link></div>
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
            <div className="titles"><nobr><p className="item1">●</p><span id="title">研究室公開</span><p className="item2">●</p><p className="item3">●</p></nobr></div>
            <p>研究室の企画は、下のボタンからどうぞ</p>
            <div className="ocean-link-button"><Link to="/lab-open" onClick={PageChange}>研究室公開</Link></div>
            </div>

            <div className="ocean-card top-about">
              <div className="titles"><nobr><p className="item1">●</p><span id="title">テーマ</span><p className="item2">●</p><p className="item3">●</p></nobr></div>
              <div className="theme-title">"<ruby>阪燦々<rt>はんさんさん</rt></ruby>"</div>
              <div className="theme-context">
                <p>2023年度まちかね祭のテーマは「阪燦々」（はんさんさん）に決定いたしました。</p>
                <p>このテーマには、まちかね祭において阪大生の個性が燦々と輝きますように、との思いが込められています。</p>
                <div className="ocean-link-button"><Link to="/theme" onClick={PageChange}>もっと見る</Link></div>
              </div>
            </div>
          </div>

          <div className="top-sponsor">
            <div className="titles"><nobr><p className="item1">●</p><span id="title">ご協賛</span><p className="item2">●</p><p className="item3">●</p></nobr></div>
            <div className="sponsor-imgs">
              <a href="https://ewha-yifu.com/" target="_blank" rel="noreferrer"><img src={tripfarm}></img></a>
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
