import NavBar from './NavBar';
import SideContent from './SideContent';
import Footer from './Footer';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div>
      <NavBar/>
      <div className={classes.row}>
        <div className={classes.mainCol}>
          <div className={classes.card}>
            <main className={classes.main}>{props.children}</main>
          </div>
        </div>
        <div className={classes.side}>
          <SideContent />
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default Layout;
