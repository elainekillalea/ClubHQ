import { useState, useEffect } from "react";
import classes from "../tools/Profile.module.css";
import { useRouter } from "next/router";
import Card from "../ui/Card";
import { useSession, signIn, signOut } from "next-auth/react";

function Profile(m) {
    console.log("MSG: " + m.email)
  const { data: session } = useSession();
  const [user, setUser] = useState([]);
  const currentUser = m.email;
  let emailURL = "/api/students?email=" + currentUser;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(emailURL);
      const resdata = await response.json();
      setUser(resdata["message"]);
    };
    fetchData();
  }, []);
  console.log("Profile: " + user);
  
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
        <>
          <h2 className={classes.title}>Member Details</h2>
          <table className={classes.table}>
            <tr>
              <td>Name:</td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td>Birthday:</td>
              <td>{user.birthday}</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>
                {user.address?.address1}, {user.address?.address2},{" "}
                {user.address?.county}
              </td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>{user.phone}</td>
            </tr>
            <tr>
              <td>Emergency Contact:</td>
              <td>{user.emergencyContact}</td>
            </tr>
            <tr>
              <td>Date Joined:</td>
              <td>{user.dateJoined}</td>
            </tr>
            <tr>
              <td>Grade:</td>
              <td>{user.grade}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td>Student ID:</td>
              <td>{user.studentID}</td>
            </tr>
          </table>
          <div>
            <button >Edit</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;
