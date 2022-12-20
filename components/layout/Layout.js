import MainNav from './MainNav';
import classes from './Layout.module.css';
import SideNav from './SideNav';
import Link from 'next/link'

function Layout(props) {
  return (
    <div>
      <MainNav />
      <div className={classes.content}>
        <div className={classes.side}>
          <SideNav />
        </div>
        <div className={classes.page}>
          <main className={classes.main}>{props.children}</main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
