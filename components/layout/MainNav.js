import Link from 'next/link'
import HamMenu from "../generic/HamMenu"
import Button from "../generic/Button"
import styles from './MainNav.module.css';

function MainNav() {
    function ordersCallback() {
    //pageHeaderCtx.setCartState(1, true, null)
    }

    function checkoutCallback() {
    // pageHeaderCtx.setCartState(2, true, true)
    }

    function toggleMenuHide() {
    // pageHeaderCtx.setCartState(2, true, true)
    }
    return (
        <header className={styles.header}>
            <HamMenu toggleMenuHide={toggleMenuHide} />
            <div >
                <Link href='/' className={styles.logo}>ClubHQ</Link>
            </div>
            <Button text1="Checkout" maxWidth="75px" onClickHandler={checkoutCallback} />
            <Button text1="Orders" maxWidth="70px" onClickHandler={ordersCallback} />
        </header>
    );
}

export default MainNav;