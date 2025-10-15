import { Router } from 'express';
import { createUserController, deleteUserController, getAllUsersController, updateUserController } from '../controllers/users.controller.js';

const router = Router();


router.get('/', getAllUsersController);
router.put('/:id', updateUserController);
router.post('/', createUserController);
router.delete('/:id', deleteUserController);



export default router;