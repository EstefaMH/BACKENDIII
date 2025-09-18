import { Router } from 'express';
import { GetAllPetsController } from '../controllers/pets.controller.js';

const router = Router();


router.get('/',GetAllPetsController);



export default router;
