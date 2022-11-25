import StudentCard from '../../components/students/StudentCard';
import classes from '../../styles/Home.module.css';

function StudentList({students}) {
    return(
        <div className={classes.content}>
            <div className={classes.container}>
                {students.length === 0 ? (
                    <h2>No added students</h2>
                ) : (
                    <ul>
                        {students.map((student, i) => (
                            <StudentCard 
                                student={student} 
                                key={i} 
                            />
                        ))}
                    </ul>
                )}
            </div>
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