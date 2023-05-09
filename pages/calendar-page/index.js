import Calendar from "../../components/tools/Calendar";
import { useSession, getSession } from "next-auth/react";
import "react-calendar/dist/Calendar.css";

function Cal() {
  function cHandler(enteredData) {}
  return (
    <div>
      <Calendar onAddStudent={cHandler} />
    </div>
  );
}

export default Cal;

