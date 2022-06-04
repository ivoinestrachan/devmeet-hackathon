import styles from "../styles/Home.module.css"

const Home = () => {
  return (
    <div className={styles.container}>
    <h2>Todo list :</h2>
          <div className={styles.flex}>
          <li>Design</li> <span><input type="checkbox" /></span>
          </div>
          
          <div className={styles.flex}>
           <li>Backend</li> <span><input type="checkbox" /></span>
           </div>
           
           <div className={styles.flex}>
            <li>Frontend</li> <span><input type="checkbox" /></span>
            </div>
  </div>
  );
}

export default Home;

