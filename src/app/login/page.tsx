"use client"
import { useState } from 'react';
import styles from "./page.module.css";
import Link from "next/link"
import { useRouter} from "next/navigation";
import json from "@/assets/dummyData/MockData.json"
import {Input} from "@nextui-org/input";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";

import { EyeFilledIcon } from '@/assets/logos/EyeFilledIcon';
import { EyeSlashFilledIcon } from '@/assets/logos/EyeSlashFilledIcon';
import {Button} from "@nextui-org/button";
export default function Login() {

  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [username,setusername]=useState("")

  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [size, setSize] = useState('md')
  const toggleVisibility = () => setIsVisible(!isVisible);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleOpen = () => {
    setSize('md')
    onOpen();
  }
  const handleClose = () => {
    setOpen(false);
  };
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

     // Check if email and password are provided
  if (!email || !password) {
    setError('Please fill in both email and password to continue.');
    return;
  }
    // Find user in the JSON data
    const user = json.find((userData) => userData.email === email);

    // Check if user exists and password is correct
    if (user && user.password === password) {
      // Successful login, navigate to home page
      router.push('/home');
    } else {
      // Handle different error scenarios
      if (!user) {
        setError('Email not found');
      } else {
        setError('Incorrect password');
      }
    }
  };


  function LoginMain(){
      console.log("login",username,password)
      
  }

  return (
      <div className={styles.containermain}>
        <div className={styles.flex}>
          <div className={styles.loginmain} style={{backgroundImage:'url("https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fCUyMm9mZmljZSUyQyUyMiUyMCUyMndvcmtwbGFjZSUyQyUyMiUyMG9yJTIwJTIyYnVzaW5lc3MlMjJ8ZW58MHx8MHx8fDA%3D")', height:"100vh", backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
          {/* <Image src={imagea} className={styles.loginimg}></Image> */}
          </div>
          <div className={styles.loginscreen}>
          
          <div className={styles.login}>
          <div className={styles.container}>
          <form onSubmit={handleLogin}>
                    <h1 style={{fontWeight:"600",fontSize:"4vh"}}>Login</h1>
                    sign in to continue

                    <div style={{paddingTop:"4vh"}}>
                    <Input type='text' variant="bordered" onChange={e=>setEmail(e.target.value)}  placeholder='User id or Email Address' size='sm' ></Input></div>
                    <div style={{paddingTop:"1vh"}}>
                    <Input type='password'  variant="bordered"  onChange={e=>setPassword(e.target.value)} placeholder='Password' size='sm' ></Input></div>
                    <div style={{paddingTop:"1vh"}}>
                    <Button fullWidth color="primary" type="submit">submit</Button></div>
            <Link onClick={() => handleOpen()}  href="" style={{paddingLeft:"180px"}}>Forgot Password</Link><br />

                    {/* <Link href="/home">submit</Link><br /> */}
                    Dont have an account? <Link href="" style={{color:"blue"}}>Register</Link>

                    </form>
                </div>
            {/* <form onSubmit={handleLogin}>
            <h4 style={{fontSize:"190%",fontWeight:"500"}}>Login</h4>
           <p style={{ color:"666666",fontSize:"80%"}}> Sign in to continue</p><br />
        
            <div style={{ display:'inline-block' , width:'50%' }} >
            <Input size='sm' type="email" variant="underlined" label="User id or Email Address" onChange={(e) => setEmail(e.target.value)}/>
            <Input size='sm' variant="underlined"  type={isVisible ? "text" : "password"} label="Password"  endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
            }
onChange={(e) => setPassword(e.target.value)} />
            </div>
            <br />
            <Link onClick={() => handleOpen()}  href="" style={{paddingLeft:"180px"}}>Forgot Password</Link><br />
            <br />
          
              <div style={{ color: 'red' }}>{error}</div>
              <br />
              <div style={{ display:'inline-block' , width:'50%' }} >
              <Button style={{width:"100%"}} color="primary"  type='submit'>
              Login
      </Button>
      </div>
           <div style={{marginTop: "10px"}}>
           <p>Dont have an account?<span className={styles.register}>Register</span></p>
           </div>
            </form> */}
            <Modal 
        // size={size} 
        isOpen={isOpen} 
        onClose={onClose} 
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Forgot Password</ModalHeader>
              <ModalBody>
                <p> 
                Please enter your email address here if you have forgotten your password for this website. We will send a Forgot Password link to your email.
                </p>
               <Input label="Email ID"/>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Update
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
          </div>
          </div>
        </div>
      </div>
  );
}
