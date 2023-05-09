import { useState, useEffect } from "react";
import classes from "../tools/Profile.module.css";
import { useRouter } from "next/router";
import Card from "../ui/Card";
import ViewProfile from "../tools/ViewProfile";
import EditProfile from "../tools/EditProfile";
import { useSession, signIn, signOut } from "next-auth/react";

function Profile(msg) {
  const { data: session } = useSession();
  const [user, setUser] = useState([]);
  const currentUser = msg.email;
  let emailURL = "/api/students?email=" + currentUser;
 
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(emailURL);
      const resdata = await response.json();
      setUser(resdata["message"]);
    };
    fetchData();
  }, []);

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
          <ViewProfile user={user}/>
        </div>
      )}
    </div>
  );
}

export default Profile;
