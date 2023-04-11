import { useState } from "react";
import { Table } from "@nextui-org/react";
import StudentCard from "./StudentCard";
import { useSession, signIn, signOut } from "next-auth/react";

function Profile({ students }) {
  const { name, birthday, address, phone, emergencyContact, dateJoined, grade, email, studentID } = students;
  const { data: session } = useSession();
  
  return (
    <div>
    {!session ? (
      <>
        <p>Not signed in</p>
        <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    ) : (
      <div>      
        <h1>Student Details</h1>
        <h2>Name: {name}</h2>
        <h2>Birthday: {birthday}</h2>
        <h2>Phone: {phone}</h2>
        <h2>Emergency Contact: {emergencyContact}</h2>
        <h2>Date Joined: {dateJoined}</h2>
        <h2>Grade: {grade}</h2>
        <h2>Email: {email}</h2>
        <h2>Student ID: {studentID}</h2>
      </div>
    )}
    </div>
  );
}
export default Profile;
