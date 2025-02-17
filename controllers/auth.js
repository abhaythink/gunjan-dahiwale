const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        if(!email || !password)
            return res.json({message: "Email and password are required"})
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            name, email, password: hashedPassword, role
        })

        await newUser.save();
        res.status(201).json({ message: "User registered succesfully" })
    }
    catch (err) {
        res.json({message: 'Please fill necessary details'});
        console.log(err); 
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const user = await User.findOne({where: { email }});
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
           
        res.json({ accessToken });
        
    } catch (err) {
        console.log(err);  
        res.json({message: "Something went wrong, Try again"});
    }
}

module.exports = {signup, login}