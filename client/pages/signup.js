import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSession, signIn, } from "next-auth/react";
import styles from "../styles/login.module.css"
import { useState } from 'react';


const Signup = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    comfirmpassword:"", 
  });
  const {username, password, comfirmpassword} = inputs;

  const onChange = (e) =>{
    setInputs({...inputs, [e.target.name]
    : e.target.value })
    
  }

  const onSubmitForm = async(e) => {
    e.preventDefault()

    try {

      const body = {username, password, comfirmpassword}
      const response = await fetch("http://localhost:1338/auth/signup", {
        method: "POST",
        headers: {"Content-Type": "application/json"}
        ,
        body: JSON.stringify(body)
      });

      const parseRes = await response.json()

      console.log(parseRes)
    } catch (error) {
      console.error(error.message)
    }
  }
  const { data: session } = useSession()
  const router = useRouter();

  if (session) {
    router.push('/dashboard');
  }

  return (
    <div className={styles.container}>
      <div className={styles.LeftContainer}>
        <div className={styles.con}>
      <div className={styles.log}>
     Create a account
      </div>
      <p className={styles.para2}>Signup using Social Networks</p>
      <div>
      <button className={styles.button1} onClick={() => {
          const isSuccess = signIn();
          if (isSuccess) {
            router.push("/dashboard");
          }
        }
      }>Signup with github or google</button>
      </div>
      <form className={styles.formContainer} onSubmit={onSubmitForm}>
        <div>
          <input type="text" 
          placeholder="username"
          name="username"
          value={username}
          onChange={e => onChange(e)}
           className={styles.input}/>
        </div>
        <div>
          <input type="password" 
          name="password"
          placeholder="password" 
          onChange={e => onChange(e)}
          value={password}
          className={styles.input}/>
        </div>
        <div>
          <input type="password"
          name="comfirmpassword"
           placeholder="comfirmpassword"
           onChange={e => onChange(e)}
           value={comfirmpassword}
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
        Already have a account
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
