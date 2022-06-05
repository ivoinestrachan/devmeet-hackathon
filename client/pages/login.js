import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSession, signIn, } from "next-auth/react";
import styles from "../styles/login.module.css"
import { useState } from 'react';

const Login = () => {
  const { data: session } = useSession()
  const router = useRouter();

  if (session) {
    router.push('/dashboard');
  }

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { username, password } = inputs;
   

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  const onSubmitForm = async (e) => {
    e.preventDefault()

    try {

      const body = { username, password }
      const response = await fetch("http://localhost:1348/auth/signin", {
        method: "POST",
        headers: {"Content-Type": "application/json"}
        ,
        body: JSON.stringify(body)
      });

      const parseRes = await response.json()

      localStorage.setItem("token", parseRes.token);

      router.push("/dashboard");

    } catch (error) {
      console.error(error.message)
    }

  }

  return (
    <div className={styles.container}>
      <div className={styles.LeftContainer}>
        <div className={styles.con}>
      <div className={styles.log}>
      Login to your Account
      </div>
      <p className={styles.para2}>Login using Social Networks</p>
      <div>
      <button className={styles.button1} onClick={() => {
          const isSuccess = signIn();
          if (isSuccess) {
            router.push("/dashboard");
          }
        }
      }>Login with github or google</button>
      </div>
      <form className={styles.formContainer} onSubmit={onSubmitForm}>
        <div>
          <input type="text"
           placeholder="username"
           name='username'
           value={username}
           onChange={e => onChange(e)}
            className={styles.input}/>
        </div>
        <div>
          <input type="password"
           placeholder="password"
           name='password'
           value={password}
           onChange={e => onChange(e)}
            className={styles.input}/>
        </div>
        <div className={styles.butt}>
        <button className={styles.loginbutt}>login</button>
        </div>
      </form>
      </div>
      </div>
      <div className={styles.RightContainer}>
        <div className={styles.con}>
        <div className={styles.new}>
        New here?
        </div>
        <p className={styles.para}>
        Sign up and find your best teammate for <br></br>
your next hackathon
        </p>
    <Link href="/signup">
      <div className={styles.buttWrapper}>
      <button className={styles.button}>Sign up</button>
      </div>
      </Link>
      </div>
      </div>
    </div>
  );
}

export default Login;
