import { useState, useEffect } from "react";
import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
import classes from "./Calendar.module.css";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import ReactTooltip from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useSession, signIn, signOut } from "next-auth/react";

function CalendarP() {
  const { data: session } = useSession();
  const [data, setDate] = useState(null);
  // console.log(dates);

  const [user, setUser] = useState([]);
  const [sID, setSID] = useState("");
  const [attendance, setAttendance] = useState([]);
  const currentUser = session?.user?.email;
  let emailURL = "/api/attendance?email=" + currentUser; //+ "ellakillalea00@gmail.com";
  console.log(emailURL);

  const dates = attendance.map((msg) => ({ date: msg.date, value: 1 }));

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(emailURL);
      const resdata = await response.json();
      setUser(resdata["message"]);
      setSID(user.studentID);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(emailURL);
      const resdata = await response.json();
      console.log("2: " + JSON.stringify(resdata));
      setAttendance(resdata["message"]);
      console.log("3: " + attendance);
    };
    fetchData();
  }, []);

  const handleClick = (value) => {
    if (!value || !value.date) {
      setDate("No record");
    } else {
      setDate("Class attended on " + value.date);
    }
  };

  return (
    <div>
      {!session ? (
        <>
          <div className={classes.container}>
            <div className={classes.item}>
              <h1>2023</h1>
              <CalendarHeatmap
                startDate={new Date("2023-01-01")}
                endDate={new Date("2023-12-01")}
                values={[]}
                onClick={handleClick}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={classes.container}>
            <div className={classes.item}>
              <h1>2023</h1>
              <CalendarHeatmap
                startDate={new Date("2023-01-01")}
                endDate={new Date("2023-12-01")}
                values={dates}
                onClick={handleClick}
              />
            </div>
          </div>
          {data && <h2> {data} </h2>}
        </>
      )}
    </div>
  );
}

export default CalendarP;
