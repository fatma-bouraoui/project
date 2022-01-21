const express = require ("express");
const router = express.Router();
const User = require ("../models/user");
const bcrypt = require ("bcrypt");
const jwt = require ("jsonwebtoken");
const {loginRules, registerRules, validation} = require ("../middelware/validator");

const isAuth = require ("../middelware/passport");
const res = require("express/lib/response");
const req = require("express/lib/request");
const user = require("../models/user");
//router.get("/",(req, res) =>  {

    //res.send("hello world");

//});




//register
router.post ("/register",registerRules(),validation, async (req ,res) =>{
    const {name, lastName, email, password, role, phone, description} = req.body;
    try {

        const user = new User({name, lastName, email, password, role, phone, description});

        //check if the email exist
        const searchedUser = await User.findOne({email});

        if(searchedUser){
            return res.status(400).send({ msg: "email already exist" });
        };


        //hash password
        const salt = 10 ;
        const genSalt = await bcrypt.genSalt(salt);
        const hashedPassword=await bcrypt.hash(password, genSalt);
        console.log(hashedPassword);
        user.password = hashedPassword;
      

      

        //save the user
        await user.save();
        res.status(200).send({ user , msg:"user is saved" });

    } catch (error) {
        res.status(500).send("cannot save the user");
    }
});




//login
router.post("/login",loginRules(),validation, async (req,res) => {
    const { email, password } = req.body;
    try {
        //find if the user exist
        const searchedUser= await User.findOne({email});
        //if the email not exist
        if (!searchedUser){
            return res.status(400).send({msg:"bad credential"});
        }
        //passwords are equals
        const match =await bcrypt.compare(password, searchedUser.password);
        if(!match){
            return res.status(400).send({msg:"bad credential"});
        }

        //creer un token
        const payload={
            _id:searchedUser._id,
        };
        const token= await jwt.sign(payload , process.env.SecretOrKey ,{ expiresIn: 3600,});
        console.log(token);

        //send the user
        if(match){
            res.status(200).send({user:searchedUser, msg:"success", token: `Bearer token ${token}` });
        }

    } catch (error) {
        res.status(500).send({msg:"can not get the user"});
        
    }

});


router.get("/current",isAuth,(req , res) =>{
    res.status(200).send({user : req.user});
});



//get all users
router.get("/",async(req,res) => {
    try {
      const result= await user.find() ;
      res.send({result, msg:"geeting contacts succefuly"});
    } catch (error) {
        res.status(400).send({msg:"can not get contact"});
    }
});

module.exports = router;