import Calendar from "../../components/tools/Calendar";
import 'react-calendar/dist/Calendar.css';

function Cal({attendance}) {
  return (
    <Calendar attendance={attendance} />
  );
}

export default Cal;

export async function getServerSideProps(ctx) {
  const { DEV_URL } = process.env;

  const response = await fetch(DEV_URL + '/api/attendance');
  
  const data = await response.json();
  // console.log(data);

  return {
    props: {
      attendance: data['message'],
    },
  };
}

