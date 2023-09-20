// import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import "../../css/Project.css"
import "../../css/Common.css"
import { Helmet } from "react-helmet";

export default function Detail() {
    var param = useParams();
    var id = param.id
    console.log(id)
    var url = "https://app.tyuujitu-system.net/api/machikane23/website/"+{id}+".json";
    console.log(url)
    // useEffect(() => {
    //     fetch(url).then((res) => {
    //         return res.json()
    //     }
    //     )
    // }, [])
    return (
        <div className="main">
            <Helmet>
                <title>a|まちかね祭2023</title>
            </Helmet>
        </div>
    )
}