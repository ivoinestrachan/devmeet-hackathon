const express = require('express');
const app = express();
const fileupload = require('express-fileupload');
const cors = require('cors');


app.use(cors());

app.use(express.json());
app.use(fileupload({
    useTempFiles:true
}))

app.use("/auth", require("./routes/devmeetAuth.js"));

app.use("/dashboard", require("./routes/dashboard.js"));

app.use('/onboard',require('./routes/onboard.js'));

app.listen(1348, () => {
    console.log('Server is running on port 1348');
});