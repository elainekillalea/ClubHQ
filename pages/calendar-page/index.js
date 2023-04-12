import Calendar from "../../components/tools/Calendar";
import 'react-calendar/dist/Calendar.css';

function Cal({attendance}) {
  return (
    <Calendar attendance={attendance} />
  );
}

export default Cal;

export async function getServerSideProps(ctx) {
  const { PROD_URL } = process.env;

  const response = await fetch(PROD_URL + '/api/attendance');
  
  const data = await response.json();
  // console.log(data);

  return {
    props: {
      attendance: data['message'],
    },
  };
}

