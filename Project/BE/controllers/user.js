import UserProfile from "../models/userProfile.js";

export const createUser = async(req, res) => {
    try{
        const {name, email, password, status} = req.body;
        if(!password)
            return res.json({message: "Password is required"})
        const user = await UserProfile.create({name, email, password, status});
        res.status(201).json(user);
    } catch(error) {
        console.log(error);
        res.json({error});
    }
}

export const getUser = async(req, res) =>{
    try{
        const user = await UserProfile.findAll();
        res.json(user);
    } catch(error){
        res.json(error);
    }
}