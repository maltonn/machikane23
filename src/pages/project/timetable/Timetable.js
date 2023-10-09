import { Helmet } from "react-helmet";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


import "../../../css/Timetable.css"

import { useEffect } from "react";
import PageTitles from "../../../components/PageTitles";
import Bubble from "../../../components/Bubble";
import Tableformat from "./Tableformat.js";

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
                        <Tableformat stageDate={'11/03'}/>
                    </TabPanel>
                    <TabPanel>
                        <Tableformat stageDate={'11/04'}/>
                    </TabPanel>
                    <TabPanel>
                        <Tableformat stageDate={'11/05'}/>
                    </TabPanel>
                </Tabs>
            </div>
            <Bubble></Bubble>
        </div>
    )
}