import { Helmet } from "react-helmet";
import "../../css/Common.css"
import "../../css/About.css"
import ContactForm from "../../components/ContactForm";
export default function Inquiry() {
    return(
        <div className="main">
            <Helmet>
            <title>お問い合わせ|まちかね祭2023</title>
            </Helmet>
            <div className="sky">
                <div className="top">            
                    <div className="title">
                        <h1>お問い合わせ</h1>
                    </div>
                </div>
                <div className="mainpage">
                    <ContactForm></ContactForm>
                </div>
            </div>
            <div className="ocean">
                <div className="bottom">
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                </div>
            </div>
        </div>
    )
}