import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import "../css/Header.css"
import machikane_logo from "../imgs/main-visual-title.svg"
import { useGlobalContext } from "../contexts/globalContext";

export default function Header() {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

    function onHamburgerClick() { //ハンバーガーがクリックされた時の処理
        setIsHamburgerOpen(prev => !prev)
    }
    const [isMenuOpenA, setIsMenuOpenA] = useState(false)
    function menuOpenA() {
        setIsMenuOpenA(prev => !prev)
    }
    const [isMenuOpenB, setIsMenuOpenB] = useState(false)
    function menuOpenB() {
        setIsMenuOpenB(prev => !prev)
    }
    const [isMenuOpenC, setIsMenuOpenC] = useState(false)
    function menuOpenC() {
        setIsMenuOpenC(prev => !prev)
    }
    const [isMenuOpenD, setIsMenuOpenD] = useState(false)
    function menuOpenD() {
        setIsMenuOpenD(prev => !prev)
    }
    function PageChange(){
        setIsHamburgerOpen(false)
        setIsMenuOpenA(false)
        setIsMenuOpenB(false)
        setIsMenuOpenC(false)
        setIsMenuOpenD(false)
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    
    useEffect(() =>{

    })

    const { lang } = useGlobalContext()
    const { setLang } =useGlobalContext()
    return (
        <header>
            <Link to="/" className={`top-link ${isHamburgerOpen ? "menu-opend" : "menu-closed"}`} onClick={PageChange}>
                <img className={`machikane_logo-sp ${isHamburgerOpen ? "menu-opend" : "menu-closed"}`} src={machikane_logo} alt="まちかね祭ロゴ"></img>
            </Link>
            <div className={`toggle-sp ${isHamburgerOpen?"menu-opend":"menu-closed"}`}>
                <label className="toggle-button">
                    <input type="checkbox" id="toggle-sp" checked={lang=="en"} onClick={PageChange} onChange={()=>{lang=="en"?setLang("ja"):setLang("en")}} />
                </label>
            </div>

            <div className={`menu ${isHamburgerOpen ? "menu-opend" : "menu-closed"}`}>
                <div className="header">
                    <Link to="/" className="top-link" onClick={PageChange}><img className="machikane_logo-pc" src={machikane_logo} alt="まちかね祭ロゴ"></img></Link>
                    <div className="toggle-pc">
                        <label className="toggle-button">
                            <input type="checkbox" id="toggle-pc" checked={lang=="en"} onClick={PageChange} onChange={()=>{lang=="en"?setLang("ja"):setLang("en")}} />
                        </label>
                    </div>
                    <ul className="menu-grandparent" id="ja-menu">
                        <li className="menu-parent"><span className={`menu-title ${isMenuOpenA?"is-opend":"is-closed"}`} onClick={menuOpenA}>{lang=="en"?"About":"まちかね祭について"}</span>
                            <ul className={`menu-child ${lang=="en" && "en-longTitle"} ${isMenuOpenA?"is-opend":"is-closed"}`}>
                                <li><Link to="./about" onClick={PageChange}>{lang=="en"?"What is Machikane Festival?":"まちかね祭とは"}</Link></li>
                                <li><Link to="./adresses" onClick={PageChange}>{lang=="en"?"Adresses":"ご挨拶"}</Link></li>
                                <li><Link to="./theme" onClick={PageChange}>{lang=="en"?"Theme":"テーマ"}</Link></li>
                                <li><Link to="./goods" onClick={PageChange}>{lang=="en"?"Official Goods":"グッズ"}</Link></li>
                                <li><Link to="./sponsor" onClick={PageChange}>{lang=="en"?"Our Sponsors":"ご協賛"}</Link></li>
                            </ul>
                        </li>
                        <li className="menu-parent"><span className={`menu-title ${isMenuOpenB?"is-opend":"is-closed"}`} onClick={menuOpenB}>{lang=="en"?"Projects":"企画について"}</span>
                            <ul className={`menu-child ${lang=="en" && "en-longTitle"} ${isMenuOpenB?"is-opend":"is-closed"}`}>
                                <li><Link to="./sections" onClick={PageChange}>{lang=="en"?"Project Category":"企画区分について"}</Link></li>
                                <li><Link to="./project-search" onClick={PageChange}>{lang=="en"?"Project Search":"企画検索"}</Link></li>
                                <li><Link to="./timetable" onClick={PageChange}>{lang=="en"?"Stage Performance Schedule":"ステージタイムテーブル"}</Link></li>
                                <li><Link to="./ralley" onClick={PageChange}>{lang=="en"?"Rally Projects":"ラリー企画一覧"}</Link></li>
                                <li><Link to="./official-project" onClick={PageChange}>{lang=="en"?"Projects by Festival Committee":"実行委員会企画"}</Link></li>
                                <li><Link to="./talent-project" onClick={PageChange}>{lang=="en"?"Live":"お笑いライブ"}</Link></li>
                                <li><Link to="./lab-open" onClick={PageChange}>{lang=="en"?"Introduce Our Lab":"研究室紹介"}</Link></li>
                            </ul>
                        </li>
                        <li className="menu-parent"><span className={`menu-title ${isMenuOpenC?"is-opend":"is-closed"}`} onClick={menuOpenC}>{lang=="en"?"To the visitors":"ご来場の方へ"}</span>
                            <ul className={`menu-child ${isMenuOpenC?"is-opend":"is-closed"}`}>
                                <li><Link to="./notes" onClick={PageChange}>{lang=="en"?"Notes":"注意事項"}</Link></li>
                                <li><Link to="./pamphlet" onClick={PageChange}>{lang=="en"?"Official Pamphlet":"公式パンフレット"}</Link></li>
                                <li><Link to="./FAQ" onClick={PageChange}>{lang=="en"?"FAQs":"よくあるご質問"}</Link></li>
                                <li><Link to="./inquiry" onClick={PageChange}>{lang=="en"?"Inquiry":"お問い合わせ"}</Link></li>
                            </ul>
                        </li>
                        <li className="menu-parent"><span className={`menu-title ${isMenuOpenD?"is-opend":"is-closed"}`} onClick={menuOpenD}>{lang=="en"?"Information":"アクセス・マップ"}</span>
                            <ul className={`menu-child ${isMenuOpenD?"is-opend":"is-closed"}`}>
                                <li><Link to="./access" onClick={PageChange}>{lang=="en"?"Access":"アクセス"}</Link></li>
                                <li><Link to="./map" onClick={PageChange}>{lang=="en"?"Map":"マップ"}</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="hamburger" onClick={onHamburgerClick}>
                <svg className={`${isHamburgerOpen ? "ham-opend" : "ham-closed"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <defs>
                        <style>
                            {`
                            .cls-1, .cls-2{
                                fill:none;
                            }
                            .cls-2{
                                stroke:#000;
                                stroke-linecap:round;
                                stroke-linejoin:round;
                                stroke-width:4px;
                            }
                            `}
                        </style>
                    </defs>
                    <title>bars_24</title>
                    <g id="レイヤー_2" data-name="レイヤー 2">
                        <g id="Rect_最後透明に_" data-name="Rect（最後透明に）">
                            <rect className="cls-1" width="48" height="48" />
                        </g>
                        <g id="icon">
                            <line className="cls-2 first" x1="10" y1="12" x2="38" y2="12" />
                            <line className="cls-2 second" x1="10" y1="24" x2="38" y2="24" />
                            <line className="cls-2 third" x1="10" y1="36" x2="38" y2="36" />
                        </g>
                    </g>
                </svg>
            </div>
        </header>
    )
}