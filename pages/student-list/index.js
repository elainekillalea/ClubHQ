import Link from "next/link";
import StudentL from "../../components/students/StudentTable";
import Card from "../../components/ui/Card";
import classes from "../../styles/Home.module.css";
import { useSession, getSession } from "next-auth/react";

function StudentList({ students }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Login to view members</p>;
  }
  

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
  const { PROD_URL, DEV_URL } = process.env;

  const response = await fetch(PROD_URL + '/api/students');
  const data = await response.json();

  return {
    props: {
      students: data['message'],
    },
  };
}
