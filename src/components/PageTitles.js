import "../css/PageTitles.css"
import machikame1 from "../imgs/animal/machikame1.png"
import { useEffect } from "react"

export default function PageTitles({titles}){
    useEffect(() => {
        const $ = el => document.querySelector(el);
        var titleLength = document.getElementById('pageTitles').textContent.length;
        $(':root').style.setProperty('--base-pageLength', `${titleLength}rem`);    
      }, [])
    return (
        <div className="top-component">
            <div className="page-titles" id="pageTitles">{titles}</div>
            <div className="machikame-default">
                <img src={machikame1} alt="まちかめ1"></img>
            </div>
        </div>
    )
}