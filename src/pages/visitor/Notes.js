import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";
import "../../css/Common.css"
import "../../css/Notes.css"
import PageTitles from "../../components/PageTitles";
import Bubble from "../../components/Bubble";
import { useEffect } from "react";
export default function Notes() {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    },[])
    const PageChange=()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    return(
        <div className="main">
            <Helmet>
            <title>注意事項|まちかね祭2023</title>
            </Helmet>
            <div className="notes-sky">
                <PageTitles titles="注意事項" kame={true}></PageTitles>
                <div className="notes-mainpage">
                    <div className="notes-all">
                        <div className="notes-naiyou">
                            <div className="notes-miniTitle">飲食について</div>
                            <div className="notes-miniContent">
                                <p>食事（持ち込み含む）は、食事席に限り可能であり、他の場所での飲食は禁止とします。ただし、水分補給はしていただいて構いません。</p>
                                <p>食事席はメインストリートの周辺に設置してあります。詳しくはマップページをご覧ください。</p>
                                <div className="notes-linkButton"><Link to="/map" className="pretty-button" onClick={PageChange}>マップ</Link></div>
                                <p>お食事の際は、以下のことをお守りください。</p>
                                <ol>
                                    <li>食事席の椅子を動かした際は元に戻してください。</li>
                                    <li>ごみはごみ箱に分別して捨ててください。</li>
                                    <li>食事席は数が限られています。食事がお済みの方は館内のソファ・椅子（食事は出来ません）に移動するなど、ご協力をお願いします。</li>
                                </ol>
                            </div>
                        </div>
                        <div className="notes-naiyou">
                            <div className="notes-miniTitle">ごみについて</div>
                            <div className="notes-miniContent">
                                <ul>
                                    <li>まちかね祭期間中は通常のごみ箱が使用できません。</li>
                                    <li>ごみは「ゴミステーション」にて分別して捨ててください。</li>
                                    <li>ステージ宙付近にも臨時のゴミ箱を設置しておりますが、基本的に「ゴミステーション」にて捨てていただくようにお願いいたします。</li>
                                </ul>
                            </div>
                        </div>
                        <div className="notes-naiyou">
                            <div className="notes-miniTitle">酒類について</div>
                            <div className="notes-miniContent">
                                <ul>
                                    <li>本まちかね祭において、酒類の販売はいたしません。</li>
                                    <li>飲酒、酒類の持ち込み、泥酔状態でのご来場は禁止いたします。ご協力の程よろしくお願いいたします。</li>
                                </ul>
                            </div>
                        </div>
                        <div className="notes-naiyou">
                            <div className="notes-miniTitle">喫煙について</div>
                            <div className="notes-miniContent">
                                <p>キャンパス内は禁煙です。喫煙はご遠慮下さい。
                                </p>
                            </div>
                        </div>
                        <div className="notes-naiyou">
                            <div className="notes-miniTitle">落とし物について</div>
                            <div className="notes-miniContent">
                                <ul>
                                    <li>11月3日(金)から11月5日(日)のまちかね祭期間中の落とし物は当委員会の本部受付（ピロティ）にて管理いたします。</li>
                                    <li>大学祭期間中、構内で落とし物を発見した場合、または構内で落とし物をしてしまった場合は、まず総合案内所までお越しください。</li>
                                    <li>ただし、大学祭期間後（11月6日以降）の落とし物の管理は豊中学生センター（豊中キャンパス 学生交流棟2階）に移されます。</li>
                                    <li>それ以降の拾得物、紛失物についての確認などは、豊中学生センターにて行ってください。</li>
                                </ul>
                            </div>
                        </div>
                        <div className="notes-naiyou">
                            <div className="notes-miniTitle">迷子について</div>
                            <div className="notes-miniContent">
                            大学祭期間中に迷子を発見した場合、まず総合案内所までお越しください。
                            </div>
                        </div>
                        <div className="notes-naiyou">
                            <div className="notes-miniTitle">ペット連れでのご来場について</div>
                            <div className="notes-miniContent">
                                <ul>
                                    <li>まちかね祭は非常に混雑することが予想されますので、ペットを連れてのご来場はお控えください。</li>
                                    <li>特にメインストリートは、食品を扱う企画を行っているため、全面的にペットの通行を禁止します。</li>
                                    <li>ステージ企画、館内企画、屋外企画はケージに入れた状態であればご来場していただくことが可能です。</li>
                                </ul>
                            </div>
                        </div>
                        <div className="notes-naiyou">
                            <div className="notes-miniTitle">感染症対策について</div>
                            <div className="notes-miniContent">
                                <ul>
                                    <li>2023年度まちかね祭では、原則入場制限を行いません。事前予約なしで、自由にご来場いただけます。ただし、混雑時は一時的に入場制限をすることがございます。</li>
                                    <li>体調不良の場合はご来場をお控えください。</li>
                                    <p>※本学の感染症対策指針の変更に伴い、上記注意事項も変更となる場合がございます。</p>
                                </ul>
                            </div>
                        </div>
                        <div className="notes-naiyou">
                            <div className="notes-miniTitle">ビラ配り・勧誘行為について</div>
                            <div className="notes-miniContent">
                                <ul>
                                    <li>
                                    企画エリア内でのビラ配りは事前許可制となっております。事前に許可を得ていないビラ配りは全て禁止です。
                                    </li>
                                    <li>
                                    特に、メインストリートでビラ配りをすることは出来ません（一部区間を除く）。
                                    </li><li>
                                    不審なビラ配り・勧誘行為にご注意ください。
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="notes-naiyou">
                            <div className="notes-miniTitle">お困りの際は</div>
                            <div className="notes-miniContent">まちかね祭期間中、何か困ったことがございましたらお近くの実行委員にお声掛けください。
                            実行委員は左腕にオレンジの腕章をつけています。</div>
                        </div>
                    </div>
                </div>
            </div>
            <Bubble bubbleSwitch={false}></Bubble>
        </div>
    )
}