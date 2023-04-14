import Profile from "../../components/tools/Profile";
import classes from "../../styles/Home.module.css";
import { useSession } from "next-auth/react";

function ProfileP({ students }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Login to view your profile</p>;
  }
  
  return (
    <div className={classes.content}>
      <Profile students={students} />
    </div>
  );
}

export default ProfileP;

export async function getServerSideProps(ctx) {
  const { PROD_URL, DEV_URL } = process.env;
  const emailURL = "/api/students?email=ellakillalea00@gmail.com";

  const response = await fetch(PROD_URL + emailURL);
  const data = await response.json();
  console.log(data);

  return {
    props: {
      students: data["message"],
    },
  };
}
