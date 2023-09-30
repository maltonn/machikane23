import "../css/Footer.css";
import insta from "../imgs/insta.svg"
import X from "../imgs/X.svg"
import machikane_logo from "../imgs/main-visual-title.svg"
import {Link} from "react-router-dom";
import { useGlobalContext } from "../contexts/globalContext";

export default function Footer() {
    function PageChange(){
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    const { lang } = useGlobalContext()
    return(
        <footer id="footer">
            <div className="logo"><Link to="/" onClick={PageChange}><img className="machikane_logo" src={machikane_logo} alt="まちかね祭ロゴ"></img></Link></div>
            <div className="sns">
                    <Link to="https://twitter.com/machikanesai" target="_blank" rel="noreferrer" ><img className="X" src={X} alt="xIcon"></img></Link>
                    <Link to="https://www.instagram.com/ou_machikanesai/" target="_blank" rel="noreferrer" ><img className="insta" src={insta} alt="instaIcon"></img></Link>
            </div>
            <div className="external-site">
                <Link to="/" onClick={PageChange}>{lang==="en"?"Top":"トップ"}</Link>|
                <Link to="https://tyuujitu.com/privacy-policy.html" >{lang==="en"?"Privacy Policy":"プライバシーポリシー"}</Link>
                {/* |
                <Link to="/inquiry" onClick={PageChange}>{lang==="en"?"Inquiry":"お問い合わせ"}</Link> */}
            </div>
            <div className="tyuujitu">
                <span>&copy;{lang==="en"?"Osaka University Festival Committee":"大阪大学大学祭中央実行委員会"}</span>
            </div>
        </footer>
    )
}