import React, { useEffect, useRef, useState } from "react";
import { TIME_LIST, HOUR_LIST } from "./indexEn.js";
import { Link } from "react-router-dom";


const Timeline = ({ stageDate,displayLst }) => {
  

  const PageChange = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  const STAGES = [
    { id: 'stage_kanade', name: 'ステージ奏', shortName: '奏' },
    { id: 'stage_sora', name: 'ステージ宙', shortName: '宙' },
  ];



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
      <div className="timetableContainer">
        <div className="timetableWrapper">
          <div>
            {TIME_LIST.map((timeItem) => (
              <div key={timeItem.id}>
                <div className="horizontalHeight" />
              </div>
            ))}
          </div>

          <div className="eventContainer">
            {STAGES.map((stage, stageIndex) => (
              <div key={stage.id} className="calendarColumn">
                <div className="stageName">{stage.name}</div>
                {displayLst[stage.shortName + "-" + stageDate]?.map((event, eventIndex) => {
                  return (
                    <Link className="timetableLink" to={"/project-search/" + event.id} onClick={PageChange} key={event.id}>
                      <div
                        className="timetableEvent"
                        style={{
                          marginTop: event.topMargin,
                          height: event.height,
                        }}
                      >{event.groupName}　{window.innerWidth > 490 && `${event.startAt}～${event.endAt}`}
                      
                      </div>
                    </Link>
                  );
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
