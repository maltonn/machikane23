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
    const buttonClick1=()=>{
        console.log("first")
        document.getElementById('first').checked=true;
        document.getElementById('second').checked=false;
        document.getElementById('third').checked=false;        
    }
    const buttonClick2=()=>{
        console.log("second")
        document.getElementById('first').checked=false;
        document.getElementById('second').checked=true;
        document.getElementById('third').checked=false;
    }
    const buttonClick3=()=>{
        console.log("third")
        document.getElementById('third').checked=true;
        document.getElementById('second').checked=false;
        document.getElementById('first').checked=false;
    }

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