module.exports = function(req, res, next) {
  const { username, password } = req.body;

  function validUsername(userUsername) {
    return  (userUsername);
  }

  if (req.path === "/signup") {
    console.log(!username.length);
    if (![username, password].every(Boolean)) {
      return res.json("Missing Credentials");
    } else if (!validUsername(username)) {
      return res.json("Invalid username");
    }
  } else if (req.path === "/login") {
    if (![username, password].every(Boolean)) {
      return res.json("Missing Credentials");
    } else if (!validUsername(username)) {
      return res.json("Invalid Email");
    }
  } else if (req.path === '/onboard'){
    if(![user_id,full_name,gender,primary_skill,country,socials].every(Boolean)){
      return res.json("Missing Input fields");
    }//checks if 
    else if(typeof(full_name) != 'string'||typeof(gender) != 'string'||typeof(primary_skill) != 'string'||typeof(country) != 'string') return res.json("bad request please retry");
  }

  next();
};
