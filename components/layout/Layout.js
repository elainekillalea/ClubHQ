import NavBar from './NavBar';
import MainContent from './MainContent';
import SideContent from './SideContent';
import Footer from './Footer';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div>
      <NavBar/>
      <div className={classes.row}>
        <MainContent />
        <SideContent />
      </div>
      <Footer />
    </div>

  );
}

export default Layout;
