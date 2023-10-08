import React, { useEffect, useRef, useState } from "react";
import { TIME_LIST, HOUR_LIST } from "./index.js";


const Timeline = ({ stageDate }) => {
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
  function calculateTopPosition(eventStartTime, stageDate){
    const hourHeight = 60;
    const tableStart = new Date('2023/'+stageDate+'10:00')

    const timeDiff = eventStartTime - tableStart;
    const topPosition = (timeDiff/3600000) * hourHeight;
    
    return topPosition;
  }
  function calculateHeight(eventStartTime, eventEndTime,stageDate){
    const hourHeight = 60;
    const timeDiff = eventEndTime - eventStartTime;

    const height = (timeDiff/3600000) * hourHeight;

    return height;
  }
  useEffect(()=>{
    fetch("https://app.tyuujitu-system.net/api/machikane23/website/pr.json").then((res) => {
      return res.json()
    }
    ).then((res) => {
        let lst = Object.values(res)
        lst = lst.filter((project) => project != null)
        lst = lst.filter((project) => project.section === 'stage')
        lst.sort((a, b) => new Date('2023/'+a.startAt) - new Date('2023/'+b.startAt));
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
            {STAGES.map((stage,stageIndex) => (
              <div key={stage.id} className="calendarColumn">
                <div className="stageName">{stage.name}</div>
                {/* ステージに対応するイベントを表示するロジックを追加 */}
                {displayLst.map((event) => {
                    // イベントの開始日時と終了日時をもとに描画
                    const eventStartTime = new Date('2023/'+event.stageDate+'/'+event.startAt);
                    const eventEndTime = new Date('2023/'+event.stageDate+'/'+event.endAt);
                    if(event.stageDate==stageDate){
                      if(event.eventPlace=='奏' && stageIndex==0){
                          // イベントを表示
                        return (
                          <div
                            key={event.id}
                            className="timetableEvent"
                            style={{
                              top: calculateTopPosition(eventStartTime,stageDate), // 適切な位置に配置
                              height: calculateHeight(eventStartTime, eventEndTime,stageDate), // 適切な高さに設定
                            }}
                          >
                            {event.groupName}
                          </div>
                        );
                      } else if(event.eventPlace=='宙'&&stageIndex==1) {
                          // イベントを表示
                        return (
                          <div
                            key={event.id}
                            className="timetableEvent"
                            style={{
                              position : "relative",
                              top: calculateTopPosition(eventStartTime), // 適切な位置に配置
                              height: calculateHeight(eventStartTime, eventEndTime), // 適切な高さに設定
                            }}
                          >
                            {event.groupName}
                          </div>
                        );
                      } 
                    }
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
