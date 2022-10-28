import StudentItem from './StudentItem';
import classes from './StudentList.module.css';

function StudentList(props) {
  return (
    <ul className={classes.list}>
      {props.students.map((student) => (
        <StudentItem
          key={student.id}
          id={student.id}
          image={student.image}
          name={student.name}
          grade={student.grade}
          address={student.address}
        />
      ))}
    </ul>
  );
}

export default StudentList;
