import User from "../models/user.js";
import Order from "../models/order.js";

export const createUser = async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const user = await User.create({ name, email, phone });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const getUserByid = async (req, res) => {
    try {
        const userId = req.params;
        const user = await User.findOne(userId);
        if (!user)
            return res.status(404).json({ error: 'User not found' });
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getAllusers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        const { name, email, phone } = req.body;

        const userId = req.params.id;
        const user = await User.findByPk(userId);

        if (!user)
            return res.status(404).message('User Not found');
        user.name = name;
        user.email = email;
        user.phone = phone;
        await User.afterSave();
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByPk(userId);
        console.log(userId);
        
        if (!user)
            return res.status(404).json("User not found");
        user.destroy();
        res.json("User deleted successfully");
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createOrder = async (req, res) => {
    try {
        const { userId } = req.params;
        const { totalPrice, status } = req.body;

        const user = User.findByPk(userId);
        if (!user)
            return res.status(404).json({ error: "User not found" });

        const order = await Order.create({ totalPrice, status });
        res.status(201).json(order);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getOrder = async(req, res) => {
    try {
        const order = Order.findAll();
        res.json(order);
    }
    catch(error) {
        res.status(500).json({error: error.message});
    }
}