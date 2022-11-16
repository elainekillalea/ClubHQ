import classes from './MainNav.module.css';
import Link from 'next/link'
import HamMenu from "../generic/HamMenu"
import Button from "../generic/Button"
import ProfileMenu from "../generic/ProfileMenu"
import { Dropdown } from "@nextui-org/react";

function MainNav() {
  function profileCallback() {
    
  }

  function checkoutCallback() {
    // pageHeaderCtx.setCartState(2, true, true)
   }

   function toggleMenuHide() {
    // pageHeaderCtx.setCartState(2, true, true)
   }
  
  return (
    <header className={classes.header}>
      <HamMenu toggleMenuHide={toggleMenuHide} />
      <div >
        <Link href='/' className={classes.logo}>ClubHQ</Link>
      </div>
      <Button text1="Profile" maxWidth="70px" onClickHandler={profileCallback} />
      <ProfileMenu />
      
    </header>
  );
}

export default MainNav;
