import express from 'express';
import { body } from 'express-validator';
import UserProfile from '../models/userProfile.js';
import {signup, login} from '../controllers/auth.js';
import { createUser, getUser } from '../controllers/user.js';

const router = express.Router();

router.post('/signup', [
    body('email')
        .isEmail()
        .withMessage('Enter a valid mail')
        .normalizeEmail()
        .custom(async (value, { req }) => { // ✅ Fixed Arrow Function
            const userDoc = await UserProfile.findOne({ where: { email: value } }); // ✅ Correct Query
            if (userDoc) {
                return Promise.reject('Email already exists');
            }
        }),
    body('password').trim().isLength({min: 5}),
    body('name').trim().not().isEmpty()
], signup);

router.post('/login', login);

router.post('/user', createUser);

router.get('/users', getUser);

export default router;