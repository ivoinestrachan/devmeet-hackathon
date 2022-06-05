import React from 'react';
import styles from "../styles/onboard.module.css"
import Select from 'react-select'

const About = ({formData, setFormData}) => {
  const Gender = [
    { label: 'male', value: 1 },
    { label: 'female', value: 2 },
    { label: 'non-binary', value: 3 },
    { label: 'dosent matter', value: 3 },
  ]

  const Country = [
    { label: 'React', value: 1 },
    { label: 'Nextjs', value: 2 },
    { label: 'Vuejs', value: 3 },
  ]
  return (
    <div>
     <form className={styles.container}>
       <div>
       <label>Name</label>
       <div>
      <input type="text" 
      placeholder="Full Name"
       className={styles.input}
       value={formData.fullname}
       onChange={(e) => setFormData({...formData, fullname: e.target.value})}
       />
      </div>
  </div>
  <div>
       <label>Gender</label>
     <Select
    defaultValue={[Gender[4], Gender[4]]}
    isMulti
    name="gender"
    options={Gender}
    className={styles.select}
    classNamePrefix="select"
    placeholder="Gender"
    value={formData.gender}
    onChange={(e) => setFormData({...formData, gender: e})}
  />
  </div>
  <div>
       <label>Country</label>
     <Select
    defaultValue={[Country[3], Country[3]]}
    isMulti
    name="country"
    options={Country}
    className={styles.select}
    classNamePrefix="select"
    placeholder="Country"
    value={formData.country}
    onChange={(e) => setFormData({...formData, country: e})}
  />
  </div>
     </form>
    </div>
  );
}

export default About;
