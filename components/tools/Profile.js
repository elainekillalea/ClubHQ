import { Table } from "@nextui-org/react";
import StudentCard from "./StudentCard";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

function Profile({ userDetails }) {
  // const {
  //   name,
  //   birthday,
  //   address,
  //   phone,
  //   emergencyContact,
  //   dateJoined,
  //   grade,
  //   email,
  //   studentID,
  // } = userDetails;
  const { data: session } = useSession();

  const [user, setUser] = useState([]);
  // const { PROD_URL, DEV_URL } = process.env;
  // const DEV_URL = process.env.DEV_URL;
  const currentUser = session?.user?.email;
  let emailURL = "/api/students?email=" + currentUser;
  //+ session.user.email; //"orlakillalea@gmail.com";
  console.log(emailURL);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(emailURL);
      const resdata = await response.json();
      console.log("2: " + JSON.stringify(resdata));
      setUser(resdata["message"]);
      console.log("3: " + user);
    };
    fetchData();
  }, [])


  return (
    <div>
      {!session ? (
        <>
          <p>Not signed in</p>
          <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      ) : !user ? (
        <p>No student found with the provided email address</p>
      ) : (
        <div>
          <h1>Student Details</h1>
          <h2>Name: {user.name}</h2>
          <h2>Birthday: {user.birthday}</h2>
          {/* <h2>Address: {user.address.address1}, {user.address.address2}, {user.address.county}</h2> */}
          <h2>Phone: {user.phone}</h2>
          <h2>Emergency Contact: {user.emergencyContact}</h2>
          <h2>Date Joined: {user.dateJoined}</h2>
          <h2>Grade: {user.grade}</h2>
          <h2>Email: {user.email}</h2>
          <h2>Student ID: {user.studentID}</h2>
        </div>
      )}
    </div>
  );
}

export default Profile;
