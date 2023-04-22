import Calendar from "../../components/tools/Calendar";
import { useSession, getSession } from "next-auth/react";
import "react-calendar/dist/Calendar.css";

function Cal() {
  function addStudentHandler(enteredStudentData) {}
  return (
    <div>
      <Calendar onAddStudent={addStudentHandler} />
    </div>
  );
}

export default Cal;

// export async function getServerSideProps(ctx) {
//   const { PROD_URL, DEV_URL } = process.env;
//   const sIDURL = DEV_URL + "/api/attendance?studentIDs=1";

//   const response = await fetch(sIDURL);
//   const data = await response.json();
//   console.log(data);

//   return {
//     props: {
//       attendance: data['message'],
//     },
//   };
// }
