const express = require("express")
const router = express.Router();
const jwt = require('jsonwebtoken')
const JWT_SECRET = "shfgsdhfnsjdgnshvbf";
const {Offer} = require("../models/offer")

const getUserByToken = (token)=>{
    return new Promise((resolve,reject)=>{
        if(token){
              let Data
            try{
                Data = jwt.verify(token,JWT_SECRET);
                resolve(Data);
            } catch(err){
                reject("Invalid Token!")
            }
        }else{
            reject('There is no Token')
        }
    })
}



router.post('/create',async(req,res)=>{
    getUserByToken(req.headers.authorization).then((user)=>{
        Offer.create({...req.body, username: user.username}).then((offer)=>{
            res.status(200).send(offer);
        }).catch((err)=>{
            res.status(400).send({message: err.message})
        })
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

router.post("/list", async(req, res)=> {
    const validOffers = [];
    Offer.find().then((offers)=> {
        offers.filter((offer)=> {
            const rules = offer.target.split("and")
            rules.forEach((rule)=> {
                let ruleKey = {}
                if(rule.includes(">")) {
                    ruleKey = {key: rule.trim().split(">")[0].trim(), value: parseInt(rule.trim().split(">")[1]) }
                    if(req.body[ruleKey.key] > ruleKey.value) {
                        validOffers.push(offer)
                        console.log()
                    }
                    
                } else {
                    ruleKey = {key: rule.trim().split("<")[0], value: rule.trim().split("<")[1]}
                    if(req.body[ruleKey.key] < ruleKey.value) {
                        validOffers.push(offer)
                    }
                    console.log(validOffers)
                }
            })
        })
        res.status(200).send(validOffers);
    }).catch(()=> {
        res.status(500).send("Internal Server Error")
    })
});

router.put("/update/:id",async(req,res)=>{
    getUserByToken(req.headers.authorization)
    .then((user)=>{
        Offer.findOneAndUpdate(
            {_id:req.params.id, username:user.username},
            req.body,
            {new: true}
        )
        .then((updatedOffer)=>{
            if(!updatedOffer){
                return res.status(404).send({message: "offer not found or unauthorizesd"});
            }
            res.status(200).send(updatedOffer);
        })
        .catch((err)=>{
            res.status(400).send({message: err.message});
        });
    })
    .catch((err)=>{
        res.status(400).send(err);
    });
});

router.delete("/delete/:id",async(req,res)=>{
getUserByToken(req.headers.authorization)
.then((user)=>{
    Offer.findOneAndDelete({
        _id :req.params.id,
        username: user.username,
    })
    .then((deleteOffer)=>{
        if(!deleteOffer){
            return res.status(404).send({message:"Offer not found or unauthorized"});
        }
        res.status(200).send("Deleted Successfully" );
    })
    .catch((err)=>{
        res.status(400).send({message:err.message});
    });
})
.catch((err)=>{
    res.status(400).send(err);
});
});

module.exports = router;