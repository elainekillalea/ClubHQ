import Card from '../components/ui/Card';
import Link from 'next/link';
import classes from '../styles/Home.module.css';


function HomePage() {
  
    return (
        <div>
            <div className={classes.content}>
                <Card>
                    <Link href='/'>Home</Link>
                </Card>
            </div>
            <div className={classes.content}>
                <Card>
                    <Link href='/add-student'>Add Student</Link>
                </Card>
            </div>
            <div className={classes.content}>
                <Card>
                    <Link href='/student-list'>Student List</Link>
                </Card>
            </div>
            <div className={classes.content}>
                <Card>
                    <Link href='/api/auth/login'>Login</Link>
                </Card>
            </div>
            {/* <div className={classes.content}>
                <Card>
                    <Link href='/calendar-page'>Calendar</Link>
                </Card>
            </div> */}
        </div>
   );
}

export default HomePage;
