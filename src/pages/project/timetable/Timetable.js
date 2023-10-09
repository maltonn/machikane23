import { Helmet } from "react-helmet";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


import "../../../css/Timetable.css"

import { useEffect } from "react";
import PageTitles from "../../../components/PageTitles";
import Bubble from "../../../components/Bubble";
import Tableformat from "./Tableformat.js";

export default function Timetable() {
    const [displayLst, setDisplayLst] = useState({})
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [])

    const calculateTopPosition=(eventStartTime, preEventEndTime)=> {
        const hourHeight = 60;

        const timeDiff = eventStartTime - preEventEndTime;
        const topPosition = (timeDiff / 3600000) * hourHeight;

        return topPosition;
    }
    const calculateHeight=(eventStartTime, eventEndTime)=> {
        const hourHeight = 60;
        const timeDiff = eventEndTime - eventStartTime;

        const height = (timeDiff / 3600000) * hourHeight;

        return height;
    }
    useEffect(() => {
        fetch("https://app.tyuujitu-system.net/api/machikane23/website/pr.json").then((res) => {
            return res.json()
        }
        ).then((res) => {
            let lst = Object.values(res)


            let stageProjects = {}
            for (let project of lst) {
                if (project == null || project.section !== "stage") {
                    continue
                }

                let key = project.eventPlace + "-" + project.stageDate
                if (!stageProjects[key]) {
                    stageProjects[key] = []
                }
                stageProjects[key].push(project)
            }

            // {
            //   "奏-11/03": [{"id":3,"groupName":"ダンスサークル",....},..],
            //   ...
            // }

            for (let key of Object.keys(stageProjects)) {
                stageProjects[key].sort((a, b) => new Date('2023-' + a.stageDate.replace("/","-") + ' ' + a.startAt) - new Date('2023-' + b.stageDate.replace("/","-") + ' ' + b.startAt));

                stageProjects[key] = stageProjects[key].map((event, idx) => {
                    const eventStartTime = new Date('2023-' + event.stageDate.replace("/","-") + ' ' + event.startAt);
                    const eventEndTime = new Date('2023-' + event.stageDate.replace("/","-") + ' ' + event.endAt);

                    let preEventEndTime;
                    if (idx == 0) {
                        preEventEndTime = new Date('2023-' + event.stageDate.replace("/","-") + ' ' + "10:00");
                    } else {
                        preEventEndTime = new Date('2023-' + event.stageDate.replace("/","-") + ' ' + stageProjects[key][idx - 1].endAt);
                    }

                    return ({
                        ...event,
                        topMargin: calculateTopPosition(eventStartTime, preEventEndTime),
                        height: calculateHeight(eventStartTime, eventEndTime),
                    })
                })
            }
            console.log(stageProjects)


            setDisplayLst(stageProjects)
        })
    }, [])

    return (
        <div className="timetable">
            <div className="timetableSky">
                <Helmet>
                    <title>ステージタイムテーブル|まちかね祭2023</title>
                </Helmet>
                <PageTitles titles="ステージタイムテーブル" kame={true}></PageTitles>

                <Tabs>
                    <TabList>
                        <Tab>11月3日</Tab>
                        <Tab>11月4日</Tab>
                        <Tab>11月5日</Tab>
                    </TabList>
                    <TabPanel>
                        <Tableformat stageDate={'11/03'} displayLst={displayLst} />
                    </TabPanel>
                    <TabPanel>
                        <Tableformat stageDate={'11/04'} displayLst={displayLst} />
                    </TabPanel>
                    <TabPanel>
                        <Tableformat stageDate={'11/05'} displayLst={displayLst} />
                    </TabPanel>
                </Tabs>
            </div>
            <Bubble></Bubble>
        </div>
    )
}