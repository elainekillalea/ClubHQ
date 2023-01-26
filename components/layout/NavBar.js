import classes from './Layout.module.css';
import Link from 'next/link'

function NavBar() {
  return (
    <div>
      {/* Header */}
      <div className={classes.header}>
        <h1>ClubHQ</h1>
      </div>
      <div className={classes.navbar}>
        <Link href='/'>Home</Link>
        <Link href='/'>Grade</Link>
        <Link href='/'>Calendar</Link>
        <Link href='/' float="right" >Profile</Link>
      </div>
    </div>
      // <header className={classes.header}>
      //   <div >
      //     <Link href='/' className={classes.logo}>ClubHQ</Link>
      //   </div>
      // </header>
  );
}

export default NavBar;

