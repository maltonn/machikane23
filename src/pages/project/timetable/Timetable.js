import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";

import "../../../css/Timetable.css"

import { useEffect } from "react";
import WeeklyCalendar from "./WeeklyCalender.js";
import PageTitles from "../../../components/PageTitles";

export default function Timetable() {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    },[])
    return(
        <div className="timetable">
            <Helmet>
            <title>ステージタイムテーブル|まちかね祭2023</title>
            </Helmet>
            <PageTitles titles="ステージタイムテーブル"></PageTitles>
            <WeeklyCalendar/>
        </div>
    )
}