import { Helmet } from "react-helmet";
import "../../css/Common.css"
import "../../css/About.css"
import ContactForm from "../../components/ContactForm";
import PageTitles from "../../components/PageTitles";
import Bubble from "../../components/Bubble";
import { useEffect } from "react";

export default function Inquiry() {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    },[])
    return(
        <div className="main">
            <Helmet>
            <title>お問い合わせ|まちかね祭2023</title>
            </Helmet>
            <div className="contactForm-sky">
            <PageTitles titles="お問い合わせ" kame={true}></PageTitles>
                <div className="mainpage">
                    <ContactForm></ContactForm>
                </div>
            </div>
            <Bubble bubbleSwitch={false}></Bubble>
        </div>
    )
}