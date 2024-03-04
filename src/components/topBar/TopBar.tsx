// TopBar.tsx
"use client"
import React from 'react';
import { Button, Input } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {SearchIcon} from "@/components/clientFiles/SearchIcon"
import Link from 'next/link';
import styles from './topBar.module.css'
import {faBell,faInbox} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
const TopBar = () => {
  const path=usePathname();

  const [open,setOpen]=useState(false )

    return (

<div >
         <div className={styles.mainContent}>
      <div className={styles.mainSubContent}>
        <h1 className={styles.h1Style}>Genesis</h1>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4" style={{width:"30vw"}} >
        <Input placeholder="Search" size='sm' endContent={
        <button className="focus:outline-none" type="button" >
      
            <SearchIcon className="text-2xl text-default-400 pointer-events-none" />
          
        </button> }
 /></div>
        <div>
            <div className={styles.sideMediaQuery}>
            <div>
       {open ? "": <Button className={styles.mobileButton} onClick={()=>setOpen((prev)=>!prev)}>Menu</Button>}
        {open ? <div  className={styles.sideMediaQueryStyles}>
          <div>
            <nav>
        <Button className={styles.mobileButton} onClick={()=>setOpen((prev)=>!prev)}>Back</Button>

                    <div >
                        <Link href="/home" className={path==="/home" ? styles.active:""}>
                            <div className={styles.fontColor}>Home</div>
                        </Link>
                        </div><hr />
                    <div >
                        <Link href="/clients" className={path==="/clients" ? styles.active:""}>
                            <div className={styles.fontColor}>Clients</div>
                        </Link>
                        </div><hr />
                    <div >
                        <Link href="/support" className={path==="/support" ? styles.active:""}>
                            <div className={styles.fontColor}>Support</div>
                        </Link>
                        </div><hr />
                        <div>
                        <Link href="/support" className={path==="/support" ? styles.active:""}>
                            <div className={styles.fontColor}>Inbox</div>
                        </Link>
                        </div><hr />
                        <div>
                        <Link href="/support" className={path==="/support" ? styles.active:""}>
                            <div className={styles.fontColor}>Notifications</div>
                        </Link>
                        </div><hr />
            </nav>
           </div>
            {/* </div> */}
        </div>: ""}

        </div>
        <div>
        <div className={styles.subTopBar}>
            
            <div  className={styles.topBarMediaQuery} style={{paddingLeft:"2vw"}}> 
            <Link  href={{}}><FontAwesomeIcon icon={faInbox} style={{fontSize:"4vh"}}></FontAwesomeIcon></Link>
            </div>
            <div className={styles.topBarMediaQuery} style={{paddingLeft:"2vw"}}> 
            <Link href={{}}><FontAwesomeIcon icon={faBell} style={{fontSize:"4vh"}}></FontAwesomeIcon></Link>
            </div>
            <div className={styles.topBarMediaQuery} style={{paddingLeft:"2vw"}}> 
             <div className={styles.footerLogo}>
  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Logo" />
</div></div>
            <div className={styles.topBarMediaQuery} style={{paddingRight:"2vw"}}>
            User Name 
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>

        </div>
        </div>
    );
};

export default TopBar;
