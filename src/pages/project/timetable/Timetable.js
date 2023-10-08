import { Helmet } from "react-helmet";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


import "../../../css/Timetable.css"

import { useEffect } from "react";
import WeeklyCalendar from "./WeeklyCalender.js";
import PageTitles from "../../../components/PageTitles";
import Bubble from "../../../components/Bubble";

export default function Timetable() {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    },[])

    return(
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
                        <WeeklyCalendar/>
                    </TabPanel>
                    <TabPanel>
                        <h1>Aboutです</h1>
                    </TabPanel>
                    <TabPanel>
                        <h1>Contactです</h1>
                    </TabPanel>
                </Tabs>
            </div>
            <Bubble></Bubble>
        </div>
    )
}