const router = require('express').Router();
const pool = require('../db.js');


//signup
router.post('/signup', async(req, res) => {
    try{
     const {username, password, comfirmpassword} = req.body;
    const user = await pool.query("SELECT * FROM users WHERE user_name = $1", [
      username
    ]);
          console.log(user.rows) 
   

    if(user.rows.length !== 0) {
      return res.status(401).send("User already exists)");
    
  }
    }catch(err){
         console.error(err.message);
   res.status(500).send("Server Error");
    }
     });    
    

module.exports = router;