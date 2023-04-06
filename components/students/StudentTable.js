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
                <tr>
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
    // <div>
    //   {students.length === 0 ? (
    //       <h2>No added students</h2>
    //   ) : (
    //     <Table aria-label="Students table" color="secondary" className={classes.maint} selectionMode="single">
    //       <Table.Header>
    //         <Table.Column>NAME</Table.Column>
    //         <Table.Column>EMAIL</Table.Column>
    //         <Table.Column>GRADE</Table.Column>
    //         <Table.Column>Actions</Table.Column>
    //       </Table.Header>
    //       <Table.Body>
    //             {students.map((student, i) => (
    //               <Table.Row skey={i} >
    //                 <Table.Cell>{student.name}</Table.Cell>
    //                 <Table.Cell>{student.email}</Table.Cell>
    //                 <Table.Cell>{student.grade}</Table.Cell>
    //                 <Table.Cell><CiRead/><CiEdit/><CiTrash/></Table.Cell>
    //               </Table.Row>
    //             ))}
    //       </Table.Body>
    //     </Table>
    //   )}
    // </div>
  );
}
