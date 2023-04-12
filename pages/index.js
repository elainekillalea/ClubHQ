import Card from "../components/ui/Card";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
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
      Click to sign into your user account <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
  // return (
  //   <div>
  //     <Head>
  //       <title>ClubHQ</title>
  //     </Head>
  //     <h1>Welcome, Select a tab above to continue</h1>
  //     <button onClick={() => console.log('hi')}>Hello</button>
  //   </div>
  // );
}

export default HomePage;
