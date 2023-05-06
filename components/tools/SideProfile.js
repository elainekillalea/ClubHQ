import React from "react";
import styles from "./SideProfile.module.css";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function SideProfile({ students }) {
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
            <h1>Signed in as</h1>
            <br/>
            <h2>{session?.user?.name}</h2>
          </div>
          <br />
          <p>
            <button onClick={() => signOut()}>Sign out</button>
          </p>
        </main>
      )}
    </div>
  );
}
