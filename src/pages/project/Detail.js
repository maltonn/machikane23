import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Project.css"
import "../../css/Common.css"
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

export default function Detail() {
    const { id } = useParams();
    console.log(id)
    const [project, setProject] = useState(null);
    useEffect(() => {
        fetch(`https://app.tyuujitu-system.net/api/machikane23/website/${id}.json`).then((res) => {
            console.log(res)
            return res.json()
        }
        ).then((res) => {
            console.log(res)
            setProject(res)
        })
    }, [])
    function visitorPhoto(project){
        if(project.visitorPhoto){
            return "撮影可"
        }else{
            return "撮影禁止"
        }
    }
    function children(project){
        if(project.age){
            return <div>子ども向け</div>
        }else{
            return null
        }
    }


    return (
        <div className="main">
            <Helmet>
                <title>{project.groupName}|まちかね祭2023</title>
            </Helmet>
            <h2>詳細ページ</h2>
            {
                project ?(
                    <div style={{border:"3px solid black",margin:"100px"}}>
                        <h3>{project.groupName}</h3>
                        <p>{project.projectName}</p>
                        <img src={project.icon} alt="" />
                    </div>
                ):(
                    <p>読み込み中</p>
                )
            }

            <Link to="/" >トップページへ戻る</Link>
        </div>
    )
}