import React, { useEffect, useRef, useState } from "react";
import { TIME_LIST, HOUR_LIST } from "./index.js";
import { Link } from "react-router-dom";


const Timeline = ({ stageDate }) => {
  const projectLst = useRef([]) 
  const [displayLst, setDisplayLst] = useState([]) 

  const PageChange=()=> {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
  const STAGES = [
    { id: 'stage_kanade', name: 'ステージ奏' },
    { id: 'stage_sora', name: 'ステージ宙' },
  ];

  let curIndex=1,preIndex;
  function calculateTopPosition(eventStartTime,preEventEndTime){
    const hourHeight = 60;

    const timeDiff = eventStartTime - preEventEndTime;
    const topPosition = (timeDiff/3600000) * hourHeight;
    
    return topPosition;
  }
  function calculateHeight(eventStartTime, eventEndTime){
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
        lst.sort((a, b) => new Date('2023/'+a.stageDate+a.startAt) - new Date('2023/'+b.stageDate+b.startAt));
        lst.sort((a,b) => a.eventPlace - b.eventPlace);
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
          <li className="timeslotItem">19:00</li>
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
                {displayLst.map((event,eventIndex) => {
                    // イベントの開始日時と終了日時をもとに描画
                    const eventStartTime = new Date('2023/'+event.stageDate+'/'+event.startAt);
                    const eventEndTime = new Date('2023/'+event.stageDate+'/'+event.endAt);
                    let preIndex = curIndex;
                    let preEventEndTime = new Date('2023/'+event.stageDate+'/10:00');
                    if(preIndex > 0){
                      preEventEndTime = new Date('2023/'+event.stageDate+'/'+displayLst[preIndex].endAt);
                    }

                    if(event.stageDate==stageDate){
                      if(event.eventPlace=='奏' && stageIndex==0){
                        curIndex=eventIndex;
                          // イベントを表示
                        return (
                          <Link className="timetableLink" to={"/project-search/" +event.id} onClick={PageChange}>
                            <div
                              key={event.id}
                              className="timetableEvent"
                              style={{
                                marginTop: calculateTopPosition(eventStartTime,preEventEndTime), // 適切な位置に配置
                                height: calculateHeight(eventStartTime, eventEndTime,), // 適切な高さに設定
                              }}
                            >
                              {event.groupName}
                            </div>
                          </Link>
                        );
                      } else if(event.eventPlace=='宙'&&stageIndex==1) {
                        curIndex=eventIndex;
                          // イベントを表示
                        return (
                          <Link className="timetableLink" to={"/project-search/" +event.id} onClick={PageChange}>
                            <div
                              key={event.id}
                              className="timetableEvent"
                              style={{
                                marginTop: calculateTopPosition(eventStartTime,preEventEndTime), // 適切な位置に配置
                                height: calculateHeight(eventStartTime, eventEndTime), // 適切な高さに設定
                              }}
                            >
                              {event.groupName}
                            </div>
                          </Link>
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
