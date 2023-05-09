import { useState, useEffect } from "react";
import classes from "./Profile.module.css";
import EditProfile from "./EditProfile";

function ViewProfile({user, onEdit}) {
  console.log("ViewProfile");
  return (
    <div>
      <h2>Member Details</h2>
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
            {user.address?.address1}, {user.address?.address2},
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
        {/* <button onClick={onEdit}>Edit</button> */}
      </div>
    </div>
  );
}

export default ViewProfile;


      
