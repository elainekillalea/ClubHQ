import { useState, useEffect } from "react";
import classes from "./Profile.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

function Profile() {
  const { data: session } = useSession();

  const [user, setUser] = useState([]);
  const currentUser = session?.user?.email;
  let emailURL = "/api/students?email=" + currentUser;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(emailURL);
      const resdata = await response.json();
      setUser(resdata["message"]);
    };
    fetchData();
  }, []);
console.log(user)
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
        <div className={classes.title}>
          <h1>Student Details</h1>
          <div className={classes.flexContainer}>
            <div className={classes.titleColumn}>
              <h2>Name:</h2>
              <h2>Birthday:</h2>
              <h2>Address:</h2>
              <h2>Phone:</h2>
              <h2>Emergency Contact:</h2>
              <h2>Date Joined:</h2>
              <h2>Grade:</h2>
              <h2>Email:</h2>
              <h2>Student ID:</h2>
            </div>
            <div className={classes.contentColumn}>
              <h2>{user.name}</h2>
              <h2>{user.birthday}</h2>
              <h2>
                {user.address?.address1}, {user.address?.address2},
                {user.address?.address3}
              </h2>
              <h2>{user.phone}</h2>
              <h2>{user.emergencyContact}</h2>
              <h2>{user.dateJoined}</h2>
              <h2>{user.grade}</h2>
              <h2>{user.email}</h2>
              <h2>{user.studentID}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
