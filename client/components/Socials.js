import React from 'react';
import styles from "../styles/onboard.module.css"
import Select from 'react-select'

const Socials = ({formData, setFormData}) => {
  const Platforms = [
    { label: 'Instagram', value: 1 },
    { label: 'Github', value: 2 },
    { label: 'LinkedIn', value: 3 },
  ]
  
  return (
    <div>
    <form className={styles.container}>
      <div>
      <label>Social Platform</label>
    <Select
   defaultValue={[Platforms[3], Platforms[3]]}
   isMulti
   name="platform"
   options={Platforms}
   className={styles.select}
   classNamePrefix="select"
   placeholder="Social Platform"
    value={formData.platform}
    onChange={(e) => setFormData({...formData, platform: e})}
 />
 </div>
 <div>
      <label>Social Link</label>
      <div>
      <input type="text"
       placeholder="http://instagram.com" 
       className={styles.input}
        name="social"
        value={formData.social}
     onChange={(e) => setFormData({...formData, social: e.target.value})}
     />
      </div>
 </div>
    <div>Add Another +</div>
    </form>
   </div>
  );
}

export default Socials;
