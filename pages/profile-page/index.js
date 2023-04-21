import Profile from "../../components/tools/Profile";
import classes from "../../styles/Home.module.css";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import useSWR from "swr";

function ProfileP() {
  const { data: session, status } = useSession();

  function addStudentHandler(enteredStudentData) {

  }
  return (
    <div className={classes.content}>
      <Profile onAddStudent={addStudentHandler}/>
    </div>
  );
}

export default ProfileP;

// export async function getStaticProps(ctx) {
//   const { PROD_URL, DEV_URL } = process.env;
//   const emailURL = "/api/students?email=ellakillalea00@gmail.com";

//   const response = await fetch(DEV_URL + emailURL);
//   const data = await response.json();
//   console.log(data);

//   return {
//     props: {
//       userDetails: data["message"],
//     },
//   };
// }
