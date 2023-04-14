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
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Grade</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, i) => (
                <tr key={i}>
                  <td>{student.name}</td>
                  <td>{student.grade}</td>
                  <td>{student.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Card>
    </div>
  );
}
