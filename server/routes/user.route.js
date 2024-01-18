import express from 'express';
import userController from '../controllers/user.controller';
import upload from '../middlewares/multer.middleware';
const router=express.Router();
router.route('/register')
    .post(upload.single('avatar'),userController.register)
export default router;