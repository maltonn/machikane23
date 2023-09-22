import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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
    function PageChange(){
        setIsHamburgerOpen(false)
        setIsMenuOpenA(false)
        setIsMenuOpenB(false)
        setIsMenuOpenC(false)
        setIsMenuOpenD(false)
    }
    
    useEffect(() =>{

    })

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
                        <li className="menu-parent"><span className={`menu-title ${isMenuOpenA?"is-opend":"is-closed"}`} onClick={menuOpenA}>まちかね祭について</span>
                            <ul className={`menu-child ${isMenuOpenA?"is-opend":"is-closed"}`}>
                                {/* {{"まちかね祭とは":"./about","ご挨拶":"./adresses","テーマ":"./theme","グッズ":"./goods","ご協賛":"./sponsor"}.map((value(key)) =>
                                <li><Link to={key} onClick={PageChange}>{value}</Link></li>
                                )} */}
                                <li><Link to="./about" onClick={PageChange}>まちかね祭とは</Link></li>
                                <li><Link to="./adresses" onClick={PageChange}>ご挨拶</Link></li>
                                <li><Link to="./theme" onClick={PageChange}>テーマ</Link></li>
                                <li><Link to="./goods" onClick={PageChange}>グッズ</Link></li>
                                <li><Link to="./sponsor" onClick={PageChange}>ご協賛</Link></li>
                            </ul>
                        </li>
                        <li className="menu-parent"><span className={`menu-title ${isMenuOpenB?"is-opend":"is-closed"}`} onClick={menuOpenB}>企画について</span>
                            <ul className={`menu-child ${isMenuOpenB?"is-opend":"is-closed"}`}>
                                <li><Link to="./sections" onClick={PageChange}>企画区分について</Link></li>
                                <li><Link to="./project-search" onClick={PageChange}>企画検索</Link></li>
                                <li><Link to="./timetable" onClick={PageChange}>ステージタイムテーブル</Link></li>
                                <li><Link to="./ralley" onClick={PageChange}>ラリー企画一覧</Link></li>
                                <li><Link to="./official-project" onClick={PageChange}>実行委員会企画</Link></li>
                                <li><Link to="./lab-open" onClick={PageChange}>研究室紹介</Link></li>
                            </ul>
                        </li>
                        <li className="menu-parent"><span className={`menu-title ${isMenuOpenC?"is-opend":"is-closed"}`} onClick={menuOpenC}>来場者の方へ</span>
                            <ul className={`menu-child ${isMenuOpenC?"is-opend":"is-closed"}`}>
                                <li><Link to="./notes" onClick={PageChange}>注意事項</Link></li>
                                <li><Link to="./pamphlet" onClick={PageChange}>公式パンフレット</Link></li>
                                <li><Link to="./FAQ" onClick={PageChange}>よくあるご質問</Link></li>
                                <li><Link to="./inquiry" onClick={PageChange}>お問い合わせ</Link></li>
                            </ul>
                        </li>
                        <li className="menu-parent"><span className={`menu-title ${isMenuOpenD?"is-opend":"is-closed"}`} onClick={menuOpenD}>アクセス・マップ</span>
                            <ul className={`menu-child ${isMenuOpenD?"is-opend":"is-closed"}`}>
                                <li><Link to="./access" onClick={PageChange}>アクセス</Link></li>
                                <li><Link to="./map" onClick={PageChange}>マップ</Link></li>
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