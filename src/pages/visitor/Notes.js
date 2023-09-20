import { Helmet } from "react-helmet";
import "../../css/Common.css"
import "../../css/Notes.css"
export default function Notes() {
    return(
        <div className="main">
            <Helmet>
            <title>注意事項|まちかね祭2023</title>
            </Helmet>
            <div className="note">
                <span className="notes-head">注意事項</span>
                <div className="notes-content">
                    <span className="notes-title">飲食について</span>
                    <p>食事（持ち込み含む）は、食事席に限り可能であり、他の場所での飲食は禁止とします。ただし、水分補給はしていただいて構いません。
食事席はメインストリートの周辺に設置してあります。（ここに食事席の図があったらとっても親切）
お食事の際は、以下のことをお守りください。
①食事席の椅子を動かした際は元に戻してください。
②ごみはごみ箱に分別して捨ててください。
③食事席は数が限られています。食事がお済みの方は館内のソファ・椅子（食事は出来ません）に移動するなど、ご協力をお願いします。</p>
                </div>
                <div className="notes-content">
                    <span className="notes-title">落とし物について</span>
                    <p>11月3日(金)から11月5日(日)のまちかね祭期間中の落とし物は当委員会の本部受付（ピロティ）にて管理いたします。<br></br>
大学祭期間中、構内で落とし物を発見した場合、または構内で落とし物をしてしまった場合は本部受付（ピロティ）までお越しください。<br></br>
ただし、大学祭期間後（11月6日以降）の落とし物の管理は豊中学生センター（豊中キャンパス 学生交流棟2階）に移されます。<br></br>
それ以降の拾得物、紛失物についての確認などは、豊中学生センターにて行ってください。</p>

                </div>
                <div className="notes-content">
                    <span className="notes-title">迷子について</span>
                    <p>大学祭期間中に迷子を発見した場合、本部受付（ピロティ）まで連れてくるようにお願いします。</p>

                </div>
                <div className="notes-content">
                    <span className="notes-title">ごみについて</span>
                    <p>まちかね祭期間中は通常のごみ箱が使用できません。<br></br>
ごみは「ゴミステーション」にて分別して捨ててください。<br></br>
ステージ宙付近にも臨時のゴミ箱を設置しておりますが、基本的に「ゴミステーション」にて捨てていただくようにお願いいたします。</p>
                </div>
            </div>
        </div>
    )
}