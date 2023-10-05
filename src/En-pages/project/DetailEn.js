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

export default function DetailEn() {
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
            return "Photo allowed"
        }else{
            return "No photos"
        }
    }
    function children(project){
        if(project.age){
            return <div>For Children</div>
        }else{
            return null
        }
    }
    function numberedTickets(project){
        if(project.numberedTickets){
            return "Need"
        }else{
            return "No Tickets"
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

    var eventPlaceEn={
        '共A101': 'CELAS A101',
        '共A102': 'CELAS A102',
        '共A103': 'CELAS A103',
        '共A104': 'CELAS A104',
        '共A114': 'CELAS A114',
        '共B107': 'CELAS B107',
        '共B108': 'CELAS B108',
        '共B118': 'CELAS B118',
        '共A202': 'CELAS A202',
        '共A214': 'CELAS A214',
        '共B206': 'CELAS B206',
        '共B207': 'CELAS B207',
        '共B208': 'CELAS B208',
        '共B218': 'CELAS B218',
        '共A301': 'CELAS A301',
        '共A312': 'CELAS A312',
        '共A313': 'CELAS A313',
        '共B306': 'CELAS B306',
        '共B307': 'CELAS B307',
        '共B316': 'CELAS B316',
        '共C101': 'CELAS C101',
        '共C102': 'CELAS C102',
        '共C104': 'CELAS C104',
        '共C105': 'CELAS C105',
        '共C106': 'CELAS C106',
        '共C107': 'CELAS C107',
        '共C201': 'CELAS C201',
        '共C202': 'CELAS C202',
        '共C203': 'CELAS C203',
        '共C204': 'CELAS C204',
        '共C205': 'CELAS C205',
        '共C206': 'CELAS C206',
        '共C207': 'CELAS C207',
        '共C208': 'CELAS C208',
        '共C301': 'CELAS C301',
        '共C302': 'CELAS C302',
        '共C303': 'CELAS C303',
        '共C304': 'CELAS C304',
        '共C305': 'CELAS C305',
        '共C306': 'CELAS C306',
        '共C307': 'CELAS C307',
        '共C308': 'CELAS C308',
        '共C402': 'CELAS C402',
        '共C403': 'CELAS C403',
        '共C404': 'CELAS C404',
        '共C405': 'CELAS C405',
        '共C406': 'CELAS C406',
        '共C407': 'CELAS C407',
        '共C408': 'CELAS C408',
        '文法経経第3演習室': 'Lect① Econ.Seminar3',
        '文法経経第4演習室': 'Lect① Econ.Seminar4',
        '文法経経第5演習室': 'Lect① Econ.Seminar5',
        '文法経経第6演習室': 'Lect① Econ.Seminar6',
        '文法経経第7演習室': 'Lect① Econ.Seminar7',
        '文法経文11講義室': 'Lect① Let.Lecture11',
        '文法経文12講義室': 'Lect① Let.Lecture12',
        '文法経文13講義室': 'Lect① Let.Lecture13',
        '文法経法22講義室': 'Lect① Let.Lecture22',
        '文法経法23講義室': 'Lect① Let.Lecture23',
        '文法経法31講義室': 'Lect① Let.Lecture31',
        '文法経法演習室H': 'Lect① Seminar H',
        '文法経法演習室I': 'Lect① Seminar I',
        '法経1番教室': 'Lect② Classroom1',
        '法経2番教室': 'Lect② Classroom2',
        '法経3番教室': 'Lect② Classroom3',
        '法経4番教室': 'Lect② Classroom4',
        '法経5番教室': 'Lect② Classroom5',
        '法経演習室E': 'Lect② Seminar E',
        '法経第1演習室': 'Lect② Seminar1',
        '法経第2演習室': 'Lect② Seminar2',
        '学生会館集会室１': 'Student Union Assembly-room 1',
        '学生会館集会室２': 'Student Union Assembly-room 2',
        '学生会館集会室３': 'Student Union Assembly-room 3',
        '学生会館集会室４': 'Student Union Assembly-room 4',
        '学生会館集会室５': 'Student Union Assembly-room 5',
        '学生会館集会室６': 'Student Union Assembly-room 6',
        '学生会館集会室７': 'Student Union Assembly-room 7',
        '学生会館大集会室': 'Student Union Main-Assembly-room',
        '大学会館21世紀懐徳堂': 'University Hall (Kaitoku-dou)',
        '1': 'Tent No.1',
        '2': 'Tent No.2',
        '3': 'Tent No.3',
        '4': 'Tent No.4',
        '5': 'Tent No.5',
        '6': 'Tent No.6',
        '7': 'Tent No.7',
        '8': 'Tent No.8',
        '9': 'Tent No.9',
        '10': 'Tent No.10',
        '11': 'Tent No.11',
        '12': 'Tent No.12',
        '13': 'Tent No.13',
        '14': 'Tent No.14',
        '15': 'Tent No.15',
        '16': 'Tent No.16',
        '17': 'Tent No.17',
        '18': 'Tent No.18',
        '19': 'Tent No.19',
        '20': 'Tent No.20',
        '21': 'Tent No.21',
        '22': 'Tent No.22',
        '23': 'Tent No.23',
        '24': 'Tent No.24',
        '25': 'Tent No.25',
        '26': 'Tent No.26',
        '27': 'Tent No.27',
        '28': 'Tent No.28',
        '29': 'Tent No.29',
        '30': 'Tent No.30',
        '31': 'Tent No.31',
        '32': 'Tent No.32',
        '33': 'Tent No.33',
        '34': 'Tent No.34',
        '35': 'Tent No.35',
        '36': 'Tent No.36',
        '37': 'Tent No.37',
        '38': 'Tent No.38',
        '40': 'Tent No.40',
        '41': 'Tent No.41',
        '42': 'Tent No.42',
        '43': 'Tent No.43',
        '44': 'Tent No.44',
        '45': 'Tent No.45',
        '46': 'Tent No.46',
        '47': 'Tent No.47',
        'C棟前': 'Front of CELAS build.C',
        'サイバーメディアセンター横': 'Beside Cyber-Media-Center',
        '学生会館横': 'Beside Student Union',
        '言語文化研究棟前': 'Front of Grad-School of Langage & Culture',
        '文学研究棟前': 'Front of Grad-School of Literature',
    }

    var genre={
        '物販': 'Goods sales',
        '展示': 'Exhibition',
        '演奏': 'Music',
        'ダンス': 'Dance',
        'ゲーム・体験': 'Game&Experience',
        'その他パフォーマンス': 'Other performances',
        '麺、丼、カレー': 'Rice&Noodles',
        'おかず': 'Side dish',
        '揚げ物': 'Fried',
        'スイーツ・スナック': 'Sweets&Snacks',
        '汁物': 'Soup',
        'その他': 'Other foods',
    }

    var cost={
        '無料': 'Free',
        '有料': 'Paid',
        '一部有料': 'Partly Paid',
    }

    var congestion={
        '混雑': 'HIGH',
        '空いている': 'NORMAL',
        '普通': 'LOW',
    }

    return (
        <div className="main">
            <Helmet>
            <title>{project?project.groupNameEn:"Project Detail"}|2023 Machikane Festival</title>
            </Helmet>
            {
                project ?(
                    <div key={project.id} className="detail-card"> 
                        <div className="detail-titleEn">{project.projectNameEn}</div>
                        <div className="detail-head">
                            <img src={project.icon} className="detail-icon" alt="icon"></img>
                            <div className="detail-head-content">
                                <div>{project.groupNameEn}</div>
                                <div>Crowded level：{congestion[project.congestion]}</div>
                            </div>
                        </div>
                        <div className="card-tags detail-tags">
                            <div>{genre[project.projectGenre]}</div>
                            <div>{cost[project.cost]}</div>
                            <div>{visitorPhoto(project)}</div>
                            {children(project)}
                        </div>
                        <div className="detail-content">
                            <div className="detail-content-kind">▷Place：{eventPlaceEn[project.eventPlace]}</div>
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
                                      && <div>None</div>
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