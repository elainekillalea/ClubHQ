import classes from './MainNav.module.css';
import Link from 'next/link'
import HamMenuContent from "../generic/HamMenuContent"

function MainNav() {

  function checkoutCallback() {
  }

  function toggleMenuHide() {
    if (popupToggle == true) {
      setPopupToggle(false)
    } else {
      setPopupToggle(true)
    }
  }

  const contents = [
    {title: 'Home', webAddress: '/'}, 
    {title: 'Calendar', webAddress: '/calendar-page'}, 
    {title: 'New', webAddress: '/add-student'},
    {title: 'List', webAddress: '/student-list'},
    {title: 'Login', webAddress: '/student-list'},
    {title: 'Logout', webAddress: '/student-list'}
   ]
  
  return (
    <header className={classes.header}>
      <div >
        <Link href='/' className={classes.logo}>ClubHQ</Link>
      </div>
      {/* <HamMenuContent contents={contents} /> */}
    </header>
  );
}

export default MainNav;
