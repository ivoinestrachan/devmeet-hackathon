import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSession, signIn, } from "next-auth/react";
import styles from "../styles/login.module.css"

const Login = () => {
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
      <form className={styles.formContainer}>
        <div>
          <input type="text" placeholder="username" className={styles.input}/>
        </div>
        <div>
          <input type="password" placeholder="password" className={styles.input}/>
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
