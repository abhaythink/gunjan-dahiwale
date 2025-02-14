import UserProfile from "../models/userProfile.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        if(!email || !password)
            return res.json({message: "Email and password are required"})
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new UserProfile({
            name, email, password: hashedPassword, role
        })

        await newUser.save();
        res.status(201).json({ message: "User registered succesfully" })
    }
    catch (err) {
        console.log({message: 'Please fill necessary details'});
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const user = await UserProfile.findOne({where: { email }});
        if (!user)
            res.status(404).json({ error: "User not found" });
        

        const isPasswordEqual = bcrypt.compare(password, user.password);
        if (!isPasswordEqual)
            res.status(401).json({ error: "Wrong password" });
        const accessToken = jwt.sign(
            { id: user.id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '15m' }    
          );
        
          const refreshToken = jwt.sign(
            { id: user.id },
            process.env.REFRESH_SECRET,
            { expiresIn: '7d' }
          );    
        res.json({ accessToken, refreshToken });
        
    } catch (err) {
        console.log({message: "Something went wrong, Try again"});
    }
}