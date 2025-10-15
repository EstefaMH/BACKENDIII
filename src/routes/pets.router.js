import { Router } from 'express';
import { CreatePetController, GetAllPetsController } from '../controllers/pets.controller.js';

const router = Router();

router.get('/',GetAllPetsController);
router.post('/',CreatePetController)


export default router;
