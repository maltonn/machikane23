import { Helmet } from "react-helmet";
import "../../css/Common.css"
import "../../css/About.css"
import ContactForm from "../../components/ContactForm";
import PageTitles from "../../components/PageTitles";
import Bubble from "../../components/Bubble";
import { useEffect } from "react";

export default function InquiryEn() {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    },[])
    return(
        <div className="main">
            <Helmet>
            <title>Inquiry|2023 Machikane Festival</title>
            </Helmet>
            <div className="contactForm-sky">
            <PageTitles titles="Inquiry" kame={true}></PageTitles>
                <div className="mainpage">
                    <ContactForm></ContactForm>
                </div>
            </div>
            <Bubble></Bubble>
        </div>
    )
}