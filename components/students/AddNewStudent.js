import { useRef } from "react";
import { useState } from "react";

import styles from "./AddNewStudent.module.css";

function AddNewStudent() {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState([]);
  const [phone, setPhone] = useState("");
  const [eContact, setEContact] = useState("");
  const [dJoined, setDJoined] = useState("");
  const [grade, setGrade] = useState("");
  const [email, setEmail] = useState("");
  const [sID, setSID] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (!name || !eContact || !grade || !email) return setError("Some fields are required");

    let student = {
      name,
      birthday,
      address,
      phone,
      eContact,
      dJoined,
      grade,
      email,
      sID,
    };

    let response = await fetch("/api/students", {
      method: "POST",
      body: JSON.stringify(student),
    });

    let data = await response.json();

    if (data.success) {
      setName("");
      setBirthday("");
      setAddress("");
      setPhone("");
      setEContact("");
      setDJoined("");
      setGrade("");
      setEmail("");
      setSID("");
      return setMessage(data.message);
    } else {
      return setError(data.message);
    }
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      {error ? (
        <div className={styles.formItem}>
          <h3 className={styles.error}>{error}</h3>
        </div>
      ) : null}
      {message ? (
        <div className={styles.formItem}>
          <h3 className={styles.message}>{message}</h3>
        </div>
      ) : null}

      <div className={styles.control}>
        <label>Name*</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className={styles.control}>
        <label>Birthday</label>
        <input
          type="date"
          name="birthday"
          onChange={(e) => setBirthday(e.target.value)}
          value={birthday}
        />
      </div>      
      <div className={styles.control}>
        <label>Address line 1</label>
        <input
          type="text"
          name="address1"
          onChange={(e) => setAddress1(e.target.value)}
          value={address1}
        />
      </div>
      <div className={styles.control}>
        <label>Address line 2</label>
        <input
          type="text"
          name="address2"
          onChange={(e) => setAddress2(e.target.value)}
          value={address2}
        />
      </div> 
      <div className={styles.control}>
        <label>Address County</label>
        <input
          type="text"
          name="address3"
          onChange={(e) => setAddress3(e.target.value)}
          value={address3}
        />
      </div>       
      <div className={styles.control}>
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
      </div>      
      <div className={styles.control}>
        <label>Emergency Contact*</label>
        <input
          type="text"
          name="eContact"
          onChange={(e) => setEContact(e.target.value)}
          value={eContact}
        />
      </div>      
      <div className={styles.control}>
        <label>Date Joined</label>
        <input
          type="date"
          name="dJoined"
          onChange={(e) => setDJoined(e.target.value)}
          value={dJoined}
        />
      </div>
      <div className={styles.control}>
        <label>Grade*</label>
        <select
          type="text"
          name="grade"
          onChange={(e) => setGrade(e.target.value)}
          value={grade}
          placeholder="grade"
          className={styles.customselect}
        >
          <option value="White">White</option>
          <option value="Blue">Blue</option>
          <option value="Purple">Purple</option>
          <option value="Brown">Brown</option>
          <option value="Black">Black</option>
        </select>
      </div>      
      <div className={styles.control}>
        <label>Email*</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="example@gmail.com"
        />
      </div>      
      <div className={styles.control}>
        <label>Student ID</label>
        <input
          type="number"
          name="sID"
          onChange={(e) => setSID(e.target.value)}
          value={sID}
        />
      </div>
      <div className={styles.actions}>
        <button type="submit">Add student</button>
      </div>
    </form>
  );
}

export default AddNewStudent;
