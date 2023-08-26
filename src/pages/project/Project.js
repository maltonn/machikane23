import { useState } from "react";
import "../../css/Project.css"
import "../../css/Common.css"
import { Helmet } from "react-helmet";
export default function Project() {

    const pickUpKeyword = ["ダンス", "ライブ", ""]
    const [inputValue, setInputValue] = useState("")

    const [nowBuildingFilterCheck, setNowBuildingFilterCheck] = useState(false)
    const [forChildFilterCheck, setForChildFilterCheck] = useState(false)
    const [avoidCrowdFilterCheck, setAvoidCrowdFilterCheck] = useState(false)

    const onChangeInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const onPickupKeywordClick = (keyword) => {
        setInputValue(keyword)
    }

    return (
        <div className="main">
            <Helmet>
                <title>企画検索|まちかね祭2023</title>
            </Helmet>
            <h2>ここにproject-searchページ</h2>

            <div>
                <input
                    placeholder="フリーワード"
                    value={inputValue}
                    onChange={onChangeInputValue}
                ></input>
                <button>検索</button>
            </div>

            {/* おすすめキーワード */}
            <div className="pickup-keyword-container">
                {
                    pickUpKeyword.map((keyword) => {
                        return (
                            <div
                                onClick={() => onPickupKeywordClick(keyword)}
                                key={keyword}
                                className="pickup-keyword"
                            >
                                {keyword}
                            </div>
                        )
                    })
                }
            </div>

            {/* チェックボックス */}
            <div>
                <div>
                    <label htmlFor="checkbox1">
                        チェック：
                    </label>
                    {/* <input
                        type="checkbox"
                        id="checkbox1"
                        checked={isChecked}
                        onChange={() => setIsChecked(prevState => !prevState)}
                    /> */}
                    {/* <input type="checkbox" id="checkbox2" checked={forChildFilterCheck} onChange={setForChildFilterCheck(prev => !prev)} />
                    <input type="checkbox" id="checkbox3" checked={avoidCrowdFilterCheck} onChange={setAvoidCrowdFilterCheck(prev => !prev)} /> */}
                </div>
            </div>

            <div>


            </div>




            <a href="./">トップページへ戻る</a>
        </div>
    )
}