import classes from './Layout.module.css';
import Link from 'next/link'
import Image from 'next/image';


function NavBar() {
  return (
    <div>
      {/* Header */}
      <div className={classes.header}>
        <h1>ClubHQ</h1>
        <div style={{ borderRadius: '50%', overflow: 'hidden', width: '100px', height: '100px' }}>
          <Image
            src="/crest2.png"
            objectFit="cover"
            width="100px"
            height="100px"
            placeholder="blur"
            blurDataURL="/crest2.png"
          />
        </div>
      </div>
      <div className={classes.navbar}>
        <Link href='/'>Home</Link>
        <Link href='/progress-page'>Grade</Link>
        <Link href='/calendar-page'>Calendar</Link>
        <Link href='/student-list'>Student List</Link>
        <Link href='/api/auth/login'>Login</Link>
        <Link href='/api/auth/logout'>Logout</Link>
      </div>
    </div>
  );
}

export default NavBar;

