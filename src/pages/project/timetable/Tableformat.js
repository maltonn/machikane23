import dayjs from "dayjs";
import React from "react";
import Timeline from "./Timeline.js";

const Tableformat = ({ stageDate }) => {
  const weekStartDayOffset = 0;
  const _date = dayjs();
  const _day = _date.day();
  const dayList = Array(2).fill(0).map((_, idx) => 
  {
    const day = weekStartDayOffset + idx;
    const dayFormat = dayjs(
      _date.date(_date.date() - _day + weekStartDayOffset + idx)
    );
    return { day: day, date: dayFormat.format("YYYY-MM-DD") };
  });

  return (
    <div className="timetableContainer">
      <Timeline stageDate={stageDate} />
    </div>
  );
};

export default Tableformat;
