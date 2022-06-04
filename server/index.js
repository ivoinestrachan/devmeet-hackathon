
  
const express = require('express');
const app = express();
const fileupload = require('express-fileupload');

app.use(express.json());
app.use(fileupload({
    useTempFiles:true
}))

app.use("/auth", require("./routes/devmeetAuth.js"));

app.use("/dashboard", require("./routes/dashboard.js"));

app.use('/onboard',require('./routes/onboard.js'));

app.listen(1338, () => {
    console.log('Server is running on port 1338');
});