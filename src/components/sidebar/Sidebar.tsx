"use client"
import Link from 'next/link';
import styles from './sidebar.module.css'// Assume you have CSS module for styling
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser,faUsers,faSackDollar,faGripVertical} from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {

    const pathName = usePathname();
    return (
        <div className={styles.sidebar}>
          <div className={styles.homeSide}>
          <h1 className={styles.textElement}>Genesis</h1>
          <div >
            <nav>
                    <div   className={styles.itemLink}>
                        <Link href="/home"  className={pathName==="/home" ? styles.active:""}>
                        <div className={styles.fontColor}><FontAwesomeIcon icon={faGripVertical}></FontAwesomeIcon> OverView</div>
                        </Link>
                        </div>
                    <div  className={styles.itemLink}>
                        <Link href="/clients/dashboard"   className={pathName.startsWith("/clients") ? styles.active : ""}>
                        <div className={styles.fontColor}><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Clients</div>
                        </Link>
                        </div>
                    <div  className={styles.itemLink}>
                        <Link href="/billing" className={pathName==="/billing" ? styles.active:""}>
                        <div className={styles.fontColor}><FontAwesomeIcon icon={faSackDollar}></FontAwesomeIcon> Billing</div>
                        </Link>
                        </div>
                        <div  className={styles.itemLink}>
                        <Link href="/support"  className={pathName ==="/support" ? styles.active:""}>
                        <div className={styles.fontColor}><FontAwesomeIcon icon={faUsers}></FontAwesomeIcon> Support</div>
                        </Link>
                        </div>
                        <div  className={styles.itemLink}>
                        <Link href="/users/dashboard" className={pathName.startsWith("/users") ? styles.active:""}>
                        <div className={styles.fontColor}><FontAwesomeIcon icon={faUsers}></FontAwesomeIcon> User</div>
                        </Link>
                        </div>
            </nav>
           </div>
            </div>
        </div>
    );
};

export default Sidebar;