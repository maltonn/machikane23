import { Helmet } from "react-helmet";
import "../../css/Common.css"
import "../../css/FAQ.css"
import Bubble from "../../components/Bubble";
import PageTitles from "../../components/PageTitles";
import map from "../../imgs/map/eat-space.jpg"
export default function FAQEn() {
    return(
        <div className="main">
            <Helmet>
            <title>FAQs|2023 Machikane Festival</title>
            </Helmet>
            <div className="FAQ-sky">
            <PageTitles titles="FAQs"  kame={true}></PageTitles>
                <div className="FAQEn-card">
                <div className="FAQEn-card-Q">What are the event hours?</div>
                <div className="FAQ-table-parent">
                            <table className="FAQ-table">
                                <tr>
                                    <th>Places</th>
                                    <th>Day1(11/3)</th>
                                    <th>Day2(11/4)</th>
                                    <th>Day3(11/5)</th>
                                </tr>
                                <tr>
                                    <td >In-Facility</td>
                                    <td colSpan={3}className="FAQ-table">10:00~18:20</td>
                                </tr>
                                <tr>
                                    <td className="FAQblank">Outdoor & Food Stalls</td>
                                    <td colSpan={3}className="FAQ-table">10:00~18:00</td>
                                </tr>
                                <tr>
                                    <td>Stage Kanade</td>
                                    <td colSpan={3}className="FAQ-table">10:00~19:00</td>
                                </tr>
                                <tr>
                                    <td>Stage Sora</td>
                                    <td className="FAQblank">10:00~17:20</td>
                                    <td className="FAQblank">10:00~17:00</td>
                                    <td className="FAQblank">10:00~16:20</td>
                                </tr>
                            </table>
                        </div>
                </div>
                <div className="FAQEn-card-Q">Where can we eat something we bought?</div>
                <div className="FAQEn-card-A">Please use the designated eating space.</div>
                <div className="FAQEn-card-Q">Where is the eating space?</div>
                <div className="FAQEn-card-A">Please refer to the Map.
                <img  src={map} alt="map"className="FAQ-map"></img></div>
                <div className="FAQEn-card-Q"> Where are the vending machines?</div>
                <div className="FAQEn-card-A"> Please refer to the Map.</div>
                <div className="FAQEn-card-Q"> Where are the restrooms?</div>
                <div className="FAQEn-card-A"> Please refer to the Map.</div>
                <div className="FAQEn-card-Q"> Where are the accessible restrooms?</div>
                <div className="FAQEn-card-A">West/East side of CELAS build.A 1F<br></br>
                                              CELAS build.B/C 1F<br></br>
                                              Lecture build.(Let, Law, Econ/Law. Econ) 1F</div>
                <div className="FAQEn-card-Q">Which convenience store or cafeteria is open?</div>
                <div className="FAQEn-card-A">Basement convenience store, LAWSON, Museum Cafe “Saka” are open during the hours below.<br></br>
                                              Basement convenience store : 11:00~15:00<br></br>
                                              LAWSON : 9:00~16:00<br></br>
                                               (Day2・Nov.4→8:00~21:00)<br></br>
                                              Museum Cafe “Saka” : 11:00~14:00<br></br>
                                              ※Basement Cafeteria and Fukuri-kaikan are closed during the festival.</div>
                <div className="FAQEn-card-Q">Where are the ATMs(deposit machines) ?</div>
                <div className="FAQEn-card-A">There are three, in the LAWSON, in front of Fukuri-kaikan, and at the post office.<br></br>
                                              ※ATM at the post office is available only on Day 2, 11/4.</div>
                <div className="FAQEn-card-Q"> Where are the trash bins?</div>
                <div className="FAQEn-card-A">There are eleven bins in total, eight in CELAS and three outside.</div>
                <div className="FAQEn-card-Q">Where is the general information center?</div>
                <div className="FAQEn-card-A"> It is in the middle of the Main street.</div>
                <div className="FAQEn-card-Q"> Where can we buy Handai Goods?</div>
                <div className="FAQEn-card-A">You can get them at the Basement convenience store, under the library.<br></br>
                                            On the third day of the festival(11/5), there's a sale in front of Kasane.</div>
                <div className="FAQEn-card-Q">Is there any charging area?</div>
                <div className="FAQEn-card-A">No charging area is available.</div>
                <div className="FAQEn-card-Q">Can we drink alcohol?</div>
                <div className="FAQEn-card-A">Not allowed.</div>
                <div className="FAQEn-card-Q">Can we bring our pets with us?</div>
                <div className="FAQEn-card-A">On the Main street(food stalls), please refrain from bringing your pets.<br></br>
                                              If your pets are in the cage, you can take them with you to the In-Facility, Outdoor and Stage areas.</div>
                <div className="FAQEn-card-Q"> I don't feel well…</div>
                <div className="FAQEn-card-A">Please let your nearest committee staff know.</div>
                <div className="FAQEn-card-Q">I found a lost child / picked up lost items.</div>
                <div className="FAQEn-card-A">Please take them to the Main reception or let your nearest committee staff know.</div>
                <div className="FAQEn-card-Q">I'm looking for a lost child / lost items.</div>
                <div className="FAQEn-card-A">Please come to the Main reception.</div>
                <div className="FAQEn-card-Q">Where can we find Outdoor Projects?</div>
                <div className="FAQEn-card-A">Next to Student Union and Cyber Media Center, and in front of CELAS buildingC, Graduate School of language & Culture and Graduate School of Letters.</div>
                <div className="FAQEn-card-Q">Are there any projects at the playground?</div>
                <div className="FAQEn-card-A">No, there aren't.</div>
                <div className="FAQEn-card-Q">Is the Osaka University Library open?</div>
                <div className="FAQEn-card-A"> It isn't open during the festival.</div>
                <div className="FAQEn-card-Q">Can we use the Inter-Campus Shuttle Bus Service?</div>
                <div className="FAQEn-card-A"> No, you cannot.</div>
                <Bubble bubbleSwitch={false}></Bubble>
            </div>
        </div>
    )
}
