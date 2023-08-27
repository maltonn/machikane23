import { Helmet } from "react-helmet";
import "../../css/Common.css"
export default function About() {
    return(
        <div className="main">
        <Helmet>
          <title>まちかね祭とは|まちかね祭2023</title>
        </Helmet>
            <h2>ここにaboutページ</h2>
            <p>pages/About.jsとcss/About.cssを編集</p>
            <a href="./">トップページへ戻る</a>
        <div className="sky2">
            <div className="mainpage1">
              <div className="news">
                <span id="news-title">お知らせ</span>
                  <table className="renew-table">
                    <tbody>
                          <tr>
                              <td className="renew">9/16(土)</td>
                              <td className="renew">トップページを更新しました。</td>
                          </tr>
                          <tr>
                              <td className="renew">9/1(金)</td>
                              <td className="renew">まちかね祭2023公式サイトが完成しました。</td>
                          </tr>
                      </tbody>
                  </table>
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
                <div className="pre-ocean">現在準備中</div>
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
