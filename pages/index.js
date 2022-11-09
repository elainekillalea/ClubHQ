import Head from 'next/head';
import Card from '../components/ui/Card';
import Link from 'next/link';

import MainNav from '../components/layout/MainNav';
import styles from '../styles/Home.module.css';

function HomePage() {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>

            <MainNav />

            <main>
                <div className={styles.container}>
                <Card>
                    <Link href="/student-list"><a>Student List</a></Link>
                </Card>
                
                <Card>
                    <Link href="/add-student"><a>Add Student</a></Link>
                </Card>
                </div>
            </main>
        </div>
    );
}

export default HomePage;

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