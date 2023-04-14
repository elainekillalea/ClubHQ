import { useState } from "react";
import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
import classes from "./Calendar.module.css";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import ReactTooltip from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'

function CalendarP({ attendance }) {
  const [data, setDate] = useState(null);
  const dates = attendance.map((msg) => ({ date: msg.date, value: 1 }));
  console.log(dates);

  const getTooltipDataAttrs = (value) => {
    // Temporary hack around null value.date issue
    if (!value || !value.date) {
      return null;
    }
    const tooltip = value.date ? `${value.date}` : `No attendance data for this date`;
    // Configuration for react-tooltip
    return {
      "data-tip": tooltip, 
    };
  };

  const handleClick = (value) => {
    // alert(
    //   `You clicked on ${value.date}`
    // );
    if (!value || !value.date) {
      setDate("No record");
    }
    else{
      setDate("Class attended on " + value.date);
    }
    
  };

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.item}>
          <h1>Calendar</h1>
          <CalendarHeatmap
            startDate={new Date("2023-01-01")}
            endDate={new Date("2023-12-01")}
            values={dates}
            tooltipDataAttrs={getTooltipDataAttrs}
            onClick={handleClick}
          />
        </div>
      </div>
      {data && (
        <h2> {data} </h2>
      )}
    </div>
  );
}

export default CalendarP;
