const {Violation} = require('../models/violation');
const {Support} = require('../models/support');

const createViolation = async(req, res) => {
    try{
        const {linkURL, ViolationType, description} = req.body;
        const violation = await Violation.create({linkURL, ViolationType, description});
        
        res.status(201).json({message: 'Violation created successfully'})
    }
    catch(error){
        console.log(error);
        res.json({error: "Error while creating violation"})
    }
}

const getViolation = async(req, res) => {
    try{
        const allViolations = await Violation.findAll();
        const count = allViolations.length;
        res.status(201).json({allViolations, count})
    }
    catch(err) {
        res.json({message: 'Error occured while fetching violations'});
    }
}

const CreateSupport = async(req, res) => {
    try{
        const {name, email, message} = req.body;
        const supportDetails = await Support.create({name, email, message});
        res.status(201).json({supportDetails});
    }
    catch(err){
        console.log(err);
        res.json({message: 'Error occured while creating your message'});
    }
}

module.exports = {createViolation, getViolation, CreateSupport}