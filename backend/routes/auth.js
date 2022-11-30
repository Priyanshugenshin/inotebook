const express = require("express")
const router = express.Router()
const User = require("../models/Users")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser')
const saltRounds = 10;

const mysecreate = "ilovetoplaygenshin"

const { body, validationResult } = require('express-validator');

//Authenticate a user using: POST "/api/auth/createuser", No login required
router.post('/createuser',[
    body('name','Enter the valid name').isLength({ min: 3 }),
    body('email','Enter correct email').isEmail(),
    body('password','Enter correct password').isLength({ min: 5 }),],
    async (req, res) => {

        // If there is error bad request is send 
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      try {
        // Check whether this user is exist or not 
        let user = await User.findOne({email:req.body.email})
        if (user) {
            return res.status(400).json({error:"Sorry a user is already created with same data"})
        }
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(req.body.password, salt);

        // create a new user 
         user = await User.create({
            name: req.body.name,
            email:req.body.email,
            password: hash,
    
          })
          data = {
            user:{

            }
        }
          var token = jwt.sign(data, mysecreate);
        
          res.json(token)
      } catch(error) {
        console.error(error.message)
        res.status(500).send("error is Occured")
      }
  
    },
  );

  // Authenticate a user using : POST "/api/auth/login" , No login is required
  router.post("/login",[
    body('email','Enter correct email').isEmail(),
    body('password','Password is not blank').exists(),
  ],
  async(req,res)=>{
    // If there is error bad request is send 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        // Check whether this user is exist or not 
        const {email,password} = req.body
        let user = await User.findOne({email})
        if (!user) {
            return res.status(400).json({error:"Please try to login with correct credentials"})
        }
        const passwordCompare = bcrypt.compareSync(password,user.password)
        if(!passwordCompare){
            return res.status(400).json({error:"Please try to login with correct credentials"})
        }

        const data = {
            user:{
                id:user.id
            }
        }
          var token = jwt.sign(data, mysecreate);
        
          res.json({token})
      } catch(error) {
        console.error(error.message)
        res.status(500).send("error is Occured")
      }
    }
  )

    // Authenticate a user using : POST "/api/auth/getuser" , login is required
router.post("/getuser",fetchUser,async(req,res)=>{
    try {
        userId = req.user.id
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Error")
    }
})
  
module.exports = router