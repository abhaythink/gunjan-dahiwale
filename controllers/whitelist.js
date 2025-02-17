const {Whitelist} = require('../models/whitelist');

const createWhitelist = async(req, res) => {
    try{
        const {link} = req.body;
        const whitelist = await Whitelist.create({link});
        
        res.status(201).json({message: 'Whitelist created successfully'})
    }
    catch(error){
        console.log(error);
        res.json({error: "Error while creating whitelist"})
    }
}

const getWhitelist = async(req, res) => {
    try{
        const allWhitelists = await Whitelist.findAll();
        res.status(201).json({allWhitelists})
    }
    catch(err) {
        res.json({message: 'Error occured while fetching whitelists'})
    }
}

const deleteWhitelist = async(req, res) => {
    try{
        const whitelistId = req.params.id;
        
        if(!whitelistId)
            return res.status(404).json({message: "Whitelist not found"});
        const whitelist = await Whitelist.findByPk(whitelistId)
        whitelist.destroy();
        res.status(201).json({message: "Whitelist deleted successfully"});
    }
    catch(err) {
        res.json({message: "Error occured while deleteing"});  
        console.log(err);
         
    }
}

module.exports = {createWhitelist, getWhitelist, deleteWhitelist};