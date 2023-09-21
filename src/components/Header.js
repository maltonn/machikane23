import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import "../css/Header.css"
import machikane_logo from "../imgs/main-visual-title.svg"

export default function Header() {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
    
    function onHamburgerClick() { //ハンバーガーがクリックされた時の処理
        setIsHamburgerOpen(prev => !prev)
    }
    const [isMenuOpenA, setIsMenuOpenA] = useState(false)
    function menuOpenA(){
        setIsMenuOpenA(prev => !prev)
    }
    const [isMenuOpenB, setIsMenuOpenB] = useState(false)
    function menuOpenB(){
        setIsMenuOpenB(prev => !prev)
    }
    const [isMenuOpenC, setIsMenuOpenC] = useState(false)
    function menuOpenC(){
        setIsMenuOpenC(prev => !prev)
    }
    const [isMenuOpenD, setIsMenuOpenD] = useState(false)
    function menuOpenD(){
        setIsMenuOpenD(prev => !prev)
    }
    
    useEffect(() =>{
        // window.onload = function(){
        //     var path = window.location.pathname;
        //     var urlArray=path.split("/");
        //     var ja = document.getElementById('ja-menu');
        //     var en = document.getElementById('en-menu');
        //     if(urlArray.includes('en')){
        //         document.getElementById('toggle-pc').checked=!document.getElementById('toggle-pc').checked;
        //         document.getElementById('toggle-sp').checked=!document.getElementById('toggle-sp').checked;
        //         ja.style.display='none';     
        //     }
        //     else{
        //         en.style.display='none';
        //     }
        // }
        // document.getElementById('toggle-pc').onclick=function(){
        //     var path = window.location.pathname;
        //     var baseURL=window.location.origin;
        //     var langChangePc=document.getElementById('toggle-pc').checked;
        //     if(langChangePc){
        //         var pathArray=path.split('/');
        //         var lastPath=pathArray[pathArray.length-1];
        //         var homePath=path.replace('/'+lastPath,'');
        //         window.location.href=baseURL+homePath+'/en/'+lastPath;
        //     }else{
        //         window.location.href=baseURL+path.replace('/en','');
        //     }
        // }
        // document.getElementById('toggle-sp').onclick=function(){
        //     var path = window.location.pathname;
        //     var baseURL=window.location.origin;
        //     var langChangeSp=document.getElementById('toggle-sp').checked;
        //     if(langChangeSp){
        //         var pathArray=path.split('/');
        //         var lastPath=pathArray[pathArray.length-1];
        //         var homePath=path.replace('/'+lastPath,'');
        //         window.location.href=baseURL+homePath+'/en/'+lastPath;
        //     }else{
        //         window.location.href=baseURL+path.replace('/en','');
        //     }
        // }
    })

    return (
        <header>
            <a href="./" className={`top-link ${isHamburgerOpen?"menu-opend":"menu-closed"}`}><img className={`machikane_logo-sp ${isHamburgerOpen?"menu-opend":"menu-closed"}`} src={machikane_logo} alt="まちかね祭ロゴ"></img></a>
            {/* <div className={`toggle-sp ${isHamburgerOpen?"menu-opend":"menu-closed"}`}>
                <label className="toggle-button">
                    <input type="checkbox" id="toggle-sp"/>
                </label>
            </div> */}
            
            <div className={`menu ${isHamburgerOpen?"menu-opend":"menu-closed"}`}>
                <div className="header">
                    <a href="./" className="top-link"><img className="machikane_logo-pc" src={machikane_logo} alt="まちかね祭ロゴ"></img></a>
                    {/* <div className="toggle-pc">
                        <label className="toggle-button">
                            <input type="checkbox" id="toggle-pc"/>
                        </label>
                    </div> */}
                    <ul className="menu-grandparent" id="ja-menu">
                        <li className="menu-parent"><span className={`menu-title ${isMenuOpenA?"is-opend":"is-closed"}`} onClick={menuOpenA}>まちかね祭について</span>
                            <ul className={`menu-child ${isMenuOpenA?"is-opend":"is-closed"}`}>
                                <li><Link to="./about">まちかね祭とは</Link></li>
                                <li><Link to="./adresses">ご挨拶</Link></li>
                                <li><Link to="./theme">テーマ</Link></li>
                                <li><Link to="./goods">グッズ</Link></li>
                                <li><Link to="./sponsor">ご協賛</Link></li>
                            </ul>
                        </li>
                        <li className="menu-parent"><span className={`menu-title ${isMenuOpenB?"is-opend":"is-closed"}`} onClick={menuOpenB}>企画について</span>
                            <ul className={`menu-child ${isMenuOpenB?"is-opend":"is-closed"}`}>
                                <li><Link to="./sections">企画区分について</Link></li>
                                <li><Link to="./project-search">企画検索</Link></li>
                                <li><Link to="./timetable">ステージタイムテーブル</Link></li>
                                <li><Link to="./ralley">ラリー企画一覧</Link></li>
                                <li><Link to="./official-project">実行委員会企画</Link></li>
                                <li><Link to="./lab-open">研究室紹介</Link></li>
                            </ul>
                        </li>
                        <li className="menu-parent"><span className={`menu-title ${isMenuOpenC?"is-opend":"is-closed"}`} onClick={menuOpenC}>来場者の方へ</span>
                            <ul className={`menu-child ${isMenuOpenC?"is-opend":"is-closed"}`}>
                                <li><Link to="./notes">注意事項</Link></li>
                                <li><Link to="./pamphlet">公式パンフレット</Link></li>
                                <li><Link to="./FAQ">よくあるご質問</Link></li>
                                <li><Link to="./inquiry">お問い合わせ</Link></li>
                            </ul>
                        </li>
                        <li className="menu-parent"><span className={`menu-title ${isMenuOpenD?"is-opend":"is-closed"}`} onClick={menuOpenD}>アクセス・マップ</span>
                            <ul className={`menu-child ${isMenuOpenD?"is-opend":"is-closed"}`}>
                                <li><Link to="./access">アクセス</Link></li>
                                <li><Link to="./map">マップ</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="hamburger" onClick={onHamburgerClick}>
                <svg className={`${isHamburgerOpen?"ham-opend":"ham-closed"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
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
                            <rect className="cls-1" width="48" height="48"/>
                        </g>
                        <g id="icon">
                            <line className="cls-2 first" x1="10" y1="12" x2="38" y2="12"/>
                            <line className="cls-2 second" x1="10" y1="24" x2="38" y2="24"/>
                            <line className="cls-2 third" x1="10" y1="36" x2="38" y2="36"/>
                        </g>
                    </g>
                </svg>
            </div>
        </header>
    )
}