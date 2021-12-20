require("dotenv").config();

const jwt = require ("jsonwebtoken");

const verifyToken = (token)=>{
    return jwt.verify(token, process.env.jwt_privet_key);
}

module.exports = async (req,res,next)=>{

    const bearerToken = req?.headers?.authorization;
    console.log(bearerToken);
    if(! bearerToken || ! bearerToken.startsWith("Bearer ")){
        return res.json({status:"failed", message: "token is not correct"});

    }

    const token = bearerToken.split(" ")[1];

    const user = verifyToken(token);
    
    

    if(! user){
        return res.json({status:"failed", message: "token is not correct"});

    }

    req.user = user;

    return next();






}