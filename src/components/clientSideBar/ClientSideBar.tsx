"use client"
import Link from "next/link"
import styles from './clientSidebar.module.css'
import { usePathname } from "next/navigation";

export default function ClientSideBar() {
    const pathName = usePathname();


  return(
    <div className={styles.sidebar}>
    <div className={styles.homeSide}>
    <div className={styles.sideLink}>
      <nav>
          {/* <ul>
              <li> */}
              <div className={`${styles.itemLink} ${pathName === "/clients/dashboard" ? styles.activeIndicator : ""}`}>
              
                  <Link href="/clients/dashboard">
                      <div className={styles.fontColor}>Client List</div>
                  </Link>
                  </div>
              {/* </li>
              <li> */}
              <div   className={`${styles.itemLink} ${pathName === "/clients/addClient" ? styles.activeIndicator : ""}`}>
             
                  <Link href="/clients/addClient">
                      <div className={styles.fontColor}>Add Client</div>
                  </Link>
                  </div>
              {/* </li>
              <li> */}
              <div  className={`${styles.itemLink} ${pathName === "/clients/remove" ? styles.activeIndicator : ""}`}>
                  <Link href="/clients/remove">
                      <div className={styles.fontColor}>Remove Clients</div>
                  </Link>
                  </div>
                  <div  className={`${styles.itemLink} ${pathName === "/clients/billing" ? styles.activeIndicator : ""}`}>
                  <Link href="/clients/billing">
                      <div className={styles.fontColor}>Billing</div>
                  </Link>
                  </div>
      </nav>
     </div>
      </div>
  </div>
  )
}