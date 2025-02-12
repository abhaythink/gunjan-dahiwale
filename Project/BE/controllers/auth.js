import UserProfile from "../models/userProfile.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signup = async(req, res) => {
    try{
        const {name, email, password, status} = req.body;
        const salt = bcrypt.genSalt(password, 10);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log("Password received:", password);
        console.log("Type of password:", typeof password);

        const newUser = new UserProfile({
            name, email, password: hashedPassword, status
        })

        await newUser.save();
        res.status(201).json({message: "User registered succesfully"})
    }
    catch(err){
        res.json({err: err.message});
    }
}

export const login = async(req, res) => {
    try{
        const {email, password} = req.body;
        const user = await UserProfile.findOne(email);
        if(!user)
            res.status(404).json({error: "User not foound"});

        const isEqual = bcrypt.compare(password, user.password);
        // if(!isEqual)
        //     res.json({error: "Wrong password"});
        // jwt.sign({
        //     email: 
        // })

    } catch(err){
        res.status(500).json({error: err.message})
    }
}