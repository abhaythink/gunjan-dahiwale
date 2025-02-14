import express from 'express';
import { body } from 'express-validator';
import UserProfile from '../models/userProfile.js';
import {signup, login} from '../controllers/auth.js';
import { createUser, getUser } from '../controllers/user.js';
import {authorizationMiddleware, jwtMiddleware} from '../auth/authMiddeware.js';

const router = express.Router();

router.post('/signup', [
    body('email')
        .isEmail()
        .withMessage('Enter a valid mail')
        .normalizeEmail()
        .custom(async (value, { req }) => { 
            const userDoc = await UserProfile.findOne({ where: { email: value } }); 
            if (userDoc) {
                return Promise.reject('Email already exists');
            }
        }),
    body('password').trim().isLength({min: 5}),
    body('name').trim().not().isEmpty()
], signup);

router.post('/login',[
    body('email')
        .isEmail()
        .withMessage('Enter a valid mail')
        .normalizeEmail()
        .custom(async (value, { req }) => { 
            const userDoc = await UserProfile.findOne({ where: { email: value } }); 
            if (userDoc) {
                return Promise.reject('Email already exists');
            }
        }),
    body('password').trim().isLength({min: 5}),
    body('name').trim().not().isEmpty()
], login);

router.post('/user', createUser);

router.get('/users', jwtMiddleware, authorizationMiddleware('admin'), getUser);

export default router;