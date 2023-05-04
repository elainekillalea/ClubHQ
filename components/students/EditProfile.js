import { useState, useEffect } from "react";
import classes from "./Profile.module.css";
import Card from "../ui/Card";
import { useSession, signIn, signOut } from "next-auth/react";

function Profile() {
  const { data: session } = useSession();

  const [user, setUser] = useState([]);
  const [editMode, setEditMode] = useState(false);

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
  console.log("Profile: " + user);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSave = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/students", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const resdata = await response.json();
    setUser(resdata["message"]);
    setEditMode(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div>
      <h2 className={classes.title}>Edit Member Details</h2>
      <form onSubmit={handleSave}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <label>Birthday</label>
        <input
          type="text"
          name="birthday"
          value={user.birthday}
          onChange={handleChange}
        />
        <label>Address</label>
        <input
          type="text"
          name="address.address1"
          value={user.address?.address1}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address.address2"
          value={user.address?.address2}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address.county"
          value={user.address?.county}
          onChange={handleChange}
        />
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={user.phone}
          onChange={handleChange}
        />
        <label>Emergency Contact</label>
        <input
          type="text"
          name="emergencyContact"
          value={user.emergencyContact}
          onChange={handleChange}
        />
        <label>Grade</label>
        <input
          type="text"
          id="grade"
          name="grade"
          defaultValue={user.email}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          defaultValue={user.email}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Emergency Contact</label>
        <input
          type="text"
          id="emergencyContact"
          name="emergencyContact"
          defaultValue={user.emergencyContact}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Date Joined</label>
        <input
          type="date"
          id="dateJoined"
          name="dateJoined"
          defaultValue={user.dateJoined}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue={user.email}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Student ID</label>
        <input
          type="text"
          id="studentID"
          name="studentID"
          defaultValue={user.studentID}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Save</button>
        <button type="button" onClick={() => setIsEditing(false)}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default Profile;
