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
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Detail() {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        fetch(`https://app.tyuujitu-system.net/api/machikane23/website/${id}.json`).then((res) => {
            console.log(res)
            return res.json()
        }
        ).then((res) => {
            console.log(res)
            setProject(res)
        })
    }, [id])
    function visitorPhoto(project){
        if(project.visitorPhoto){
            return "撮影可"
        }else{
            return "撮影禁止"
        }
    }
    function children(project){
        if(project.age){
            return <div>For Children</div>
        }else{
            return null
        }
    }
    function eventPlace(project){
        if(project.section==="mogiten"){
            return "テント" + project.eventPlace
        }else if(project.section==="stage"){
            return "ステージ" + project.eventPlace
        }else{
            return project.eventPlace
        }
    }
    function numberedTickets(project){
        if(project.numberedTickets){
            return "あり"
        }else{
            return "なし"
        }
    }
    function projectTime(project){
        if(project.projectTime!==null){
            var projectTime=project.projectTime
            projectTime=projectTime.replace('\r\n','<br/>')
            projectTime='<div>▷Time</div>'+projectTime
            return <div dangerouslySetInnerHTML={{ __html: projectTime }}></div>
        }else{
            return null
        }
    }
    const PageChange=()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <div className="main">
            <Helmet>
            <title>{project?project.groupNameEn:"企画詳細"}|まちかね祭2023</title>
            </Helmet>
            {
                project ?(
                    <div key={project.id} className="detail-card"> 
                        <div className="detail-titleEn">{project.projectNameEn}</div>
                        <div className="detail-head">
                            <img src={project.icon} className="detail-icon" alt="icon"></img>
                            <div className="detail-head-content">
                                <div>{project.groupNameEn}</div>
                                <div>混雑状況：{project.congestion}</div>
                            </div>
                        </div>
                        <div className="card-tags detail-tags">
                            <div>{project.projectGenre}</div>
                            <div>{project.cost}</div>
                            <div>{visitorPhoto(project)}</div>
                            {children(project)}
                        </div>
                        <div className="detail-content">
                            <div className="detail-content-kind">▷Place：{eventPlace(project)}</div>
                            <div className="detail-content-kind">▷Ticket：{numberedTickets(project)}</div>
                            <div className="detail-content-kind">▷SNS<br/>
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
                                    {(!project.twitter1 && !project.twitter2 && !project.twitter3 &&
                                      !project.insta1 && !project.insta2 && !project.insta3 &&
                                      !project.link1 && !project.link2 && !project.link3)
                                      && <div>なし</div>
                                      }                                 
                                </div>
                            </div>
                            <div className="detail-content-kind">{projectTime(project)}</div>
                            <div className="detail-content-kind">
                                <div>▷Comments</div>
                                <div className="pr" dangerouslySetInnerHTML={{ __html: project.webTextEn }}></div>
                            </div>
                            <div className="adPhoto-content">
                            <Swiper 
                                pagination={true}
                                navigation={true}
                                modules={[Pagination, Navigation]} 
                                className="mySwiper"
                            >
                            {project.adPhoto.map((value) => 
                                <SwiperSlide><img className="adPhoto" src={value} alt="adPhoto"></img></SwiperSlide>
                            )}
                            </Swiper>
                            </div>
                        </div>
                    </div>
                ):(
                    <p>Loading</p>
                )
            }
            <div><Link className="toTheTop" to="/project-search" onClick={PageChange}>Back to search</Link></div>
            <div><Link className="toTheTop" to="/" onClick={PageChange}>Back to TOP</Link></div>
        </div>
    )
}