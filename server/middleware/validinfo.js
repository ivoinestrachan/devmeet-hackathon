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
  }

  next();
};
