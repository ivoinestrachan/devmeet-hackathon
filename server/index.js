
  
const express = require('express');
const app = express();

app.use(express.json());

app.use("/auth", require("./routes/devmeetAuth.js"));

app.use("/dashboard", require("./routes/dashboard.js"));

app.listen(1338, () => {
    console.log('Server is running on port 1338');
});