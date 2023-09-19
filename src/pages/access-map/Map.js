import { Helmet } from "react-helmet";
import "../../css/Common.css"
import machikame1 from "../../imgs/animal/machikame1.png"
import map from "../../imgs/map/全体マップ.png"
import AB1 from "../../imgs/map/AB棟1階.png"
import AB2 from "../../imgs/map/AB棟2階.png"
import AB3 from "../../imgs/map/AB棟3階.png"
import C1 from "../../imgs/map/C棟1階.png"
import C2 from "../../imgs/map/C棟2階.png"
import C3 from "../../imgs/map/C棟3階.png"
import C4 from "../../imgs/map/C棟4階.png"
import H1 from "../../imgs/map/法経1階.png"
import H2 from "../../imgs/map/法経2階.png"
import H3 from "../../imgs/map/法経3階.png"
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
                                <img src={map} alt="全体マップ"></img>
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
                <div className="top">
                    <div className="machikame"> 
                    <img src={machikame1} alt="まちかめ1"></img>
                    </div>
                    <div className="title">
                    <h1>館内マップ</h1>
                    </div>
                </div>
                <div className="notes">
                    <div className="contents">
                        <div className="ul">
                            <li>AB棟</li>
                        </div>
                        <div className="item">
                                <div className="AB1"> 
                                    <p>1階</p>
                                    <img src={AB1} alt="AB棟1階"></img>
                                </div>
                                <div className="AB2">
                                    <p>2階</p>
                                    <img src={AB2} alt="AB棟2階"></img>
                                </div>
                                <div className="AB3">
                                        <p>3階</p>
                                        <img src={AB3} alt="AB棟3階"></img>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="top">
                    <div className="machikame"> 
                        <img src={machikame1} alt="まちかめ1"></img>
                    </div>
                </div>
                <div className="notes">
                    <div className="contents">
                        <div className="ul">
                            <li>C棟</li>
                        </div>
                        <div className="item">
                                <div className="C1"> 
                                    <p>1階</p>
                                    <img src={C1} alt="C棟1階"></img>
                                </div>
                                <div className="C2">
                                    <p>2階</p>
                                    <img src={C2} alt="C棟2階"></img>
                                </div>
                                <div className="C3">
                                        <p>3階</p>
                                        <img src={C3} alt="C棟3階"></img>
                                </div>
                                <div className="C4">
                                        <p>4階</p>
                                        <img src={C4} alt="C棟4階"></img>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="top">
                    <div className="machikame"> 
                        <img src={machikame1} alt="まちかめ1"></img>
                    </div>
                </div>
                <div className="notes">
                    <div className="contents">
                        <div className="ul">
                            <li>法経講義棟</li>
                        </div>
                        <div className="item">
                                <div className="H1"> 
                                    <p>1階</p>
                                    <img src={H1} alt="法経1階"></img>
                                </div>
                                <div className="H2">
                                    <p>2階</p>
                                    <img src={H2} alt="法経2階"></img>
                                </div>
                                <div className="H3">
                                        <p>3階</p>
                                        <img src={H3} alt="法経3階"></img>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}