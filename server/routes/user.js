const express = require("express")
const bcrypt = require("bcrypt")
const router = express.Router();
const jwt = require("jsonwebtoken")
const {User} = require("../models/user")
const JWT_SECRET = "shfgsdhfnsjdgnshvbf";
const salt = 10;


router.post("/signup",async(req,res)=>{

    bcrypt.genSalt(salt, (saltErr, saltValue)=>{
        if(saltErr){
            res.status(401).send("unable to process!!!")
        }else{
            bcrypt.hash(req.body.password, saltValue, (hashErr,hashValue)=>{
                if(hashErr){
                    res.status(401).send("Unable to process");
                }else{
                    User.create({username:req.body.username, password: hashValue, email :req.body.email || ""}).then((user)=>{
                        res.status(200).send("created successfully");
                    }).catch((err)=>{
                        res.status(400).send(err.message)
                    })
                }
            })
        }
    })
});


router.post("/signin", async (req, res)=> {
    User.findOne({username: req.body.username}).then((user)=> {
        if(!user) {
            res.status(401).send("User not exist!")
        } else {
            if(!bcrypt.compareSync(req.body.password, user.password)) {
                res.status(401).send("Invalid Password")
            } else {
                const token = jwt.sign({id: user._id, username: user.username}, JWT_SECRET);
                res.status(200).send({message: "User loggedin successsfully", token: token});
            }
        }
    }).catch((err)=> {
        console.log(err)
    })
});

module.exports = router;