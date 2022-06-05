import React,{useState, useCallback} from 'react';
import styles from "../styles/onboard.module.css"
import Skills from "../components/Skills";
import About from "../components/About";
import Socials from "../components/Socials";
import LoadingOverlay from 'react-loading-overlay';


const Onboard = () => {
  const [isActive, setActive] = useState(false)
  const handleButtonClicked = useCallback(() => {
    setActive(value => !value)
  }, [])

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    frontend: "",
    backend: "",
    design: "",
    fullname: "",
    gender: "",
    country: "",
    platform: "",
    social: "",


  })

  const FormTitles = ["Choose Your Skills", "About You", "Enter Your Socials"]
  const FormSemiTitles = ["Meet developers recommended for you.", "Let other coders know who you are.", "Let other coders know who you are."]


  const PageDisplay = () => {
    if (page === 0) {
      return <Skills  formData={formData} setFormData={setFormData}/>
    } else if (page === 1) {
      return <About formData={formData} setFormData={setFormData} />

    } else if (page === 2) {
      return <Socials formData={formData} setFormData={setFormData} />
    }
  }
  return (
    <LoadingOverlay
    active={isActive}
    styles={{
      overlay: (base) => ({
        ...base,
        background: 'black',
        paddingTop: '70px'
      })
    }}
    spinner
    text='Loading your content . . .'
  >
    <div className={styles.container}>
     <div className={styles.progressbar}>
       <div style={{width: page === 0 ? "25%" : page === 1 ? "50%" : "100%"}}>

       </div>
     </div>
     <div className={styles.formContainer}>
    <div className={styles.header}>
      <h1>{FormTitles[page]}</h1>
    </div>
    <div className={styles.semiIntro}>
      <p>{FormSemiTitles[page]}</p>
    </div>
    <div className={styles.body}>
      {PageDisplay()}
    </div>
    <div className={styles.footer}>
      <button
      disabled={page === 0}
      onClick={() => 
      {setPage((currPage) =>
       currPage - 1)}}
      >Prev</button>
      <button 
     
      onClick={() => 
      {
        if (page === FormTitles.length - 1) {
          {handleButtonClicked}
          console.log(formData);
        
        }else{
          setPage((currPage) => currPage + 1)}}
        }
        >
         {page === FormTitles.length - 1? "Submit" : "Next"}
       </button>
    </div>
     </div>
    </div>
    </LoadingOverlay>
  );
}

export default Onboard;
