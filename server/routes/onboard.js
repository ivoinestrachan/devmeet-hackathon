const route = require('express').Router();
const auth = require('../middleware/auth.js');
const pool = require('../db.js');
const validInfo = require('../middleware/validinfo.js');
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'ashxd', 
    api_key: '864123271549866', 
    api_secret: 'll_dpW7JcEp2z3XGi8l-AdMUGqA' 
  });


route.post('/onboard',auth,validInfo, async(req,res) => {
    try {
        const {user_id,full_name,gender,primary_skill,country,socials} = req.body;
        const files = req.files.photo;
        let imagePath = "";
        cloudinary.uploader.upload(files.tempFilePath,(err,result)=>{
            console.log(result);
            imagePath = result.url;
        })
        const userid = await pool.query("SELECT * FROM users WHERE user_id = $1",[user_id]);
        //checks if users tries to send wrong user id
        if (userid.rows.length != 1) return res.status(400).send("Wrong user id, please re-login ");

        const addedUser = await pool.query('INSERT INTO userData (user_id,full_name,imagePath,gender,primary_skill,country,socials) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *',[
            user_id,
            full_name,
            imagePath,
            gender,
            primary_skill,
            country,
            socials
        ])

        res.status(200).send({message:"successfully added user",user:addedUser});
    } catch (error) {
        console.log(error);
        res.status(500).send("server error please try again later");
    }
})
module.exports = route;