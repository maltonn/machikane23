import { Helmet } from "react-helmet";
// import {Link} from "react-router-dom";

import "../../css/Common.css"
import "../../css/Adresses.css"
import PageTitles from "../../components/PageTitles"
import president from "../../imgs/NISHIO-Shojiro.jpg"
import chairperson from "../../imgs/chairperson.jpg"
export default function Adresses() {
    return(
        <div className="main">
            <Helmet>
            <title>ご挨拶|まちかね祭2023</title>
            </Helmet>
            <div className="greeting-sky">
                <PageTitles titles="ご挨拶" kame={true}></PageTitles>
                <div className="president">
                    <div className="greeting-titles">総長挨拶</div>
                    <div className="greeting-card">
                        <img src={president} alt="president"></img>
                        <div className="sentences">
                            <p>
                                今年も「まちかね祭」の季節が巡ってきました。「まちかね祭」は、毎年、メインテーマを掲げ、大学祭中央実行委員会を中心とした学生の皆さんが、自らの手によって企画・運営する大阪大学の恒例行事です。今年で64回目を迎えます。これまで培ってきた長い歴史と、その伝統を継承してこられた学生の皆さんのご尽力に深く敬意を表します。<br></br>
                                今回のテーマは「阪燦々」です。このテーマからは、まさに太陽のように燦然と光り輝こうとする皆さんの溢れんばかりのエネルギーと、自らが希望の光となり世の中を明るく照らしていこうという力強い意気込みを感じることができ、大変頼もしく思っています。 <br></br>
                                先ほどは一言で光と表現しましたが、皆さんもよくご存知のとおり、人間の目に見える光、すなわち可視光線は、複数の異なる波長の光から構成されています。波長の長いものから順に、赤、橙、黄、緑、青、藍、紫という多様性があります。このことを踏まえて、私が皆さんにお伝えしたいことは、皆さん一人ひとりが、自分だけの光、輝きという個性を持っているということです。そのことに自信を持って、大阪大学のキャンパスを舞台に、ぜひ皆さんの輝き、持ち味を思う存分発揮してください。<br></br>
                                多彩な個性がキラキラと煌めき、それらが集まり、一つの光となって燦々とこの「まちかね祭」を照らす光景は、ご来場される方々にとっても、明るい希望となり、また温かい思い出として刻まれることでしょう。<br></br>
                                現在、世界は「ポストコロナ」へと大きく転換しています。社会は賑わいを取り戻しつつあり、一見、コロナ前に戻ったかのようにも感じられます。しかし、コロナ禍を経た現在は、過去の単なる延長線上には決してありません。人間の行動様式を含め、さまざまなことに変化が生じています。それでも、変わることのない大切なもの。それは、「まちかね祭」の中にも必ず存在すると私は確信しています。ぜひ皆さんもそれぞれの視点から、それが何かについて考えてみてください。答えは一つとは限りません。<br></br>
                                最後になりましたが、この「まちかね祭」が、皆さんが全力で輝けるステージとなることを心より祈っています。
                                </p>
                                <div className="name"><p>大阪大学　総長　　西尾　章治郎</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="greeting-ocean">
                <div className="greeting-contents">
                    <div className="chairperson">
                        <div className="greeting-titles">委員長挨拶</div>
                        <div className="greeting-card">
                            <img src={chairperson} alt="chairperson"></img>
                            <div className="sentences">
                                <p>
                                    ご来場の皆様、本日はまちかね祭にお越しいただきありがとうございます。<br></br>
                                    突然ですが、皆様にとって学祭とはどんなものでしょう。小学生から大学生までの人生を振り返り、皆様の脳裏にはどんな学祭が再生されるでしょうか。一人一人に違った学祭があったのではないかと思います。私は、それぞれ違った学祭にも共通したものがあるとおもいます。それは「一瞬を全力で楽しむこと」です。抱えるものが違っても、学祭期間の一瞬だけは目の前で起こっていることを全力で楽しむことができる。それが学祭だと私は思います。<br></br>
                                    今年のまちかね祭メインテーマは「阪燦々」です。学祭にかかわるすべての人が、笑顔で輝く学祭になるようにという思いが込められています。まちかね祭であふれんばかりの笑顔が咲き誇る光景をみることができれば望外の喜びです。さて、今年はどんなまちかね祭になるのでしょうか。どうか、この一瞬を最高の笑顔で、友達やご家族と楽しんでいただけますと幸いです。<br></br>
                                    最後になりましたが、開催にあたりお力添えいただいた皆様に深く御礼申し上げます。
                                    </p>
                                <div className="name"><p>大阪大学大学祭中央実行委員会　委員長　　林　祐人</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}