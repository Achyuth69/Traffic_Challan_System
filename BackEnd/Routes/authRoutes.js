const express = require("express"); 
const { registerUser, loginUser } = require("D:/Traffic Challan System/BackEnd/controllers/authController"); 

const router = express.Router(); 

router.post("/register", registerUser); 
router.post("/login", loginUser); 

module.exports = router;
