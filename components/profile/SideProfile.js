import React from 'react';
import styles from "./SideProfile.module.css";
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react";

export default function SideProfile({students}) {

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
              <h4>Welcome <br /> {session?.user?.name}</h4>
            </div>
            <br />
            <Link href='/profile-page'>You can view your profile here</Link>
            <br />
            <br />
            <button onClick={() => signOut()}>Sign out</button>
            
          </main>
        )}
      </div>
  );
}
