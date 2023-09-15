import { Helmet } from "react-helmet";
import "../../css/Common.css"
import machikame1 from "../../imgs/animal/machikame1.png"
import map from "../../imgs/map/全体マップ.png"
import "../../css/Access.css"
export default function Map() {
    return(
        <div className="main">
            <Helmet>
            <title>マップ|まちかね祭2023</title>
            </Helmet>
            <div className="sky">
                <div className="top">
                    <div className="machikame"> 
                    <img src={machikame1} alt="まちかめ1"></img>
                    </div>
                        <div className="title">
                        <h1>全体マップ・学内店舗営業時間</h1>
                        </div>
                </div>
                <div className="notes">
                        <div className="contents">
                            <div className="ul">
                            <li>全体マップ</li>
                            </div>
                            <div className="map"> 
                            <   img src={map} alt="全体マップ"></img>
                            </div>
                            <div className="ul">
                            <li>学内店舗の営業時間</li><br></br>
                            </div>
                            <div className="time">
                                <div className="table">
                                    <tr>
                                        <th>店舗名</th> <th>11/3(金)</th> <th>11/4(土)</th> <th>11/5(日)</th>
                                    </tr>
                                    <tr>
                                        <td>図書館下コンビニ</td> <td colspan="3">11:00~15:00</td> 
                                    </tr>
                                    <tr>
                                        <td>ローソン</td> <td>9:00~16:00</td> <td>8:00~21:00</td> <td>9:00~16:00</td>
                                    </tr>
                                    <tr>
                                        <td>阪大グッズ臨時販売場所(かさね前)</td> <td>ー</td> <td>ー</td> <td>11:00~14:00</td>
                                    </tr>
                                    <tr>
                                        <td>カフェ坂</td> <td colspan="3">11:00~14:00</td>
                                    </tr>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}