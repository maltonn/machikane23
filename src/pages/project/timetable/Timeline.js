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
  function calculateTopPosition(){

  }
  function calculateHeight(){

  }
  useEffect(()=>{
    fetch("https://app.tyuujitu-system.net/api/machikane23/website/pr.json").then((res) => {
      return res.json()
    }
    ).then((res) => {
        let lst = Object.values(res)
        lst = lst.filter((project) => project != null)
        lst = lst.filter((project) => project.section === 'stage')
        lst.sort((a, b) => a.eventPlace - b.eventPlace);
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
                {displayLst.map((event) => {
                  console.log(event.groupName)
                  if (event.eventPlace === stage.name) {
                    // イベントの開始日時と終了日時をもとに描画
                    const eventStartTime = new Date(event.startAt);
                    const eventEndTime = new Date(event.endAt);
                      // イベントを表示
                    return (
                      <div
                        key={event.id}
                        className="event"
                        style={{
                          top: calculateTopPosition(eventStartTime), // 適切な位置に配置
                          height: calculateHeight(eventStartTime, eventEndTime), // 適切な高さに設定
                        }}
                      >
                        {event.groupName}
                      </div>
                    );
                  }
                  return null;
                })}
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
