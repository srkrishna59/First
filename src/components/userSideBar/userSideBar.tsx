"use client"
import Link from "next/link"
import styles from './userSidebar.module.css'
import { usePathname } from "next/navigation";

export default function UserSidebar() {
    const pathName = usePathname();


  return(
    <div className={styles.sidebar}>
    <div className={styles.homeSide}>
    <div className={styles.sideLink}>
      <nav>
          {/* <ul>
              <li> */}
              <div className={`${styles.itemLink} ${pathName === "/users/dashboard" ? styles.activeIndicator : ""}`}>
              
                  <Link href="/users/dashboard">
                      <div className={styles.fontColor}>User List</div>
                  </Link>
                  </div>
              {/* </li>
              <li> */}
              <div   className={`${styles.itemLink} ${pathName === "/users/addUser" ? styles.activeIndicator : ""}`}>
             
                  <Link href="/users/addUser">
                      <div className={styles.fontColor}>Add User</div>
                  </Link>
                  </div>
              {/* </li>
              <li> */}
              <div  className={`${styles.itemLink} ${pathName === "/users/remove" ? styles.activeIndicator : ""}`}>
                  <Link href="/users/remove">
                      <div className={styles.fontColor}>Remove User</div>
                  </Link>
                  </div>
                  <div  className={`${styles.itemLink} ${pathName === "/users/billing" ? styles.activeIndicator : ""}`}>
                  <Link href="/users/billing">
                      <div className={styles.fontColor}>Billing</div>
                  </Link>
                  </div>
      </nav>
     </div>
      </div>
  </div>
  )
}