const express = require("express");

const Product = require("../models/post.model");

const router = express.Router();



router.post("/", async (req,res)=>{
    try{
        const user = req.user;
        console.log("user",user);
        const product = await Product.create({
            title:req.body.title,
            body:req.body.body,
            user: user.user._id
        });

        return res.json({product,user});

    }catch(e){
        return res.status(500).json({status: "failed", message: e.message});
    }
    


});

router.get("/", async (req,res)=>{
    try{
        const product = await Product.find().populate("user").lean().exec();

        return res.send(product);

    }catch(e){
        return res.status(500).json({status: "failed", message: e.message});
    }
    


});

module.exports= router;