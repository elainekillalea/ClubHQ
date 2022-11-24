import classes from './MainNav.module.css';
import Link from 'next/link'
import HamMenu from "../generic/HamMenu"
import Button from "../generic/Button"

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
  
  return (
    <header className={classes.header}>
      {/* <HamMenu toggleMenuHide={() => toggleMenuHide()} /> */}
      <div >
        <Link href='/' className={classes.logo}>ClubHQ</Link>
      </div>
      {/* <Button text1="Profile" maxWidth="70px" onClickHandler={checkoutCallback} /> */}
      
    </header>
  );
}

export default MainNav;
