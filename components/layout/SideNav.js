import classes from './SideNav.module.css';
import Link from 'next/link'
import HamMenuContent from "../generic/HamMenuContent"
import { useUser } from '@auth0/nextjs-auth0';

function SideNav() {
  
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          {/* <li>
          <Link href='/add-student' className={classes.logo}>Add Student</Link>
          </li>
          <li>
          <Link href='/student-list' className={classes.logo}>Student List</Link>
          </li>
          <li>
          <Link href='/calendar-page' className={classes.logo}>Calendar</Link>
          </li> */}
          <li>
          <Link href='/api/auth/login'>Login</Link>
          </li>
          <li>
          <Link href='/api/auth/logout'>Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default SideNav;
