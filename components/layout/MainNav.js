import Link from 'next/link';

import styles from './MainNav.module.css';

function MainNav() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>ClubHQ</div>
            <nav>
                <ul>
                    <li className={styles.item}>
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href="/add-student"><a>Add post</a></Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNav;