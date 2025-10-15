import { Router} from 'express';
import { CreateAdoptionController, DeleteAdoptionController, GetAdoptionByIdController, GetAllAdoptionsController } from '../controllers/adoptions.controller.js';

const router = Router();

router.get('/',GetAllAdoptionsController);
router.get('/:id', GetAdoptionByIdController);
router.post('/:uid/:pid',CreateAdoptionController);
router.delete('/:id', DeleteAdoptionController);

export default router;