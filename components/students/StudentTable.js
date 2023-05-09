import classes from "./StudentTable.module.css";
import Card from "../ui/Card";
import { FaEye, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import StudentProfile from "./StudentProfile";

export default function StudentL({ students }) {
  const [viewingStudent, setViewingStudent] = useState(null);
  const router = useRouter();
  

  const deleteStudent = async (studentId) => {
    await fetch("/api/students", {
      method: "DELETE",
      body: studentId,
    });
    return router.push(router.asPath);
  };

  const viewStudent = (student) => {
    if (viewingStudent?.studentID !== student.studentID) {
      setViewingStudent(student);
    } else {
      setViewingStudent(null);
    }
    console.log("Viewing:" + JSON.stringify(viewingStudent));
  };

  useEffect(() => {
    setViewingStudent(null);
  }, [students]);

  console.log("Viewing:" + viewingStudent);
  return (
    <div className={classes.content}>
      {students.length === 0 ? (
        <h2>No added students</h2>
      ) : (
        <>
          <Card>
            <table className={classes.table}>
              <thead>
                <tr className={classes.titleRow}>
                  <th>Name</th>
                  <th>Grade</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, i) => (
                  <tr key={i}>
                    <td className={classes.nameCol}>{student.name}</td>
                    <td className={classes.nameCol}>{student.grade}</td>
                    <td className={classes.nameCol}>{student.studentID}</td>
                    <td className={classes.buttonCol}>
                      <button
                        type="button"
                        onClick={() => viewStudent(student)}
                      >
                        <FaEye />
                      </button>
                    </td>
                    <td className={classes.buttonCol}>
                      <button
                        type="button"
                        onClick={() => deleteStudent(student.studentID)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
          <div className={classes.spacer}></div>
          <Card>
            {viewingStudent && <StudentProfile email={viewingStudent.email} />}
          </Card>
        </>
      )}
    </div>
  );
}
