import styles from "../styles/Home.module.css"
import Image from "next/image";
import left from "../assets/left.svg";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div  className={styles.logo}>
    <Link href="/">
   DevMeet
  </Link>
  </div>
  
    <div className={styles.container}>
    <div className={styles.leftcontainer}>
      <div className={styles.intro}>
      Welcome to <br></br>
      devMeet
      </div>
      <p className={styles.para}>Need an extra member for <br></br>
      your hackathon or startup? <br></br>
      Find fellow developers and like <br></br>
      minded people on devMeet</p>
      <Link href={"/signup"}>
        <button className={styles.button7}>Get Started</button>
      </Link>
    </div>
    <div className={styles.imageCon}>
    <Image src={left} width={500} height={500} />
    </div>
  </div>
  </div>
  );
}

export default Home;

