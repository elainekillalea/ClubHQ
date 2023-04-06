import { useState } from "react";
import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
import classes from "./Calendar.module.css";
import Card from "../ui/Card";

function CalendarP({ attendance }) {
  const [date, setDate] = useState(new Date());
  console.log("Att cal: " + attendance);

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.item}>
          <h1>Attendance</h1>
          <Card>
            <div className={classes.atttxt}>
              Classes:{" "}
              {attendance.map((att, i) => (
                <div key={i}>
                  <h1>{att.date}</h1>
                  {att.studentIDs.map((student, j) => (
                    <div key={j}>
                      <p>Students: {student}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Card>
        </div>
        <div className={classes.item}>
          <h1>React Calendar</h1>
          <div className="calendar-container">
            <Calendar onChange={setDate} value={date} />
          </div>
          <p className="text-center">
            <span className="bold">Selected Date: </span> {date.toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CalendarP;
