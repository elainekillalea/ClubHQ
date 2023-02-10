import StudentL from '../../components/students/StudentTable';
import classes from '../../styles/Home.module.css';
import Card from '../../components/ui/Card';
import Link from 'next/link'

function StudentList({students}) {
    return(
        <div className={classes.content}>
          <StudentL
            students={students} 
          />
          <div className={classes.spacer}></div>
          <Card>
            <Link href='/add-student'>Add Student</Link>
        </Card>
        </div>
    );
}

export default StudentList;

export async function getServerSideProps(ctx) {
    // get the current environment
    let dev = process.env.NODE_ENV !== 'production';
    let { DEV_URL, PROD_URL } = process.env;

    // request posts from api
    let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/students`);
    // extract the data
    let data = await response.json();

    return {
        props: {
            students: data['message'],
        },
    };
}