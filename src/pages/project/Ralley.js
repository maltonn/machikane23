import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";
import "../../css/Common.css"
import "../../css/ralley.css"
import "../../css/Project.css"
import { useEffect } from "react" 
import PageTitles from "../../components/PageTitles";
import Bubble from "../../components/Bubble";
import ralley1_icon from "../../imgs/ralley/ralley1_icon.png"
import ralley2_icon from "../../imgs/ralley/ralley2_icon.jpg"
import ralley3_icon from "../../imgs/ralley/ralley3_icon.jpg"
import startbooth from "../../imgs/ralley/startbooth.png"
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Ralley() {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    },[id])
    return(
        <div className="main">
            <Helmet>
            <title>ラリー企画一覧|まちかね祭2023</title>
            </Helmet>
            <div className="ralley-sky">
                <PageTitles titles="ラリー企画一覧" kam={false}></PageTitles>
                <div className="ralley-mainpage">
                    <p>ラリー企画では、来場者の皆さん自身が大学構内を移動しながら楽しんでいただけます。企画を楽しみながら、まちかね祭全体をぐるっと回ることができます。
                    </p>
                    <p>
                    メインストリート上、ピロティ付近のテントがスタートです。ぜひお越しください！！
                    </p>
                    <img src={startbooth} alt="スタートブース"></img>
                </div>
                <div className="ralley-intro">
                    <div className="ralley1">
                        <img src={ralley1_icon} alt="アイコン１"></img>
                        <div className="ralley1-content">
                            <div className="ralley1-title">再履バス同好会</div>
                            <div classname="ralley1-intro">
                            大阪大学のDeepで、カオスな、通称マイナーサークル達が一堂に会するスタンプラリーです。 今回は架空のサークル「大阪大学名字同好会」になりきって各チェックポイントにあるスタンプを集めましょう！
                            </div>
                        </div>
                    </div>
                    <div className="ralley2">
                        <img src={ralley2_icon} alt="アイコン２"></img>
                        <div className="ralley2-content">
                            <div className="ralley2-title">阪大言語サークルGGC</div>
                            <div className="ralley2-intro">
                            皆さんがいつも当たり前に耳にしている言語ですが、実はその歴史を辿ったり、言語学的な視点で見たりすれば、非常に興味深い事実が見えてきます。それをクイズで実感してみませんか。
                            </div>
                        </div>
                    </div>

                    <div className="ralley3">
                        <img src={ralley3_icon} alt="アイコン３"></img>
                        <div className="ralley3-content">
                            <div className="ralley3-title">阪大謎解きサークル OUtfoX</div>
                            <div className="ralley3-intro">
                            ある日、異星人から依頼が来た。彼らは宇宙に生息する生命体を研究しているらしい。
                            しかし、その名前がわからず、特定を手伝ってほしいとのことだ。謎を解いて彼らを助けよう！
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Bubble bubbleSwitch={false}></Bubble>
        </div>
    )
}