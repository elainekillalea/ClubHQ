import { CiEdit, CiRead, CiTrash } from "react-icons/ci";
import classes from "./StudentTable.module.css";
import Card from "../ui/Card";

export default function StudentL({ students }) {

  return (
    <div className={classes.content}>
      <Card>
        {students.length === 0 ? (
          <h2>No added students</h2>
        ) : (
          <table className={classes.table}>
            <thead>
              <tr className={classes.titleRow}>
                <th>Name</th>
                <th>Grade</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, i) => (
                <tr key={i}>
                  <td className={classes.nameCol}>{student.name}</td>
                  <td className={classes.nameCol}>{student.grade}</td>
                  <td className={classes.nameCol}>{student.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Card>
    </div>
  );
}
