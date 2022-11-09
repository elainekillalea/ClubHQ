import Head from 'next/head';

import MainNav from '../components/layout/MainNav';
import StudentCard from '../components/students/StudentCard';
import styles from '../styles/Home.module.css';

function StudentList({ students }) {
    return (
        <div>
            <Head>
                <title>List</title>
            </Head>

            <MainNav />

            <main>
                <div className={styles.container}>
                    {students.length === 0 ? (
                        <h2>No added posts</h2>
                    ) : (
                        <ul>
                            {students.map((student, i) => (
                                <StudentCard student={student} key={i} />
                            ))}
                        </ul>
                    )}
                </div>
            </main>
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