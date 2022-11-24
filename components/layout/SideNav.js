import classes from './MainNav.module.css';
import Link from 'next/link'
import HamMenu from "../generic/HamMenu"
import Button from "../generic/Button"

function MainNav() {

  function checkoutCallback() {
  }
  
  return (
    <header className={classes.header}>
      <Button text1="Profile" maxWidth="70px" onClickHandler={checkoutCallback} />
      
    </header>
  );
}

export default MainNav;
