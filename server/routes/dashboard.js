const router = require('express').Router();
const pool = require('../db.js');
const auth = require('../middleware/auth.js');

router.get("/", auth, async (req, res) => {
  try {
   const user = await pool.query("SELECT user_name FROM users WHERE user_id = $1", [

    req.user
  ]);
  res.json(user.rows)
   
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;