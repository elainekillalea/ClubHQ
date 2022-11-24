import "@progress/kendo-theme-default/dist/all.css";
import RoomScheduler from "../../components/calendar/Scheduler";

function RS() {
  return (
    <div className="App">
      <hr className="k-my-8" />
      <RoomScheduler />
    </div>
  );
}

export default RS;
