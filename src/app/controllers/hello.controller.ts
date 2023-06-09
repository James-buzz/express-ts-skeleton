import { NextFunction, Request, Response, Router } from 'express';

const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ message: 'Hello world' });
});

export default router;
