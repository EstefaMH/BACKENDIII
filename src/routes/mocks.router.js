import { Router } from 'express';
import { mocking50UsersController, mockingPetsController, mockingUsersController, mocksGenerateDataController } from '../controllers/mocks.controller.js';

const router = Router();


router.get('/mockingpets', mockingPetsController);
router.get('/mockingusers', mocking50UsersController);
router.get('/mockingusers/:quantity', mockingUsersController);
router.post('/generateData', mocksGenerateDataController);

export default router;
