import React from 'react';
import styles from "./Profile.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Profile() {

  const { data: session } = useSession();

  return (
      <div>
        {!session ? (
          <>
            <p>Not signed in</p>
            <br />
            <button onClick={() => signIn()}>Sign in</button>
          </>
        ) : (
          <main className={styles.main}>
            <div className={styles.header}>
              <h4>Welcome <br /> {session.user.name}</h4>
            </div>
            <br />
            <h1>You can now view your membership pages</h1>
            <br />
            <button onClick={() => signOut()}>Sign out</button>
            
          </main>
        )}
      </div>
  );
}