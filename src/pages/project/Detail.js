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
    function eventPlace(project){
        if(project.section==="mogiten"){
            return "テント" + project.eventPlace
        }else if(project.section==="stage"){
            return "ステージ" + project.eventPlace
        }else{
            return project.eventPlace
        }
    }
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
            <title>{project?project.groupName:"企画詳細"}|まちかね祭2023</title>
            </Helmet>
            <h2>詳細ページ</h2>
            {
                project ?(
                    <div key={project.id} className="project-container">
                    <img src={project.icon} className="project-card-icon" alt="icon"></img>
                    <div className="card-content">
                        <div className="projectName">{project.projectName}</div>
                        <div>{project.groupName}</div>
                        <div>▷{eventPlace(project)}</div>
                        <div className="card-tags">
                            <div>{project.projectGenre}</div>
                            <div>{project.cost}</div>
                            <div>{visitorPhoto(project)}</div>
                            {children(project)}
                        </div>
                    </div>
                </div>
                ):(
                    <p>読み込み中</p>
                )
            }
            <Link className="toTheTop" to="/" >トップページへ戻る</Link>
        </div>
    )
}