"use client"
import Layout1 from "@/components/layout/layout"
import styles from './page.module.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Divider,CardBody,CardFooter,CardHeader } from "@nextui-org/react";
import {faUserPlus,faSackDollar,faCalendarDay,faFile,faTableCells} from "@fortawesome/free-solid-svg-icons";
import { Chart } from "chart.js";
import { useEffect, useRef } from "react";
import Calendar from "@/components/calendar/Calendar";
import Link from "next/link"
library.add(fas)
export default function Home (){
  useEffect(() => {
    var ctx = document.getElementById('myChart') as HTMLCanvasElement;
    if (ctx) {
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Sunday", "Monday", "Tuesday"],
            datasets: [{
                data: [66, 144, 146],
                label: "Applied",
                backgroundColor: "rgb(109, 253, 181,0.5)",
                borderWidth: 2
            }, {
                data: [40, 100, 44],
                label: "Accepted",
                backgroundColor: "rgb(75, 192, 192,0.5)",
                borderWidth: 2
            }, {
                data: [60, 24, 50],
                label: "Pending",
                backgroundColor: "rgb(255, 205, 86,0.5)",
                borderWidth: 2
            }
            ]
        },
    });
  }
}, [])
  const todos=[{title:"Adding a user to the company",link:"http"},{title:"Adding a new Client",link:"http"},{title:"Generate Report",link:"http"},{title:"Pending Bills",link:"http"}]
  return(
    <Layout1>
     <div style={{backgroundColor:""}}>
        {/* <div style={{width:"100vw",height:"10vh",backgroundColor:"blue",paddingTop:"2vh"}}>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <h1>Genesis</h1>
        <input type="text" style={{width:"30vw",borderRadius:"1vh",paddingLeft:"1vw"}} placeholder="Search"></input>
        hi
        </div>
          
        </div> */}

      {/* <div style={{display:"flex",flexDirection:"row"}}> */}
        {/* <div style={{width:"12vw",height:"90vh",backgroundColor:"white",paddingTop:"4vh"}}>
          <Navbar></Navbar>
        </div> */}
        {/* <div style={{paddingLeft:"4vh",paddingTop:"4vh"}}> */}
          <div className={styles.maindiv}>
          <Card className={styles.container1}>
          <h1 style={{fontWeight:"700",fontSize:"4vh"}}>
            Welcome Goutham</h1>
            <h2 className={styles.fontWeight}>Quick Action</h2>
      <div className={styles.displayRow1}>
        <div >
        <div style={{paddingTop:"5vh"}}><span className={styles.circle}><FontAwesomeIcon color="white" icon={faUserPlus}></FontAwesomeIcon></span><span className={styles.fontSize}> 
        <Link href="/clients/addClient">
            Add a Client
        </Link></span></div>
        <div style={{paddingTop:"5vh"}}><span className={styles.circle}><FontAwesomeIcon color="white" icon={faUserPlus}></FontAwesomeIcon></span><span className={styles.fontSize}> 
        <Link href="/users/addUser">
            Add a User
        </Link></span></div>
        <div style={{paddingTop:"5vh"}}><span className={styles.circle}><FontAwesomeIcon color="white" icon={faTableCells}></FontAwesomeIcon></span><span className={styles.fontSize}> Run Report</span>
        </div></div> <Divider orientation="vertical" />
        
        <div>
        <div>
          <div style={{paddingTop:"5vh"}}><span className={styles.circle}><FontAwesomeIcon color="white" icon={faTableCells}></FontAwesomeIcon></span><span className={styles.fontSize}> Document Valut</span></div>
          <div style={{paddingTop:"5vh"}}><span className={styles.circle}><FontAwesomeIcon color="white" icon={faSackDollar}></FontAwesomeIcon></span><span className={styles.fontSize}> Pending Billings</span></div>
          <div style={{paddingTop:"5vh"}}><span className={styles.circle}><FontAwesomeIcon color="white" icon={faCalendarDay}></FontAwesomeIcon></span><span className={styles.fontSize}> Calender</span></div></div>
        </div>

        </div>

          </Card>
          <Card className={styles.container2}>
          <h2 className={styles.fontWeight}>To-do&apos;s</h2>
            <CardBody>
            {todos.map(items=><ul key={items.title} className={styles.cardBox}>{items.title}<hr style={{width:"25vw"}}></hr></ul>)}
            </CardBody>
            <CardFooter><div style={{alignContent:"center"}}>View All</div></CardFooter>
          </Card>
          </div>
          <div className={styles.displayRow} style={{paddingTop:"4vh"}}>
          <Card className={styles.container3}><h2 className={styles.fontWeight}>Recent Payrolls</h2>
                    <canvas id='myChart' ></canvas>
                    <div className={styles.viewAll2}>View All</div>
            </Card>
          <Card className={styles.container3}>
          <h2 className={styles.fontWeight}>Recent Payrolls</h2>
            <CardBody>
            {todos.map(items=><ul key={items.title} className={styles.cardBox}>{items.title}<hr style={{width:"20vw"}}></hr></ul>)}
            </CardBody>
            <CardFooter>View All</CardFooter>
            </Card>
          <Card className={styles.container2}>
          <h2 className={styles.fontWeight}>Calender</h2>
          <CardBody><Calendar /></CardBody> </Card>
          </div>

        </div>
    </Layout1>
  )
}