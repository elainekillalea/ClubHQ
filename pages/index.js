import styles from "../styles/Home.module.css";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

function HomePage() {
  const { data: session } = useSession();
  if (session) {
    console.log(session)
    return (
      <div className={styles.container}> Welcome {session.user.name}<br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <h1>Welcome to ClubHQ </h1>
      <div className={styles.spacer}></div>
      <p>Please sign into your user account </p>
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
}

export default HomePage;
