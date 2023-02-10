import Card from '../components/ui/Card';
import Link from 'next/link';
import Head from "next/head";
import Image from "next/image";
import styles from '../styles/Home.module.css';
import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react";

function HomePage() {
  
  return (
    <div >
      <Head>
        <title>ClubHQ</title>
        <meta name="description" content="FYP PWA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome, Select a tab above to continue</h1>
      
    </div>
  );
}

export default HomePage;

