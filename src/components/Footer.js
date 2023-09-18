import "../css/Footer.css";
import insta from "../imgs/insta.svg"
import X from "../imgs/X.svg"
import machikane_logo from "../imgs/main-visual-title.svg"
import {Link} from "react-router-dom";

// window.addEventListener('load', () => {
//     var getFooter=document.getElementById('footer');
//     var footerPosition=getFooter.getBoundingClientRect().top;
//     var windowHeight=window.innerHeight;
//     if(footerPosition<windowHeight){
//         getFooter.style.position='absolute';
//         getFooter.style.bottom=0;
//     }else{
//         getFooter.style.position='relative';
//     }
// });

export default function Footer() {
    return(
        <footer id="footer">
            <div className="logo"><Link to="/" ><img className="machikane_logo" src={machikane_logo} alt="まちかね祭ロゴ"></img></Link></div>
            <div className="sns">
                    <Link to="https://twitter.com/machikanesai" target="_blank" rel="noreferrer" ><img className="X" src={X} alt="xIcon"></img></Link>
                    <Link to="https://www.instagram.com/ou_machikanesai/" target="_blank" rel="noreferrer" ><img className="insta" src={insta} alt="instaIcon"></img></Link>
            </div>
            <div className="external-site">
                <Link to="/" >トップ</Link>|
                <Link to="https://tyuujitu.com/privacy-policy.html" >プライバシーポリシー</Link>
                {/* |
                <Link to="/inquiry" >お問い合わせ</Link> */}
            </div>
            <div className="tyuujitu">
                <span>&copy;大阪大学大学祭中央実行委員会</span>
            </div>
        </footer>
    )
}