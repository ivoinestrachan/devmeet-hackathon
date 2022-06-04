const router = require('express').Router();
const pool = require('../db.js');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator.js');
const validInfo = require('../middleware/validinfo.js');
const auth = require('../middleware/auth.js');


//signup
router.post('/signup',validInfo, async(req, res) => {
    try{
     const {username, password, comfirmpassword} = req.body;
    const user = await pool.query("SELECT * FROM users WHERE user_name = $1", [
      username
    ]);
          console.log(user.rows) 
   

    if(user.rows.length !== 0) {
      return res.status(401).send("User already exists");
    
  }


  const saltRound = 10;
  const salt = await bcrypt.genSalt(saltRound);
  const bcryptPassword = await bcrypt.hash(password, salt);

  const bcryptComfirmpassword = await bcrypt.hash(comfirmpassword, salt);

  const  newUser = await pool.query("INSERT INTO users (user_name, user_password, user_comfirmpassword) VALUES ($1, $2, $3) RETURNING *", [ 
    username,
    bcryptPassword,
    bcryptComfirmpassword
  ]);

  const token = jwtGenerator(newUser.rows[0].user_id);
  res.json({token});


    }catch(err){
         console.error(err.message);
   res.status(500).send("Server Error");

    }
     });    
    
//login 
router.post('/login',validInfo, async(req, res) => {
try{
  const {username, password} = req.body;

  const user = await pool.query("SELECT * FROM users WHERE user_name = $1", [
    username
  ]);

  if(user.rows.length === 0) {
    return res.status(401).json("Password or Username is incorrect");
   };

   const validPassword = await bcrypt.compare(password, user.rows[0].user_password);

    if(!validPassword) {

      return res.status(401).json("Password is  incorrect");
    }

    const token = jwtGenerator(user.rows[0].user_id);
    res.json({token});
}catch(err){
  console.error(err.message);
  res.status(500).send("Server Error");
}
});

router.post("/verify", auth, async(req, res) => {
  try{
    res.json(true); 
  }catch(err){
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;