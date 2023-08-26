import { useEffect, useState } from "react";
import "../../css/Project.css"
import { Helmet } from "react-helmet";
export default function Project() {
    const [inputValue, setInputValue] = useState("")

    const [nowBuildingFilterCheck, setNowBuildingFilterCheck] = useState(false)
    const [forChildFilterCheck, setForChildFilterCheck] = useState(false)
    const [avoidCrowdFilterCheck, setAvoidCrowdFilterCheck] = useState(false)

    const [projectLst, setProjectLst] = useState([])
    const [filterBoolLst, setFilterBoolLst] = useState([])
    useEffect(() => {
        fetch("https://app.tyuujitu-system.net/api/machikane23/website/pr.json").then((res) => {
            return res.json()
        }
        ).then((res) => {
            console.log(res)
            const lst=Array.from(res)
            setProjectLst(lst)
            setFilterBoolLst(lst.map(() => true))
        })
    }, [])


    const onChangeInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const onPickupKeywordClick = (keyword) => {
        setInputValue(keyword)
    }

    return (
        <div style={{ marginTop: "100px" }}>
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
            </div>

            {/* おすすめキーワード */}
            <div className="pickup-keyword-container">
                {
                    ["ダンス", "ライブ", "模擬店"].map((keyword) => {
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
                        <input type="checkbox" id="checkbox1" checked={nowBuildingFilterCheck} onChange={() => setNowBuildingFilterCheck(prevState => !prevState)} />
                        <span>今いる建物内で検索</span>
                    </label>
                </div>
                <div>
                    <label htmlFor="checkbox2">
                        <input type="checkbox" id="checkbox2" checked={forChildFilterCheck} onChange={() => setForChildFilterCheck(prev => !prev)} />
                        <span>子供向け</span>
                    </label>
                </div>
                <div>
                    <label htmlFor="checkbox3">
                        <input type="checkbox" id="checkbox3" checked={avoidCrowdFilterCheck} onChange={() => setAvoidCrowdFilterCheck(prev => !prev)} />
                        <span>混雑している企画を除く</span>
                    </label>
                </div>

            </div>

            <button>検索</button>
            <div>


            </div>




            <a href="./">トップページへ戻る</a>
        </div>
    )
}