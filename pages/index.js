import Card from '../components/ui/Card';
import Link from 'next/link';
import classes from '../styles/Home.module.css';
import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';

function HomePage() {
    const { user, error, isLoading } = useUser();
    return (
        <div>
            {/* <div className={classes.content}>
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
            </div> */}
            <div className={classes.content}>
                <Card>
                    <Link href='/api/auth/login'>Login</Link>
                </Card>
            </div>
            <div className={classes.content}>
                <Card>
                    <Link href='/api/auth/logout'>Logout</Link>
                </Card>
            </div>
            {/* <div className={classes.content}>
                <Card>
                    <Link href='/calendar-page'>Calendar</Link>
                </Card>
            </div> */}
        {/* </div>
        <div> */}

        <h1>Next.js and Auth0 Example</h1>
  
        {isLoading && <p>Loading login info...</p>}
  
        {error && (
          <>
            <h4>Error</h4>
            <pre>{error.message}</pre>
          </>
        )}
  
        {user && (
          <>
            <h4>Rendered user info on the client</h4>
            <pre data-testid="profile">{JSON.stringify(user, null, 2)}</pre>
          </>
        )}
  
        {!isLoading && !error && !user && (
          <>
            <p>
              To test the login click in <i>Login</i>
            </p>
            <p>
              Once you have logged in you should be able to click in <i>Protected Page</i> and <i>Logout</i>
            </p>
          </>
        )}
      </div>
   );
}

export default HomePage;

