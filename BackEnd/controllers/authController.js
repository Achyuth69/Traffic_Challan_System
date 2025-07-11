const User = require("D:/Traffic Challan System/BackEnd/models/User");
const bcrypt = require("bcryptjs"); 
const jwt = require("jsonwebtoken"); 

// Register User
exports.registerUser = async (req, res) => { 
    try { 
        const { name, email, password, role } = req.body; 
        const hashedPassword = await bcrypt.hash(password, 10); 
        
        const user = new User({ name, email, password: hashedPassword, role }); 
        await user.save(); 
        
        res.status(201).json({ message: "User registered successfully" }); 
    } catch (error) { 
        res.status(500).json({ error: "Registration failed" }); 
    } 
}; 

// Login User
exports.loginUser = async (req, res) => { 
    try { 
        const { email, password } = req.body; 
        const user = await User.findOne({ email }); 
        
        if (!user) return res.status(400).json({ message: "User not found" }); 
        
        const isMatch = await bcrypt.compare(password, user.password); 
        
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" }); 
        
        const token = jwt.sign(
            { id: user._id, role: user.role }, 
            process.env.JWT_SECRET, 
            { expiresIn: "1h" }
        ); 
        
        res.json({ token, role: user.role }); 
    } catch (error) { 
        res.status(500).json({ error: "Login failed" }); 
    } 
}; 
