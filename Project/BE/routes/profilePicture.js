import express from 'express';
import { getProfilePicture, deleteProfilePicture, uploadPicture } from '../controllers/profilePicture.js';
const router = express.Router();

router.post('/', uploadPicture);

router.get('/:id', getProfilePicture);

router.delete('/:id', deleteProfilePicture);

export default router;