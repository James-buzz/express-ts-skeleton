import { Router } from 'express';
import userController from '../controllers/user.controller';

const routes = Router().use(userController);

export default routes;
