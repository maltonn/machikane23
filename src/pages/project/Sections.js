import { Helmet } from "react-helmet";
// import {Link} from "react-router-dom";
import PageTitles from "../../components/PageTitles";
import Bubble from "../../components/Bubble";

import "../../css/Common.css"
import { useEffect } from "react";
export default function Sections() {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    },[])
    return(
        <div className="main">
            <Helmet>
            <title>企画区分について|まちかね祭2023</title>
            </Helmet>
            <div className="notes-sky">
                <PageTitles titles="企画区分について" kame={true}></PageTitles>
                <div className="notes-mainpage">
                    <div className="notes-all">
                        <div className="notes-naiyou">
                            <div className="notes-miniTitle">館内区分</div>
                            <div className="notes-miniContent">
                                <p>館内区分では、様々なサークル、部活による個性豊かな演奏、販売、体験、展示などの企画が行われます。これらはその名の通り、全学教育共通棟、文法経講義棟、法経講義棟、学生会館の教室内、大学会館内の懐徳堂で実施されております。ぜひお立ち寄りください。</p>
                            </div>
                        </div>
                        <div className="notes-naiyou">
                            <div className="notes-miniTitle">ラリー企画</div>
                            <div className="notes-miniContent">
                                <p>ラリー企画では、来場者の皆さん自身が大学構内を移動しながら楽しんでいただけます。企画を楽しみながら、まちかね祭全体をぐるっと回る事ができます。メインストリート上、ピロティ付近のテントがスタートです。ぜひお越しください。</p>
                            </div>
                        </div>
                        <div className="notes-naiyou">
                            <div className="notes-miniTitle">屋外区分</div>
                            <div className="notes-miniContent">
                                <p>屋外区分では、パフォーマンスを中心として、展示など多様な企画が行われます。2023年度まちかね祭では、学生交流棟・学生会館横・C棟前・文学研究棟前・サイバーメディアセンター横など建物外かつ模擬店のテント以外の場所で行われます。ぜひお越しください。</p>
                            </div>
                        </div>
                        <div className="notes-naiyou">
                            <div className="notes-miniTitle">ステージ区分</div>
                            <div className="notes-miniContent">
                                <p>ステージ区分では、カルチエ前のステージ<ruby>奏<rt>かなで</rt></ruby>とかさね前のステージ<ruby>宙<rt>そら</rt></ruby>の2つのステージで様々な企画が行われます。バンド演奏からダンスパフォーマンスまで、迫力あるステージをぜひお楽しみください。</p>
                            </div>
                        </div>
                        <div className="notes-naiyou">
                            <div className="notes-miniTitle">模擬店区分</div>
                            <div className="notes-miniContent">
                                <p>模擬店区分では、食品の提供などが行われます。食事席もご用意しております。2023年度まちかね祭では、大阪大学会館(旧イ号館)前及びメインストリート南側(<ruby>浪高庭園<rt>なみこうていえん</rt></ruby>側)のテントで行われます。ぜひお越しください。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Bubble></Bubble>
        </div>
    )
}