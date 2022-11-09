import Head from 'next/head';

import MainNav from '../layout/MainNav';
import styles from '../../styles/Home.module.css';


function HomePage(props) {
    return (
        
        <div className={styles.container}>
            {props.length === 0 ? (
                <h2>No added posts</h2>
            ) : (
                <ul>
                    {props.map((student, i) => (
                        <StudentCard 
                            student={student} 
                            key={i} 
                        />
                    ))}
                </ul>
            )}
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