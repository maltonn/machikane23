import React, { useEffect, useRef, useState } from "react";
import { TIME_LIST, HOUR_LIST } from "./index.js";


const Timeline = ({ dayList }) => {
  const projectLst = useRef([]) 
  const [displayLst, setDisplayLst] = useState([]) 

  const EmptyCell = (date) => {
    return (
      <>
        {HOUR_LIST.map((hourList, index) => {
          return (
            <div
              key={hourList.hour}
              onClick={() => {
                console.log(date, `${hourList.hour}時`);
              }}
              className="empty"
            />
          );
        })}
      </>
    );
  };
  const STAGES = [
    { id: 'stage_kanade', name: 'ステージ奏' },
    { id: 'stage_sora', name: 'ステージ宙' },
  ];
  useEffect(()=>{
    fetch("https://app.tyuujitu-system.net/api/machikane23/website/pr.json").then((res) => {
      return res.json()
    }
    ).then((res) => {
        let lst = Object.values(res)
        lst = lst.filter((project) => project != null)
        lst = lst.filter((project) => project.section === 'stage')
        projectLst.current = lst
        setDisplayLst(lst)
    })
  })

  return (
    <div className="timeslotsContainer">
      <div className="timeslotBox">
        <ul className="timeslotList">
          {TIME_LIST.map((timeItem) => {
            const splitedHour = Number(timeItem.time.split(":")[0]);
            const time = `${splitedHour}:${timeItem.time.split(":")[1]}`;
            return (
              <li key={timeItem.id} className="timeslotItem">
                {time}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="calendarContainer">
        <div className="calendarWrapper">
          <div>
            {TIME_LIST.map((timeItem) => (
              <div key={timeItem.id}>
                <div className="horizontalHeight" />
              </div>
            ))}
          </div>
        
          <div className="eventContainer">
            {STAGES.map((stage) => (
              <div key={stage.id} className="calendarColumn">
                <div className="stageName">{stage.name}</div>
                {/* ステージに対応するイベントを表示するロジックを追加 */}
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Timeline;
