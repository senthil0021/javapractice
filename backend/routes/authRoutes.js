import express from 'express';
import User from '../model/User.js';
import jwt from 'jsonwebtoken';




const router = express.Router();


router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Missing Fields' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ error: 'User Already exists' });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();
    return res.status(201).json({ message: 'User Registered successfully' });
});


router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ message: "Email or password missing" });
    }
  
    try {
      const existingUser = await User.findOne({ email });
  
      if (!existingUser) {
        return res.status(400).json({ message: "User not found" });
      }
  
     
      const isMatch = await existingUser.comparePassword(password);
      
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      
      const token = jwt.sign({ id: existingUser._id, email: existingUser.email }, "Secret", { expiresIn: "1h" });
  
      res.status(200).json({ token, user: existingUser });
    } catch (error) {
      console.error("Error in login route:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
export default router;
