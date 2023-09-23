import { Helmet } from "react-helmet";
// import {Link} from "react-router-dom";

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
import B1 from "../../imgs/map/文法経1階.png"
import B2 from "../../imgs/map/文法経2階.png"
import B3 from "../../imgs/map/文法経3階.png"
import B4 from "../../imgs/map/文法経4階.png"
import G2 from "../../imgs/map/学生会館2階.png"
import G3 from "../../imgs/map/学生会館3階.png"
import M from "../../imgs/map/屋外メインストリート.png"
import kanade from "../../imgs/map/ステージ奏.png"
import sora from "../../imgs/map/ステージ宙.png"
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
                        <div className="content">
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
                                <div className="tables">
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
                {/* AB棟マップ */}
                <div className="notes">
                    <div className="content">
                        <div className="ul">
                            <li>AB棟</li>
                        </div>
                        <div className="item">
                                <div className="AB"> 
                                    <p>1階</p>
                                    <img src={AB1} alt="AB棟1階"></img>
                                </div>
                                <div className="AB">
                                    <p>2階</p>
                                    <img src={AB2} alt="AB棟2階"></img>
                                </div>
                                <div className="AB">
                                        <p>3階</p>
                                        <img src={AB3} alt="AB棟3階"></img>
                                </div>
                        </div>
                    </div>
                </div>
                {/* C棟マップ */}
                <div className="top">
                    <div className="machikame"> 
                        <img src={machikame1} alt="まちかめ1"></img>
                    </div>
                </div>
                <div className="notes">
                    <div className="content">
                        <div className="ul">
                            <li>C棟</li>
                        </div>
                        <div className="item">
                                <div className="C"> 
                                    <p>1階</p>
                                    <img src={C1} alt="C棟1階"></img>
                                </div>
                                <div className="C">
                                    <p>2階</p>
                                    <img src={C2} alt="C棟2階"></img>
                                </div>
                                <div className="C">
                                        <p>3階</p>
                                        <img src={C3} alt="C棟3階"></img>
                                </div>
                                <div className="C">
                                        <p>4階</p>
                                        <img src={C4} alt="C棟4階"></img>
                                </div>
                        </div>
                    </div>
                </div>
                {/* 法経マップ */}
                <div className="top">
                    <div className="machikame"> 
                        <img src={machikame1} alt="まちかめ1"></img>
                    </div>
                </div>
                <div className="notes">
                    <div className="content">
                        <div className="ul">
                            <li>法経講義棟</li>
                        </div>
                        <div className="item">
                                <div className="H"> 
                                    <p>1階</p>
                                    <img src={H1} alt="法経1階"></img>
                                </div>
                                <div className="H">
                                    <p>2階</p>
                                    <img src={H2} alt="法経2階"></img>
                                </div>
                                <div className="H">
                                        <p>3階</p>
                                        <img src={H3} alt="法経3階"></img>
                                </div>
                        </div>
                    </div>
                </div>
                {/* 文法経マップ */}
                <div className="top">
                    <div className="machikame"> 
                        <img src={machikame1} alt="まちかめ1"></img>
                    </div>
                </div>
                <div className="notes">
                    <div className="content">
                        <div className="ul">
                            <li>文法経講義棟</li>
                        </div>
                        <div className="item">
                                <div className="B"> 
                                    <p>1階</p>
                                    <img src={B1} alt="文法経1階"></img>
                                </div>
                                <div className="B">
                                    <p>2階</p>
                                    <img src={B2} alt="文法経2階"></img>
                                </div>
                                <div className="B">
                                        <p>3階</p>
                                        <img src={B3} alt="文法経3階"></img>
                                </div>
                                <div className="B">
                                        <p>4階</p>
                                        <img src={B4} alt="文法経4階"></img>
                                </div>
                        </div>
                    </div>
                </div>
                {/* 学生会館 */}
                <div className="top">
                    <div className="machikame"> 
                        <img src={machikame1} alt="まちかめ1"></img>
                    </div>
                </div>
                <div className="notes">
                    <div className="content">
                        <div className="ul">
                            <li>学生会館</li>
                        </div>
                        <div className="item">
                                <div className="G"> 
                                    <p>2階</p>
                                    <img src={G2} alt="学生会館2階"></img>
                                </div>
                                <div className="G">
                                    <p>3階</p>
                                    <img src={G3} alt="学生会館3階"></img>
                                </div>
                        </div>
                    </div>
                </div>
                {/* 屋外模擬店 */}
                <div className="top">
                    <div className="machikame"> 
                    <img src={machikame1} alt="まちかめ1"></img>
                    </div>
                        <div className="title">
                        <h1>模擬店・屋外マップ</h1>
                        </div>
                </div>
                <div className="notes">
                    <div className="content">
                        <div className="item">
                                <div className="M">
                                    <img src={M} alt="屋外模擬店"></img>
                                </div>
                        </div>
                    </div>
                </div>
                {/* ステージ */}
                <div className="top">
                    <div className="machikame"> 
                    <img src={machikame1} alt="まちかめ1"></img>
                    </div>
                        <div className="title">
                        <h1>ステージマップ</h1>
                        </div>
                </div>
                <div className="notes">
                    <div className="content">
                        <div className="item">
                                <div className="stage">
                                    <p>ステージ奏</p>
                                    <img src={kanade} alt="ステージ奏"></img>
                                </div>
                                <div className="stage">
                                    <p>ステージ宙</p>
                                    <img src={sora} alt="ステージ宙"></img>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}