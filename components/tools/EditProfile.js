import { useState } from "react";
import classes from "./Profile.module.css";

function EditProfile({ user, onUpdate }) {
  const [name, setName] = useState(user.name);
  const [birthday, setBirthday] = useState(user.birthday);
  const [address1, setAddress1] = useState(user.address?.address1 || "");
  const [address2, setAddress2] = useState(user.address?.address2 || "");
  const [county, setCounty] = useState(user.address?.county || "");
  const [phone, setPhone] = useState(user.phone);
  const [emergencyContact, setEmergencyContact] = useState(
    user.emergencyContact
  );
  const [grade, setGrade] = useState(user.grade);
  const [email, setEmail] = useState(user.email);
  const [studentID, setStudentID] = useState(user.studentID);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedUser = {
      ...user,
      name,
      birthday,
      address: {
        address1,
        address2,
        county,
      },
      phone,
      emergencyContact,
      grade,
      email,
      studentID,
    };
    const response = await fetch("/api/students", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });
    const data = await response.json();
    onUpdate(data); // Pass updated data back to parent component
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Member Details</h2>
      <div className={classes.formGroup}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className={classes.formGroup}>
        <label htmlFor="birthday">Birthday:</label>
        <input
          type="date"
          id="birthday"
          value={birthday}
          onChange={(event) => setBirthday(event.target.value)}
        />
      </div>
      <div className={classes.formGroup}>
        <label htmlFor="address1">Address 1:</label>
        <input
          type="text"
          id="address1"
          value={address1}
          onChange={(event) => setAddress1(event.target.value)}
        />
      </div>
      <div className={classes.formGroup}>
        <label htmlFor="address2">Address 2:</label>
        <input
          type="text"
          id="address2"
          value={address2}
          onChange={(event) => setAddress2(event.target.value)}
        />
      </div>
      <div className={classes.formGroup}>
        <label htmlFor="county">County:</label>
        <input
          type="text"
          id="county"
          value={county}
          onChange={(event) => setCounty(event.target.value)}
        />
      </div>
      <div className={classes.formGroup}>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </div>
      <div className={classes.formGroup}>
        <label htmlFor="emergencyContact">Emergency Contact:</label>
        <input
          type="text"
          id="emergencyContact"
          value={emergencyContact}
          onChange={(event) => setEmergencyContact(event.target.value)}
        />
      </div>
      <div className={classes.formGroup}>
        <label htmlFor="grade">Grade:</label>
        <input
          type="text"
          id="grade"
          value={grade}
          onChange={(event) => setGrade(event.target.value)}
        />
      </div>
      <div className={classes.formGroup}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className={classes.formGroup}>
        <label htmlFor="studentID">Student ID:</label>
        <input
          type="text"
          id="studentID"
          value={studentID}
          onChange={(event) => setStudentID(event.target.value)}
        />
      </div>
      <div className={classes.formGroup}>
        <button type="submit">Save</button>
      </div>
    </form>
  );
}

export default EditProfile;
