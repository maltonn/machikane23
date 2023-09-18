import { useEffect, useState } from "react"

import "../css/Header.css"
import machikane_logo from "../imgs/main-visual-title.svg"
import { Link } from "react-router-dom";
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

    const {lang,setLang}=useGlobalContext()

    return (
        <header>
            <Link to="/" className={`top-link ${isHamburgerOpen ? "menu-opend" : "menu-closed"}`} >
                <img className={`machikane_logo-sp ${isHamburgerOpen ? "menu-opend" : "menu-closed"}`} src={machikane_logo} alt="まちかね祭ロゴ"></img>
            </Link>
            <div className={`toggle-sp ${isHamburgerOpen?"menu-opend":"menu-closed"}`}>
                <label className="toggle-button">
                    <input type="checkbox" id="toggle-sp" checked={lang=="en"} onChange={()=>{lang=="en"?setLang("ja"):setLang("en")}} />
                </label>
            </div>

            <div className={`menu ${isHamburgerOpen ? "menu-opend" : "menu-closed"}`}>
                <div className="header">
                    <Link to="/" className="top-link" ><img className="machikane_logo-pc" src={machikane_logo} alt="まちかね祭ロゴ"></img></Link>
                    <div className="toggle-pc">
                        <label className="toggle-button">
                            <input type="checkbox" id="toggle-pc" checked={lang=="en"} onChange={()=>{lang=="en"?setLang("ja"):setLang("en")}} />
                        </label>
                    </div>
                    <ul className="menu-grandparent" id="ja-menu">
                        <li className="menu-parent"><span className={`menu-title ${isMenuOpenA ? "is-opend" : "is-closed"}`} onClick={menuOpenA}>{lang=="en"?"About":"まちかね祭について"}</span>
                            <ul className={`menu-child ${isMenuOpenA ? "is-opend" : "is-closed"}`}>
                                <li>準備中</li>
                                {/* <li><Link to="/about" >まちかね祭とは</Link></li>
                                <li><Link to="/adresses" >ご挨拶</Link></li>
                                <li><Link to="/theme" >テーマ</Link></li>
                                <li><Link to="/goods" >グッズ</Link></li>
                                <li><Link to="/sponsor" >ご協賛</Link></li> */}
                            </ul>
                        </li>
                        <li className="menu-parent"><span className={`menu-title ${isMenuOpenB ? "is-opend" : "is-closed"}`} onClick={menuOpenB}>{lang=="en"?"Project":"企画について"}</span>
                            <ul className={`menu-child ${isMenuOpenB ? "is-opend" : "is-closed"}`}>
                                <li>準備中</li>
                                {/* <li><Link to="/sections" >企画区分について</Link></li>
                                <li><Link to="/project-search" >企画検索</Link></li>
                                <li><Link to="/timetable" >ステージタイムテーブル</Link></li>
                                <li><Link to="/ralley" >ラリー企画一覧</Link></li>
                                <li><Link to="/official-project" >実行委員会企画</Link></li>
                                <li><Link to="/lab-open" >研究室紹介</Link></li> */}
                            </ul>
                        </li>
                        <li className="menu-parent"><span className={`menu-title ${isMenuOpenC ? "is-opend" : "is-closed"}`} onClick={menuOpenC}>来場者の方へ</span>
                            <ul className={`menu-child ${isMenuOpenC ? "is-opend" : "is-closed"}`}>
                                <li>準備中</li>
                                {/* <li><Link to="/notes" >注意事項</Link></li>
                                <li><Link to="/pamphlet" >公式パンフレット</Link></li>
                                <li><Link to="/FAQ" >よくあるご質問</Link></li>
                                <li><Link to="/inquiry" >お問い合わせ</Link></li> */}
                            </ul>
                        </li>
                        <li className="menu-parent"><span className={`menu-title ${isMenuOpenD ? "is-opend" : "is-closed"}`} onClick={menuOpenD}>アクセス・マップ</span>
                            <ul className={`menu-child ${isMenuOpenD ? "is-opend" : "is-closed"}`}>
                                <li>準備中</li>
                                {/* <li><Link to="/access" >アクセス</Link></li>
                                <li><Link to="/map" >マップ</Link></li> */}
                            </ul>
                        </li>
                    </ul>

                    {/* <ul className="menu-grandparent" id="en-menu">
                        <li className="menu-parent"><span className={`menu-title ${isMenuOpenA?"is-opend":"is-closed"}`} onClick={menuOpenA}>About</span>
                            <ul className={`menu-child ${isMenuOpenA?"is-opend":"is-closed"}`}>
                                <li><Link to="/about" >What is Machikane Festival?</Link></li>
                                <li><Link to="/adresses" >Adresses</Link></li>
                                <li><Link to="/theme" >Theme</Link></li>
                                <li><Link to="/goods" >Official Goods</Link></li>
                                <li><Link to="/sponsor" >Our Sponsors</Link></li>
                            </ul>
                        </li>
                        <li className="menu-parent"><span className={`menu-title ${isMenuOpenB?"is-opend":"is-closed"}`} onClick={menuOpenB}>Projects</span>
                            <ul className={`menu-child ${isMenuOpenB?"is-opend":"is-closed"}`}>
                                <li><Link to="/sections" >Project Category</Link></li>
                                <li><Link to="/project-search" >Project Search</Link></li>
                                <li><Link to="/timetable" >Stage Performance Schedule</Link></li>
                                <li><Link to="/ralley" >Rally Projects</Link></li>
                                <li><Link to="/official-project" >Projects by Festival Committee</Link></li>
                                <li><Link to="/lab-open" >Introduce Our Lab</Link></li>
                            </ul>
                        </li>
                        <li className="menu-parent"><span className={`menu-title ${isMenuOpenC?"is-opend":"is-closed"}`} onClick={menuOpenC}>To the visitors</span>
                            <ul className={`menu-child short ${isMenuOpenC?"is-opend":"is-closed"}`}>
                                <li><Link to="/notes" >Notes</Link></li>
                                <li><Link to="/pamphlet" >Official Pamphlet</Link></li>
                                <li><Link to="/FAQ" >FAQs</Link></li>
                                <li><Link to="/inquiry" >Inquiry</Link></li>
                            </ul>
                        </li>
                        <li className="menu-parent"><span className={`menu-title ${isMenuOpenD?"is-opend":"is-closed"}`} onClick={menuOpenD}>Information</span>
                            <ul className={`menu-child short ${isMenuOpenD?"is-opend":"is-closed"}`}>
                                <li><Link to="/access" >Access</Link></li>
                                <li><Link to="/map" >Map</Link></li>
                            </ul>
                        </li>
                    </ul> */}
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