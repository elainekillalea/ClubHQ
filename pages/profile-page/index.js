import Profile from "../../components/tools/Profile";
import classes from '../../styles/Home.module.css';
import { useSession } from "next-auth/react";

function ProfileP({ students }) {
  const { data: session } = useSession();
    return(
      <div className={classes.content}>
      <Profile students={students} />
    </div>
    );
}

export default ProfileP;

export async function getStaticProps(ctx) {
  const { DEV_URL } = process.env;
  const emailURL = '/api/students?email=ellakillalea00@gmail.com';
  // console.log(emailURL);

  const response = await fetch(DEV_URL + emailURL);
  // console.log(response);
  
  const data = await response.json();
  // console.log(data);

  return {
    props: {
      students: data['message'],
    },
  };
}
