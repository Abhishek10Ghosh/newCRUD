const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");


// router.get("/",(req,res) => {
//     console.log("connect");
// });

// register user

router.post("/register",async(req,res) => {
    // console.log(req.body);
    const {name,email,age,mobile,work,add,desc} = req.body;

    if(!name || !email || !age || !mobile || !work || !add || !desc){
        res.status(404).json("please fill all the data");
    }

    try {
        
        const preuser = await users.findOne({email:email}); //check for unique emails in database
        console.log(preuser);

        if(preuser){
            res.status(404).json("the user with this Email id is already present");
        }else{
            const adduser = new users({
                name,email,age,mobile,work,add,desc   // can write as name:name .........but if it is same can write in this way as well
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }


    } catch (error) {
        res.status(404).json(error);
    }
})

// get user data

router.get("/getdata",async(req,res)=>{
    try {
        const userdata = await users.find();
        res.status(201).json(userdata);
        console.log(userdata);
    } catch (error) {
        res.status(404).json(error);
    }
})

module.exports = router;
