import { Router } from 'express';
import { GetAllUsersController } from '../controllers/users.controller.js';

const router = Router();


router.get('/', GetAllUsersController);


export default router;