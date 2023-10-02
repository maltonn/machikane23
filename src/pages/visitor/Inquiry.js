import { Helmet } from "react-helmet";
import "../../css/Common.css"
import "../../css/About.css"
import ContactForm from "../../components/ContactForm";
import PageTitles from "../../components/PageTitles";
import Bubble from "../../components/Bubble";

export default function Inquiry() {
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
            <Bubble></Bubble>
        </div>
    )
}