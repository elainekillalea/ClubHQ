import Calendar from "../../components/tools/Calendar";
import { useSession, getSession } from "next-auth/react";
import 'react-calendar/dist/Calendar.css';

function Cal({attendance}) {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    return <p>Login to view your calendar</p>
  }

  return (
    <Calendar attendance={attendance} />
  );
}

export default Cal;

export async function getServerSideProps(ctx) {
  const { PROD_URL, DEV_URL } = process.env;
  const sIDURL = "/api/attendance?studentIDs=1";

  const response = await fetch(PROD_URL + sIDURL);
  const data = await response.json();
  console.log(data);

  return {
    props: {
      attendance: data['message'],
    },
  };
}

