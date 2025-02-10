import { createUser, getAllusers,getUserByid, createOrder, updateUser, deleteUserById} from "../controller/user.js";
import express from 'express';

const router = express.Router();

router.post('/users', createUser);

router.get('/users', getAllusers);

router.get('/users/:userId', getUserByid);

router.put('/users/:userId', updateUser);

router.delete('/users/:userId', deleteUserById);

router.post('/:userId/order', createOrder);

export default router;