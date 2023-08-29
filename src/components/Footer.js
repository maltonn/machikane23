import "../css/Footer.css";
import insta from "../imgs/insta.svg"
import machikane_logo from "../imgs/machikane_logo.png"

export default function Footer() {
    return(
        <footer className="footer">
            <div className="logo"><a href="./" className="top-link"><img className="machikane_logo" src={machikane_logo} alt="まちかね祭ロゴ"></img></a></div>
            <div className="sns">
                    <a className="snsLink" href="https://twitter.com/machikanesai" target="_blank" rel="noreferrer"><span className="X"><span>𝕏</span></span></a>
                    <a href="https://www.instagram.com/ou_machikanesai/" target="_blank" rel="noreferrer"><img className="insta" src={insta} alt="instaIcon"></img></a>
            </div>
            <div className="external-site">
                <a href="./">トップ</a>|
                <a href="https://tyuujitu.com/privacy-policy.html">プライバシーポリシー</a>|
                <a href="./">お問い合わせ</a>
            </div>
            <div className="tyuujitu">
                <span>&copy;大阪大学大学祭中央実行委員会</span>
            </div>
        </footer>
    )
}