import React from 'react';
import styles from "../styles/onboard.module.css"
import Select from 'react-select'

const Skills = ({formData, setFormData}) => {

const FrontEnd = [
  { label: 'React', value: 1 },
  { label: 'Nextjs', value: 2 },
  { label: 'Vuejs', value: 3 },
  { label: 'HTML', value: 4 },
  { label: 'CSS', value: 5 },
]

const BackEnd = [
  { label: 'Nodejs', value: 1 },
  { label: 'Postgresql', value: 2 },
  { label: 'Typescript', value: 3 },
  { label: 'Javascript', value: 4 },
]

const Design = [
  { label: 'Figma', value: 1 },
  { label: 'Adobe', value: 2 },
  { label: 'Blender', value: 3 },
]

  return (
    <div>
     <form className={styles.container}>
       <div>
       <label>FrontEnd</label>
     <Select
    defaultValue={[FrontEnd[5], FrontEnd[5]]}
    isMulti
    name="frontend"
    options={FrontEnd}
    className={styles.select}
    classNamePrefix="select"
    placeholder="FrontEnd Skills"
    value={formData.frontend}
    onChange={(e) => setFormData({...formData, frontend: e})}
  />
  </div>
  <div>
       <label>Backend</label>
     <Select
    defaultValue={[BackEnd[5], BackEnd[5]]}
    isMulti
    name="backend"
    options={BackEnd}
    className={styles.select}
    classNamePrefix="select"
    placeholder="BackEnd Skills"
    value={formData.backend}
    onChange={(e) => setFormData({...formData, backend: e})}
  />
  </div>
  <div>
       <label>Design</label>
     <Select
    defaultValue={[Design[3], Design[3]]}
    isMulti
    name="design"
    options={Design}
    className={styles.select}
    classNamePrefix="select"
    placeholder="Design Skills"
    value={formData.design}
    onChange={(e) => setFormData({...formData, design: e})}
  />
  </div>
     </form>
    </div>
  );
}

export default Skills;
