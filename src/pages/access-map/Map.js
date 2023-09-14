import { Helmet } from "react-helmet";
import "../../css/Common.css"
import machikame1 from "../../imgs/animal/machikame1.png"
import map from "../../imgs/map/全体マップ.png"
import "../../css/Access.css"
export default function Map() {
    return(
        <div className="main">
            <Helmet>
            <title>マップ|まちかね祭2023</title>
            </Helmet>
            <div className="sky">
                <div className="top">
                    <div className="machikame"> 
                    <img src={machikame1} alt="まちかめ1"></img>
                    </div>
                        <div className="title">
                        <h1>全体マップ</h1>
                        </div>
                </div>
                <div className="map"> 
                            <img src={map} alt="全体マップ"></img>
                        </div>
            </div>
        </div>
    )
}