import { Helmet } from "react-helmet";
import "../../css/Common.css"
import "../../css/Map.css"
import PageTitles from "../../components/PageTitles";
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

export default function MapEn() {
    return(
        <div className="main">
            <Helmet>
            <title>Map|2023 Machikane Festival</title>
            </Helmet>
            <div className="map-sky">
                <div className="map-top">
                <PageTitles titles="Map" kame={true}></PageTitles>
                </div>
                <div className="map-miniTitles map-titleLong">Entire Map /<br></br>Campus stores’ Opening Hours</div>
                <div className="map-mainpage"> 
                    <div className="map-notes">
                        <div className="map-content">
                            <div className="map-ul">Entire Map</div>
                            <div className="map-map"> 
                                <img src={map} alt="全体マップ"></img>
                            </div>
                            <div className="map-ul">Campus stores’ Opening Hours</div>
                            <div className="map-time">
                                <div className="map-tables">
                                    <tr>
                                        <th className="map-tableName">Place</th> <th>Nov.3(Fri.)</th> <th>Nov.4(Sat)</th> <th>Nov.5(Sun)</th>
                                    </tr>
                                    <tr>
                                        <td className="map-tableName">Basement{((window.innerWidth>620&&window.innerWidth<660)||(window.innerWidth<405))&&<br></br>}convenience store</td> <td colspan="3">11:00~15:00</td> 
                                    </tr>
                                    <tr>
                                        <td className="map-tableName">LAWSON</td> <td>9:00~16:00</td> <td>8:00~21:00</td> <td>9:00~16:00</td>
                                    </tr>
                                    <tr>
                                        <td className="map-tableName">Goods store{((window.innerWidth>620&&window.innerWidth<720)||(window.innerWidth<440))&&<br></br>}{window.innerWidth<380&&<br></br>}<br></br> (in front of Kasane)</td> <td>ー</td> <td>ー</td> <td>11:00~14:00</td>
                                    </tr>
                                    <tr>
                                        <td className="map-tableName">Museum Cafe “Saka”</td> <td colspan="3">11:00~14:00</td>
                                    </tr>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map-miniTitles map-titleShort">In-Facility Map</div>
                {/* AB棟マップ */}
                <div className="access-mainpage"> 
                    <div className="map-notes">
                        <div className="map-content">
                            <div className="map-ul">CELAS Building A/B</div>
                            <div className="map-item">
                                    <div className="map-AB"> 
                                        <div className="floorname">
                                        <p>1F</p>
                                        </div>
                                        <img src={AB1} alt="AB棟1階"></img>
                                    </div>
                                    <div className="map-AB">
                                        <div className="floorname">
                                        <p>2F</p>
                                        </div>
                                        <img src={AB2} alt="AB棟2階"></img>
                                    </div>
                                    <div className="map-AB">
                                            <div className="floorname">
                                            <p>3F</p>
                                            </div>
                                            <img src={AB3} alt="AB棟3階"></img>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* C棟マップ */}
                <div className="access-mainpage"> 
                    <div className="map-notes">
                        <div className="map-content">
                            <div className="map-ul">CELAS Building C</div>
                            <div className="map-item">
                                    <div className="map-C"> 
                                        <div className="floorname">
                                        <p>1F</p>
                                        </div>
                                        <img src={C1} alt="C棟1階"></img>
                                    </div>
                                    <div className="map-C">
                                        <div className="floorname">
                                        <p>2F</p>
                                        </div>
                                        <img src={C2} alt="C棟2階"></img>
                                    </div>
                                    <div className="map-C">
                                            <div className="floorname">
                                            <p>3F</p>
                                            </div>
                                            <img src={C3} alt="C棟3階"></img>
                                    </div>
                                    <div className="map-C">
                                            <div clasName="floorname">
                                            <p>4F</p>
                                            </div>
                                            <img src={C4} alt="C棟4階"></img>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 法経マップ */}
                <div className="access-mainpage"> 
                    <div className="map-notes">
                        <div className="map-content">
                            <div className="map-ul">Lecture Building(Law. Econ)</div>
                            <div className="map-item">
                                    <div className="map-H"> 
                                        <div className="floorname">
                                        <p>1F</p>
                                        </div>
                                        <img src={H1} alt="法経1階"></img>
                                    </div>
                                    <div className="map-H">
                                        <div className="floorname">
                                        <p>2F</p>
                                        </div>
                                        <img src={H2} alt="法経2階"></img>
                                    </div>
                                    <div className="map-H">
                                        <div className="floorname">
                                        <p>3F</p>
                                        </div>
                                        <img src={H3} alt="法経3階"></img>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 文法経マップ */}
                <div className="access-mainpage"> 
                    <div className="map-notes">
                        <div className="map-content">
                            <div className="map-ul">Lecture Building(Let. Law. Econ)</div>
                            <div className="map-item">
                                    <div className="map-B"> 
                                        <div classname="floorname">
                                        <p>1F</p>
                                        </div>
                                        <img src={B1} alt="文法経1階"></img>
                                    </div>
                                    <div className="map-B">
                                        <div className="floorname">
                                        <p>2F</p>
                                        </div>
                                        <img src={B2} alt="文法経2階"></img>
                                    </div>
                                    <div className="map-B">
                                        <div className="floorname">
                                        <p>3F</p>
                                        </div>
                                        <img src={B3} alt="文法経3階"></img>
                                    </div>
                           </div>
                        </div>
                    </div>
                </div>
                {/* 学生会館 */}
                <div className="access-mainpage"> 
                    <div className="map-notes">
                        <div className="map-content">
                            <div className="map-ul">Student Union</div>
                            <div className="map-item">
                                    <div className="map-G"> 
                                        <div className="floorname">
                                        <p>2F</p>
                                        </div>
                                        <img src={G2} alt="学生会館2階"></img>
                                    </div>
                                    <div className="map-G">
                                        <div className="floorname">
                                        <p>3F</p>
                                        </div>
                                        <img src={G3} alt="学生会館3階"></img>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 屋外模擬店 */}
                <div className="map-miniTitles">Food Stalls &<br></br>Outdoor Map</div>
                <div className="access-mainpage"> 
                    <div className="map-notes">
                        <div className="map-content">
                            <div className="map-item">
                                    <div className="map-M">
                                        <img src={M} alt="屋外模擬店"></img>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ステージ */}
                <div className="map-miniTitles">Stage Map</div>
                <div className="access-mainpage"> 
                    <div className="map-notes">
                        <div className="map-content">
                            <div className="map-item">
                                    <div className="map-stage">
                                        <p>Stage Kanade</p>
                                        <img src={kanade} alt="ステージ奏"></img>
                                    </div>
                                    <div className="map-stage">
                                        <p>Stage sora</p>
                                        <img src={sora} alt="ステージ宙"></img>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}