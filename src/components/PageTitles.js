import "../css/PageTitles.css"
import machikame1 from "../imgs/animal/machikame1.png"
import { useEffect } from "react"
import { useGlobalContext } from "../contexts/globalContext";

export default function PageTitles({titles,kame}){
    const { lang } = useGlobalContext()
    useEffect(() => {
        const $ = el => document.querySelector(el);
        var titleLength = document.getElementById('pageTitles').textContent.length;
        if(lang==='en'){
            titleLength=titleLength/2.1;
        }
        $(':root').style.setProperty('--base-pageLength', `${titleLength}rem`);
        if(kame!==true){
            document.getElementById('machikameNone').style.display='none';
        }
      }, [titles,kame])
    return (
        <div className="top-component">
            <div className="page-titles" id="pageTitles">{titles}</div>
            <div className="machikame-default" id="machikameNone">
                <img src={machikame1} alt="まちかめ1"></img>
            </div>
        </div>
    )
}