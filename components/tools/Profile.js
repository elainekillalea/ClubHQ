import { useState, useEffect } from "react";
import classes from "./Profile.module.css";
import ViewProfile from "./ViewProfile";
import EditProfile from "./EditProfile";
import Card from "../ui/Card";
import { useSession, signIn, signOut } from "next-auth/react";

function Profile() {
  const { data: session } = useSession();

  const [user, setUser] = useState([]);
  const currentUser = session?.user?.email;
  let emailURL = "/api/students?email=" + currentUser;

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = (updatedUser) => {
    setUser(updatedUser); // Update user data in parent component state
    setIsEditing(false); // Exit edit mode
  };

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
        <div>
          {isEditing ? (
            <EditProfile user={user} onUpdate={handleUpdate} />
          ) : (
            <ViewProfile user={user} onEdit={handleEdit} />
          )}
        </div>
      )}
    </div>
  );
}

export default Profile;
