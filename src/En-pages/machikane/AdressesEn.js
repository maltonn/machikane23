import { Helmet } from "react-helmet";
// import {Link} from "react-router-dom";
import "../../css/Common.css"
import PageTitles from "../../components/PageTitles"
import president from "../../imgs/NISHIO-Shojiro.jpg"
import chairperson from "../../imgs/chairperson.jpg"
export default function AdressesEn() {
    return(
        <div className="main">
            <Helmet>
            <title>Address|2023 Machikane Festival</title>
            </Helmet>
            <div className="greeting-sky">
                <PageTitles titles="Address"></PageTitles>
                <div className="president">
                    <div className="greeting-titles-En1">Address by the university president</div>
                    <div className="greeting-card">
                        <img src={president} alt="総長"></img>
                        <div className="sentences">
                            <p>
                                　The "Machikane Festival" season has arrived again!  Every year, setting an original theme for each festival, Osaka University students organize the entire festival centering the members of the Festival Committee.  This year, it is our 64th Machikane Festival in its history.  I will show my sincere respect to all the students for making great efforts to inherit its long history and tradition.<br></br>
                                　This year's theme is──"Han-Sun-Sun."  From the theme, I can feel the great passion and energy of students wanting to enlighten the world as a beacon of hope as bright as the sunlight, and I really feel that you are promising and reliable.<br></br>
                                　I have just said "sunlight" in one word earlier, but as all of you know, lights we are able to see with our eyes, the visible lights, are composed of various lights with different wavelengths.  From the longest, we can see its variety, red, orange, yellow, green, blue, indigo and purple.   What I mean is that each of you have your own color, own personality and own characteristic.  So, please have confidence in yourself and fully show us your dazzling ability at Osaka University.  The stage is now here for you.<br></br>
                                　When versatile personalities are joined together as one at this Machikane Festival, it will become a light of hope for the visitors and at the same time, it will remain as a heartwarming memory for them.<br></br>
                                　The world is now shifting toward a "post-pandemic" era.  Cities are coming back to life and we may feel as if we have turned back to a previous normal life.  However, the present is no more just the extent of the past. Our behavior patterns have changed and many other things have also changed a lot.  Instead, I do believe that there is something important that will never change and you will definitely find the answer through the festival.  Please try and think from many aspects what the answer is.  There may be more than one answer.<br></br>
                                　I sincerely hope this Machikane Festival will be the wonderful stage for you to brightly shine yourselves.
                            </p>
                            <div className="name"><p>Best wishes,<br></br>President of Osaka University, Seijiro Nishio</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="greeting-ocean">
                <div className="greeting-contents">
                    <div className="chairperson">
                        <div className="greeting-titles-En2">Address by the chairperson<br className="smartphone"></br> of Festival Committee</div>
                        <div className="greeting-card">
                            <img src={chairperson} alt="委員長(林)"></img>
                            <div className="sentences">
                                <p>
                                    Firstly, I really appreciate all of you visiting us today.  Welcome to our Machikane Festival!<br></br>
                                    Now, I'd like to ask you some questions.  What comes to mind when you hear the word "school festival"?  Looking back on your old days from elementary school to university, what can you remember about those school festivals you've experienced?  I assume each of you had different ones.  However, there might be something in common.  It is that school festivals always set its goal to "fully enjoy the moment."  Different backgrounds or situations do not matter and everyone can just enjoy themselves during the moment of the festival.  This is the "school festival" I imagine.<br></br>
                                    This year's theme is "Han-Sun-Sun."  We hope everyone involved with this Machikane Festival will spend a wonderful time here.  It would be a great honor for me to be able to see everyone overflowing with smiles.  What would the Machikane Festival this year be like?  I sincerely hope you enjoy the festival to the fullest with your family and friends.<br></br>
                                    Last but not least, I’d like to express my appreciation to all of you who gave us support.<br></br>
                                    Thank you so much.
                                </p>
                                <div className="name"><p>Chairperson of Osaka University Festival Committee, Yuto Hayashi</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>          
        </div>
    )
}