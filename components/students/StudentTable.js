import { Table } from "@nextui-org/react";
import classes from './StudentTable.module.css';

export default function StudentL({students}) {
  
  return (
    <div>
      {students.length === 0 ? (
          <h2>No added students</h2>
      ) : (
        <Table aria-label="Students table" color="secondary" className={classes.maint} selectionMode="single">
        <Table.Header>
          <Table.Column>NAME</Table.Column>
          <Table.Column>AGE</Table.Column>
          <Table.Column>GRADE</Table.Column>
        </Table.Header>
        <Table.Body>
              {students.map((student, i) => (
                <Table.Row skey={i}>
                  <Table.Cell>{student.name}</Table.Cell>
                  <Table.Cell>{student.age}</Table.Cell>
                  <Table.Cell>{student.grade}</Table.Cell>
                </Table.Row>
              ))}
          {/* </ul>   */}
        </Table.Body>
      </Table>
      )}
  </div>
  );
}