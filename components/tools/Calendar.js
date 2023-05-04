import { useState, useEffect } from "react";
import classes from "./Calendar.module.css";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "react-tooltip/dist/react-tooltip.css";
import { useSession, signIn, signOut } from "next-auth/react";

function CalendarP() {
  const { data: session } = useSession();
  const [data, setDate] = useState(null);
  const [user, setUser] = useState([]);
  const [sID, setSID] = useState("");
  const [attendance, setAttendance] = useState([]);

  const currentUser = session?.user?.email;
  let emailURL = "/api/students?email=" + currentUser;
  let idURL = "/api/attendance?studentIDs=" + sID;

  const d = new Date();
  let year = d.getFullYear();
  let yearstart = d.getFullYear() + "-01-01";
  let yearend = d.getFullYear() + "-12-31";

  const dates = attendance.map((msg) => ({ date: msg.date, value: 1 }));

  const fetchStud = async () => {
    const response = await fetch(emailURL);
    const resStud = await response.json();
    setUser(resStud["message"]);
    setSID(JSON.stringify(user.studentID));
    console.log("ID: " + sID);
  };

  const fetchDates = async () => {
    const response = await fetch(idURL);
    const resDates = await response.json();
    setAttendance(resDates["message"]);
    console.log("Att: " + attendance);
  };

  useEffect(() => {
    fetchStud();
    fetchDates();
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
              <h1>Please sign in to view your calendar</h1>
              <CalendarHeatmap
                startDate={new Date(yearstart)}
                endDate={new Date(yearend)}
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
              <h1>{year}</h1>
              <CalendarHeatmap
                startDate={new Date(yearstart)}
                endDate={new Date(yearend)}
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
