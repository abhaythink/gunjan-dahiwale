import UserProfile from "../models/userProfile.js";

export const createUser = async(req, res) => {
    try{
        const {name, email, password, status} = req.body;
        const user = await UserProfile.create({name, email, password, status});
        res.status(201).json(user);
    } catch(error) {
        res.json({error: error.message});
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