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
                <Link href="/app-guide" className={styles.navLink}>
                    Guide
                </Link>
                <Link href="/AccountHistory" className={styles.navLink}>
                    Account History
                </Link>
                
                
            </div>
        </nav>
    );
};

export default Navbar;