import Link from "next/link";
import StudentL from "../../components/students/StudentTable";
import Card from "../../components/ui/Card";
import classes from "../../styles/Home.module.css";

function StudentList({ students }) {

  return (
    <div className={classes.content}>
      <StudentL students={students} />
      <div className={classes.spacer}></div>
      <Card>
        <Link href="/add-student">Add Student</Link>
      </Card>
    </div>
  );
}

export default StudentList;

export async function getServerSideProps(ctx) {
  const { PROD_URL } = process.env;

  const response = await fetch(PROD_URL + '/api/students');
  console.log(PROD_URL + '/api/students')
  const data = await response.json();
  // console.log(data);

  return {
    props: {
      students: data['message'],
    },
  };
}
