import { Router } from 'express';
import helloController from '../controllers/hello.controller';

const routes = Router().use(helloController);

export default routes;
