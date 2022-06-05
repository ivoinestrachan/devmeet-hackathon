import Router from 'next/router'
import Link from 'next/link';
import { useSession, signIn, } from "next-auth/react";
import styles from "../styles/login.module.css"
import { useState } from 'react';


const Signup = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    confirmPassword:"", 
  });

  const {username, password, confirmPassword} = inputs;

  const onChange = (e) => {
    setInputs(prev => {
      return {...prev, [e.target.name]: e.target.value};
    })
  }

  const onSubmitForm = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      return;
    }

    try {
      const body = {username, password}
      const response = await fetch("http://localhost:1348/auth/signup", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });

      const parseRes = await response.json()

      localStorage.setItem("token", parseRes.token);
      
      //signIn('username', {username, callbackUrl: 'http://localhost:1348/auth/signup'})

      Router.push("/dashboard");

    } catch (error) {
      console.error(error.message)
    }
  }
  const { data: session } = useSession()

  if (session) {
    Router.push('/dashboard');
    return <></>;
  }

  return (
    <div className={styles.container}>
        <div className={styles.logo}>
          <div  className={styles.logo}>
      <Link href="/">
     DevMeet
    </Link>
    </div>
      </div>
      <div className={styles.LeftContainer}>
        <div className={styles.con}>
      <div className={styles.log}>
     Create an account
      </div>
      <p className={styles.para2}>Signup using Social Networks</p>
      <div>
      <button className={styles.button1} onClick={() => signIn()}>Signup with github or google</button>
      </div>
      <form className={styles.formContainer} onSubmit={onSubmitForm}>
        <div>
          <input type="text" 
          placeholder="Username"
          name="username"
          value={username}
          onChange={e => onChange(e)}
           className={styles.input}/>
        </div>
        <div>
          <input type="password" 
          name="password"
          placeholder="Password" 
          onChange={e => onChange(e)}
          value={password}
          className={styles.input}/>
        </div>
        <div>
          <input type="password"
          name="confirmPassword"
           placeholder="Confirm Password"
           onChange={e => onChange(e)}
           value={confirmPassword}
           className={styles.input}/>
        </div>
        <div className={styles.butt}>
        <button className={styles.loginbutt}>Sign Up</button>
        </div>
      </form>
      </div>
      </div>
      <div className={styles.RightContainer}>
        <div className={styles.con}>
        <div className={styles.new}>
        Already have an account
        </div>
        <p className={styles.para}>
     Come back to your friends
        </p>
    <Link href="/login">
      <div className={styles.buttWrapper}>
      <button className={styles.button}>Login</button>
      </div>
      </Link>
      </div>
      </div>
    </div>
  );
}

export default Signup;
