import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Project.css"
import "../../css/Detail.css"
import "../../css/Common.css"
import insta from "../../imgs/insta.svg"
import Xicon from "../../imgs/X.svg"
import link from "../../imgs/link.svg"
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
    function projectTime(project){
        if(project.projectTime!==null){
            var projectTime=project.projectTime
            projectTime=projectTime.replace('\r\n','<br/>')
            projectTime='<div>▷企画時間</div>'+projectTime
            return <div dangerouslySetInnerHTML={{ __html: projectTime }}></div>
        }else{
            return null
        }
    }

    return (
        <div className="main">
            <Helmet>
            <title>{project?project.groupName:"企画詳細"}|まちかね祭2023</title>
            </Helmet>
            {
                project ?(
                    <div key={project.id} className="detail-card"> 
                        <div className="detail-title">{project.projectName}</div>
                        <div className="detail-head">
                            <img src={project.icon} className="detail-icon" alt="icon"></img>
                            <div className="detail-head-content">
                                <div>{project.groupName}</div>
                                <div>混雑状況：{project.congestion}</div>
                            </div>
                        </div>
                        <div className="card-tags">
                            <div>{project.projectGenre}</div>
                            <div>{project.cost}</div>
                            <div>{visitorPhoto(project)}</div>
                            {children(project)}
                        </div>
                        <div className="detail-content">
                            <div className="detail-content-kind">▷企画場所：{eventPlace(project)}</div>
                            <div className="detail-content-kind">▷SNSなど<br/>
                                <div className="sns-imgs">
                                    {project.twitter1 && 
                                    <a href={'https://twitter.com/'+project.twitter1} target="_blank" rel="noreferrer"><img className="X" src={Xicon} alt="xIcon"></img></a>
                                    }
                                    {project.twitter2 && 
                                    <a href={'https://twitter.com/'+project.twitter2} target="_blank" rel="noreferrer"><img className="X" src={Xicon} alt="xIcon"></img></a>
                                    }
                                    {project.twitter3 && 
                                    <a href={'https://twitter.com/'+project.twitter3} target="_blank" rel="noreferrer"><img className="X" src={Xicon} alt="xIcon"></img></a>
                                    }
                                    {project.insta1 && 
                                    <a href={'https://www.instagram.com/'+project.insta1} target="_blank" rel="noreferrer"><img className="insta" src={insta} alt="instaIcon"></img></a>
                                    }
                                    {project.insta2 && 
                                    <a href={'https://www.instagram.com/'+project.insta2} target="_blank" rel="noreferrer"><img className="insta" src={insta} alt="instaIcon"></img></a>
                                    }
                                    {project.insta3 && 
                                    <a href={'https://www.instagram.com/'+project.insta3} target="_blank" rel="noreferrer"><img className="insta" src={insta} alt="instaIcon"></img></a>
                                    }
                                    {project.link1 && 
                                    <a href={project.link1} target="_blank" rel="noreferrer"><img className="insta" src={link} alt="link"></img></a>
                                    }
                                    {project.link2 && 
                                    <a href={project.link2} target="_blank" rel="noreferrer"><img className="insta" src={link} alt="link"></img></a>
                                    }
                                    {project.link3 && 
                                    <a href={project.link3} target="_blank" rel="noreferrer"><img className="insta" src={link} alt="link"></img></a>
                                    }                                    
                                </div>
                            </div>
                            <div className="detail-content-kind">{projectTime(project)}</div>
                            <div className="detail-content-kind">
                                <div>▷企画紹介</div>
                                <div className="pr" dangerouslySetInnerHTML={{ __html: project.webText }}></div>
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