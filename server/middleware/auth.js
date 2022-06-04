const jwt = require('jsonwebtoken');
require ("dotenv").config();

module.exports = function(req, res, next) {

  try{

    const token = req.header("token");

    if(!token) {

      return res.status(401).json("No token provided");
    }
    const payload = jwt.verify(token, process.env.jwtSecret);

    req.user = payload.user;
    
  } catch(err){
    console.error(err.message);
    res.status(401).json("Not Authorized");
  }
  next();
}