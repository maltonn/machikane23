import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";
import "../../css/Common.css"
import "../../css/Notes.css"
import PageTitles from "../../components/PageTitles";
import Bubble from "../../components/Bubble";
export default function NotesEn() {
    const PageChange=()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    return(
        <div className="main">
            <Helmet>
            <title>Notes|2023 Machikane Festival</title>
            </Helmet>
            <div className="notes-sky">
                <PageTitles titles="Notes" kame={true}></PageTitles>
                <div className="notes-mainpage">
                    <div className="notes-all">
                        <div className="notes-naiyou">
                            <div className="notes-miniTitle">Eating & Drinking</div>
                            <div className="notes-miniContent">
                                <p>All the food (including foods you brought by yourself) must be eaten at the designated eating space. You must not eat or drink outside the area.(except hydration)</p>
                                <p>Eating space is around the Main street. Please look at the Map for details.</p>
                                <div className="notes-linkButton"><Link to="/map" className="pretty-button" onClick={PageChange}>Map</Link></div>
                                <p>Please follow the rules below.</p>
                                <ol>
                                    <li>Please bring back the seat to its originated place after using</li>
                                    <li>Please sort the garbage according to the sign.</li>
                                    <li>The number of seats are limited. Please mind not to occupy the seat and give it up to other visitors. There are some sofas and chairs inside the buildings.(No eating)</li>
                                </ol>
                            </div>
                        </div>
                        <div className="notes-naiyou">
                            <div className="notes-miniTitle">Trash</div>
                            <div className="notes-miniContent">
                                <ul>
                                    <li>You cannot use ordinary bins.</li>
                                    <li>Please sort the garbage following the signs at the designated bins, called “Gomi-Station.”</li>
                                    <li>We also have bins near Stage Sora, but please try to use the station bins basically.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="notes-naiyou">
                            <div className="notes-miniTitle">Alcohol</div>
                            <div className="notes-miniContent">
                                <ul>
                                    <li>We do not offer any alcohol at this Machikane Festival.</li>
                                    <li>You are not allowed to drink and bring alcoholic beverages and enter university when you are  heavily drunk.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="notes-naiyou">
                            <div className="notes-miniTitle">Smoking</div>
                            <div className="notes-miniContent">
                                <p>Smoking is prohibited at all the campus area. Please refrain from smoking.</p>
                            </div>
                        </div>
                        <div className="notes-naiyou">
                            <div className="notes-miniTitle">Lost items</div>
                            <div className="notes-miniContent">
                                <ul>
                                    <li>All lost items we found during the Machikane Festival (Nov.3, 4 and 5) will be taken care of by us.</li>
                                    <li>When you lose something or you find lost items, please come to the Main info. desk at the piloti.</li>
                                    <li>Caution:After the festival(5/2～), lost items will be organized by Toyonaka Student Center (2nd floor of Student Union, Toyonaka Campus )</li>
                                    <li>If you have any questions about lost items, please go to the Toyonaka Student Center.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="notes-naiyou">
                            <div className="notes-miniTitle">Lost child</div>
                            <div className="notes-miniContent">
                            When you find lost children, please take them to the Main info. desk at the piloti.
                            </div>
                        </div>
                        <div className="notes-naiyou">
                            <div className="notes-miniTitle">Pets</div>
                            <div className="notes-miniContent">
                                <ul>
                                    <li>We expect full visitors, so please refrain from taking your pets to the festival.</li>
                                    <li>Pets are severely not allowed on the Main street.</li>
                                    <li>Pets in the cage are available at In-Facility, Outdoor projects and Stage Performances.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="notes-naiyou">
                            <div className="notes-miniTitle">Covid-19 Countermeasures</div>
                            <div className="notes-miniContent">
                                <ul>
                                    <li>We do not place any restrictions on the admission at this Machikane Festival. No reservation in advance is required.However, please note that we may conduct admission constriction when it gets too crowded.</li>
                                    <li>Please refrain from coming to the festival if you are not feeling well.</li>
                                    <p>※According to the change of the Osaka University infection control measures, we may alter these measures.</p>
                                </ul>
                            </div>
                        </div>
                        <div className="notes-naiyou">
                            <div className="notes-miniTitle">Leafleting & Soliciting</div>
                            <div className="notes-miniContent">
                                <ul>
                                    <li>
                                    Pre-permission is required for leafleting in the festival areas. All leafleting without a permission will be banned.
                                    </li>
                                    <li>
                                    Leafleting on the Main street is not allowed.(Except for some area)
                                    </li><li>
                                    Please be careful to suspicious leafleting or soliciting
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="notes-naiyou">
                            <div className="notes-miniTitle">If you are in trouble</div>
                            <div className="notes-miniContent">Please feel free to ask your nearest committee members, if you have any troubles.All the committee members are wearing ORANGE armbands.We appreciate your understanding and cooperation. Thank you.
</div>
                        </div>
                    </div>
                </div>
            </div>
            <Bubble bubbleSwitch={false}></Bubble>
        </div>
    )
}