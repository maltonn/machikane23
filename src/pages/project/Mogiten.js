import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";
import "../../css/Common.css"
import "../../css/Mogiten.css"
import { useEffect } from "react" 

export default function Mogiten() {
    return (
        <div className="main">
            <Helmet>
            <title>模擬店企画一覧|まちかね祭2023</title>
            </Helmet>
            <div className="about-sky">
                <PageTitles titles="模擬店企画一覧" kame={true}></PageTitles>
                <div className="about-mainpage"> 

                </div>
            </div>
            <Bubble></Bubble>
        </div>
    )
}