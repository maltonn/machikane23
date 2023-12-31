import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";
import { useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../../css/TalentProject.css"
import "../../css/Common.css"
import PageTitles from "../../components/PageTitles";
import machikaneForestLogo from "../../imgs/official_project/machikaneForest.png"
import pancakeLogo from "../../imgs/official_project/pancake.png"
import nepleage from "../../imgs/official_project/nepleague.png"
import O1Logo from "../../imgs/official_project/O-1.png"
import free from "../../imgs/official_project/free.png"
import ticket from "../../imgs/official_project/ticketen.png"
import house from "../../imgs/official_project/house.png"
import clock from "../../imgs/official_project/clock.png"
import leaf from "../../imgs/official_project/leaf1.png"
import bonber from "../../imgs/official_project/bonber.png"
import Bubble from "../../components/Bubble";
import tomosankaku from "../../imgs/official_project/98D797FC-C7EF-403E-BC42-D1E724A9F536 - 毛笠龍之介.jpeg"
import DJcola from "../../imgs/official_project/IMG_20230930_094521 - たいち.jpg"
import santiago from "../../imgs/official_project/IMG_3680 - まつし.jpeg"
import noimage from "../../imgs/official_project/noimage.png"


export default function OfficialProjectEn() {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: "smooth",
        })
    })
    const O1Participant=[
        {
            "name":"DOPPYUN Baby Boy",
            "catchCopy":"Enemies of Ise Jingu",
            "grade":"Non-public",
            "comment":"Do my best!",
            "image":noimage
        },
        {
            "name":"Tri-Tip",
            "catchCopy":"Comedy Engineering",
            "grade":"department of engineering (2-year graduate students)",
            "comment":"Tri-Tip is not responsible for any abdominal pain caused by our comedy.",
            "image":tomosankaku
        },
        {
            "name":"The Devil Grandma in the Mountain",
            "catchCopy":"Good smell neighborhood",
            "grade":"department of Human Sciences 2-year university students",
            "comment":"Follow us",
            "image":noimage
        },
        {
            "name":"DJ Cola",
            "catchCopy":"SDGs Cmedy science（retake）",
            "grade":"department of engineering / 4-year university students",
            "comment":"Don't touch us, I'll sue you!",
            "image":DJcola
        },
        {
            "name":"All Out",
            "catchCopy":"Run it out for the win!",
            "grade":"department of literature / external student   4-year university students",
            "comment":"We have been working together since junior high school! This is the first time for both of us to perform on stage, but we will do our best to achieve our goals.",
            "image":noimage
        },
        {
            "name":"Kamasukadai",
            "catchCopy":"Big Teeth",
            "grade":"department of law /2-year university students",
            "comment":"We will do the best thing",
            "image":noimage
        },
        {
            "name":"Tantei gym",
            "catchCopy":"A new sense of comedy expression",
            "grade":"department of engineering/department of Human Sciences  1-year university student",
            "comment":"We will perform manzai that will touch your heart.",
            "image":noimage
        },
        {
            "name":"Santiago",
            "catchCopy":"Let the foreign wind blow",
            "grade":"department of engineering 2-year university student",
            "comment":"Let’s fight",
            "image":santiago
        },
        {
            "name":"Nana-Shaku",
            "catchCopy":"improving fantasy",
            "grade":"department of Human Sciences /department of literature  2-year university student",
            "comment":"We do our best to entertain you",
            "image":noimage
        },
    ]
    return(
        <div className="officialProject">
            <Helmet>
            <title>Official Projects|2023 Machikane Festival</title>
            </Helmet>
            <div className="sky">
            <PageTitles titles="Official Projects" kame={true}></PageTitles>
                <div className="officialProAll">
                    <AnchorLink href="#pancake" className="officialProject-link">
                        <div className="offiProCard">
                            <div className="offiProCard-title">“Freshy Fluffy Pancake”</div>
                            <div className="inforAll">
                                <div className="IconBox">
                                    <img className="officialIcon" src={pancakeLogo} alt="ぱんけえき焼きた亭のアイコン"></img>
                                </div>
                                <div className="information">
                                    <p>・Time: 10:00~18:00</p>
                                    <p>・Place: Tent No.40, Main street</p>
                                    <p>・Zone ticket: ✖</p>
                                    <p>・Recommended to: All</p>
                                    <p>・Paid</p>
                                </div>
                            </div>
                        </div> 
                    </AnchorLink>
                    <AnchorLink href="#machikaneForest" className="officialProject-link">
                        <div className="offiProCard">
                            <div className="offiProCard-title">“Machikane Forest”</div>
                            <div className="inforAll">
                                <div className="IconBox">
                                    <img className="officialIcon" src={machikaneForestLogo} alt="まちかねの森のアイコン"></img>
                                </div>
                                <div className="information">
                                    <p>・Time: 10:00-12:00,13:00-17:00</p>
                                    <p>・Place: CELAS C106</p>
                                    <p>・Zone ticket: 〇</p>
                                    <p>・Recommended to: All</p>
                                    <p>・Free</p>
                                </div>
                            </div>
                        </div> 
                    </AnchorLink>
                    <AnchorLink href="#nepleage" className="officialProject-link">
                        <div className="offiProCard nepleageCard">
                            <div className="offiProCard-title">Machikaneprigu</div>
                            <div className="inforAll">
                                <div className="IconBox">
                                    <img className="officialIcon" src={nepleage} alt="マチカネプリーグのアイコン"></img>
                                </div>
                                <div className="information">
                                    <p>・Time: 10:00-12:00 13:00-17:00</p>
                                    <p>・Place: CELAS C105</p>
                                    <p>・Zone ticket: 〇</p>
                                    <p>・Recommended to: High school / College students</p>
                                    <p>・Free</p>
                                </div>
                            </div>
                        </div> 
                    </AnchorLink>
                    <AnchorLink href="#O-1" className="officialProject-link">
                        <div className="offiProCard O-1card">
                            <div className="offiProCard-title">O-1grand prix</div>
                            <div className="inforAll">
                                <div className="IconBox">
                                    <img className="officialIcon" src={O1Logo}  alt="O-1GrandPrixのアイコン"></img>
                                </div>
                                <div className="information">
                                    <p>・Time: Nov. 5th (Day3) 17:00-19:00</p>
                                    <p>・Place: Stage Kanad</p>
                                    <p>・Zone ticket: ✖</p>
                                    <p>・Recommended to: All</p>
                                    <p>・Free</p>
                                </div>
                            </div>
                        </div>
                    </AnchorLink>
                </div>
                <div className="officialProDetail">
                    <div className="detailCard">
                        <div className="detail" id="pancake">
                            <h2 className="projectTitle">“Freshy Fluffy Pancake”</h2>
                            <div className="grade">
                                <div className="rate rate5">
                                </div>
                                <div className="rateNumber">5.0</div>
                            </div>
                            <div className="pancakeInfor">
                                <ul>
                                    <li className="pancakePlace">Place: Tent No.40, Main street</li>
                                    <li className="pancakeGenre">Genre：Pancake</li>
                                    <li className="pancakeTime">Time: 10:00~18:00</li>
                                    <li className="pancakeMoney">Price：350－400</li>
                                </ul>
                            </div>
                            <div className="pancakeDetail">
                                <div className="iconAround"><img className="detailIcon" src={pancakeLogo} alt="ぱんけえき焼きた亭のアイコン"></img></div>
                                
                                <div className="pancakeBoxs">
                                    <div className="pancakeBoxAround">
                                        <p className="pancakeBox">
                                            <div><strong>1．“Their pancakes are always FRESH!!”</strong></div>
                                            Pancakes are baked after the order, so you can always taste the fresh-baked one! They’re also fluffy and with your favorite decoration, it’s definitely wonderful!
                                        </p>
                                        <p className="pancakeBox">
                                            <div className="pancakeBoxTitle"><strong>2．“Not only pancakes they have…!”</strong></div>
                                            You can also get a kind of nostalgic drink—-Ramune soda!Why don’t you have one and hype up yourself during the festival?!
                                        </p>
                                        <p className="pancakeBox">
                                            <div className="pancakeBoxTitle"><strong>3．“Delicious pancakes and various toppings”</strong></div>
                                            You can chose toppings from these series;1. A classic pancake topping…Maple syrup! 2. Recommended for sweet-tooth…Salt-Caramel! 3.Can sense deep flavor…Brown sugar syrup × sweetened soybean powder 4.Ever never tasted?!…Honey-lemon.Guys, please find your best favorite!!
                                        </p>
                                        <p className="pancakeBox">
                                            <div className="pancakeBoxTitle"><strong>4．“You aren’t good at sweets??”</strong></div>
                                            If you want some toppings but not sweet ones, go with Bacon & ketchup! You should come and enjoy this fantastic collaboration of pancake and bacon~
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="detail machikaneForestDetail" id="machikaneForest">
                            <h2 className="projectTitle">Machikane Forest</h2>
                            <ul className="forestSimpleInfor">
                                <li className="forestPlace">
                                    <table>
                                        <tr>
                                            <td><img src={house} alt="まちかねの森企画場所"></img></td>
                                            <td>CELAS C106</td>
                                        </tr>
                                    </table>
                                </li>
                                <li className="forestMoney">
                                    <table>
                                        <tr>
                                            <td><img src={free} alt="まちかねの森"></img></td>
                                            <td>Free</td>
                                        </tr>
                                    </table>
                                </li>
                                <li className="forestTicket">
                                    <table>
                                        <tr>
                                            <td><img src={ticket} alt="整理券"></img>
                                            </td>
                                            <td>Ends as soon as it’s run out</td>
                                        </tr>
                                    </table>
                                </li>
                                <li className="forestTime">
                                    <table>
                                        <tr>
                                            <td><img src={clock} alt="開催時間"></img>
                                            </td>
                                            <td><p>10:00～12:00</p><p>13:00～17:00（All 3 days）</p></td>
                                        </tr>
                                    </table>
                                </li>
                            </ul>
                            <div className="pointAll">
                                <div className="pointBox">
                                    <img src={leaf} alt="葉っぱ"></img>
                                    <p className="pointContent">
                                    <span>Point1</span>
                                        <p>
                                        You can enjoy picking fruits and fishing as in the real Animal Crossing world!
                                        </p>
                                    </p>
                                </div>
                                <div className="pointBox">
                                    <img src={leaf} alt="葉っぱ"></img>
                                    <p className="pointContent">
                                    <span>Point2</span>
                                        <p>
                                        Welcome little guys!We prepare exciting games for everyone!
                                        </p>
                                    </p>
                                </div>
                                <div className="pointBox">
                                    <img src={leaf} alt="葉っぱ"></img>
                                    <p className="pointContent">
                                    <span>Point3</span>
                                        <p>
                                        Not only depicted the world of Animal Crossing, we also added our original ideas to make a cozy atmosphere!
                                        </p>
                                    </p>
                                </div>
                                <div className="pointBox">
                                    <img src={leaf} alt="葉っぱ"></img>
                                    <p className="pointContent">
                                    <span>Point4</span>
                                        <p>
                                        You’ll get points by playing each game! Get a lot of points and you might get gorgeous presents!!
                                        </p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="detail" id="nepleage">
                            <div className="nepleageQuestion">
                                <p>
                                Q.Answer 4 characteristics of Machikanepurigu.
                                </p>
                            </div>
                            <div className="nepleageBar"><img src={bonber} alt="ネプリーグのバー"></img></div>
                            <ul className="nepleageInfor">
                                <li className="nepleagePlace"> C105 </li>
                                <li className="nepleageFree"> Free </li>
                                <li className="nepleageTicket">Need zone ticket</li>
                                <li className="nepleageFor">For Highschool and College students</li>
                            </ul>
                        </div>
                        <div className="detail O-1Detail" id="O-1">
                            <div className="O-1Title"></div>
                            <div className="O-1DetailIcon"><img src={O1Logo} alt="O-1アイコン"></img></div>
                            <p className="O1text">Who's gonna be the funniest in Osaka University!?</p>
                            <p className="O1text">Here's the introductions of all the competitors!</p>
                            <div className="O-1boxAround">
                                {O1Participant.map((data)=>{
                                    return(
                                        <div className="O-1box">
                                            <div className="O1Image"><img src={data.image} alt="出場者写真"></img></div>
                                            <table>
                                                <tr>
                                                    <td>Duo name</td><td>{data.name}</td>
                                                </tr>
                                                <tr>
                                                    <td>profile</td><td>{data.grade}</td>
                                                </tr>
                                                <tr>
                                                    <td>slogan</td><td>{data.catchCopy}</td>
                                                </tr>
                                            </table>
                                            <p>{data.comment}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Bubble bubbleSwitch={false}></Bubble>
        </div>
    )
}