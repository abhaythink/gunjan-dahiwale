import UserProfile from "../models/userProfile.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const signup = async (req, res) => {
    try {
        const { name, email, password, status, role } = req.body;
        console.log(role);
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new UserProfile({
            name, email, password: hashedPassword, status, role
        })

        await newUser.save();
        res.status(201).json({ message: "User registered succesfully" })
    }
    catch (err) {
        res.json({ err: err });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email);
        
        // const user = { id: 1, email, role: 'admin' }; 
        const user = await UserProfile.findOne({where: { email }});
        if (!user)
            res.status(404).json({ error: "User not foound" });
        console.log( "role",user.role);
        

        const isEqual = bcrypt.compare(password, user.password);
        if (!isEqual)
            res.json({ error: "Wrong password" });
        const accessToken = jwt.sign(
            { id: user.id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '15m' }    
          );
        
          // Refresh Token (Long-lived)
          const refreshToken = jwt.sign(
            { id: user.id },
            process.env.REFRESH_SECRET,
            { expiresIn: '7d' }
          );    
        res.json({ accessToken, refreshToken });
        
    } catch (err) {
        res.json({ error: err.message })
    }
}