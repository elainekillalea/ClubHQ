import classes from './Layout.module.css';
import Link from 'next/link'
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react";


function NavBar() {
  const { data: session } = useSession();
  return (
    <div>
      {/* Header */}
      <div className={classes.header}>
        <h1>ClubHQ</h1>
        <div style={{ borderRadius: '50%', overflow: 'hidden', width: '80px', height: '80px' }}>
          <Image
            src="/clubhqLogo.png"
            objectFit="cover"
            width="80px"
            height="80px"
            placeholder="blur"
            alt="Logo"
            blurDataURL="/clubhqLogo.png"
          />
        </div>
      </div>
      
      {/* Link Bar */}
      {!session ? (
        <>
          <div className={classes.navbar}>
          <Link href='/'>Home</Link>
        </div>
        </>
      ) : session.user.email === 'ellakillalea00@gmail.com' ? (
        <div className={classes.navbar}>
          <Link href='/'>Home</Link>
          <Link href='/profile-page'>Profile</Link>
          <Link href='/calendar-page'>Calendar</Link>
          <Link href='/student-list'>Student List</Link>
        </div>
      ) : (
        <div className={classes.navbar}>
          <Link href='/'>Home</Link>
          <Link href='/profile-page'>Profile</Link>
          <Link href='/calendar-page'>Calendar</Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;

