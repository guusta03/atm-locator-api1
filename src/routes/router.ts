import { Router } from 'express';
import { ATMLocationController } from '../controllers/atm-locations-controller';
import { CreatenewUserController } from '../controllers/user-controller';
import { Private } from '../../src/middlewares/auth';

export const router = Router();

router.get('/atm', Private, new ATMLocationController().getTMS);
router.post('/create-new-user', new CreatenewUserController().create);
router.post('/authenticate', new CreatenewUserController().authenticate);