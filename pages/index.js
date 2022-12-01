import Card from '../components/ui/Card';
import Link from 'next/link';
import classes from '../styles/Home.module.css';
import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';

function HomePage() {
  const { user, error, isLoading } = useUser();               //useUser hook gets UserProfile object from server-side rendering by requesting it from the HandleProfile API Route handler
  return (
    <div>
      <div>
        <div className={classes.container}>
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
         

          <div>
            {isLoading && <p>Loading login info...</p>}
      
            {error && (<><h4>Error</h4><pre>{error.message}</pre></>)}
      
            {user && (
              <>
                <h4>Welcome {JSON.stringify(user.nickname, null, 2)}</h4>
                
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
                        <Link href='/calendar-page'>Calendar</Link>
                    </Card>
                </div>
              </>
            )}
          </div>
        </div> 
      </div>
    </div>
  );
}

export default HomePage;
