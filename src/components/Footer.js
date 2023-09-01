import "../css/Footer.css";
import insta from "../imgs/insta.svg"
import machikane_logo from "../imgs/machikane_logo.png"

window.addEventListener('load', () => {
    var getFooter=document.getElementById('footer');
    var footerPosition=getFooter.getBoundingClientRect().top;
    var windowHeight=window.innerHeight;
    if(footerPosition<windowHeight){
        getFooter.style.position='absolute';
        getFooter.style.bottom=0;
    }else{
        getFooter.style.position='relative';
    }
});

export default function Footer() {
    return(
        <footer id="footer">
            <div className="logo"><a href="./" className="top-link"><img className="machikane_logo" src={machikane_logo} alt="まちかね祭ロゴ"></img></a></div>
            <div className="sns">
                    <a className="snsLink" href="https://twitter.com/machikanesai" target="_blank" rel="noreferrer"><span className="X"><span>𝕏</span></span></a>
                    <a href="https://www.instagram.com/ou_machikanesai/" target="_blank" rel="noreferrer"><img className="insta" src={insta} alt="instaIcon"></img></a>
            </div>
            <div className="external-site">
                <a href="./">トップ</a>|
                <a href="https://tyuujitu.com/privacy-policy.html">プライバシーポリシー</a>|
                <a href="./inquiry">お問い合わせ</a>
            </div>
            <div className="tyuujitu">
                <span>&copy;大阪大学大学祭中央実行委員会</span>
            </div>
        </footer>
    )
}