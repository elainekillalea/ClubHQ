import "@progress/kendo-theme-default/dist/all.css";
import RoomScheduler from "../../components/calendar/Scheduler";
import Calendar from "../../components/calendar/Calendar";
import 'react-calendar/dist/Calendar.css';

function RS() {
  return (
    <div className="App">
      <hr className="k-my-8" />
      <Calendar />
      {/* <RoomScheduler /> */}
    </div>
  );
}

export default RS;



