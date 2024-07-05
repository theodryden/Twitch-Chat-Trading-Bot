// components/Navbar.js
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <Link href="/" className={styles.navLink}>
                    Home
                </Link>
                <Link href="/gain-loss" className={styles.navLink}>
                    Gain/Loss
                </Link>
                <Link href="/positions" className={styles.navLink}>
                    Positions
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;