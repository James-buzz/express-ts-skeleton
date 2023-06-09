import { NextFunction, Request, Response, Router } from 'express';
import yup from 'yup';
import { getUser } from '../services/user.service';

const router = Router();

router.get('/user/:id', async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (!id || isNaN(Number(id))) {
    return res.status(404).json({
      error: 'User Id is required',
    });
  }

  try {
    const user = await getUser(Number(id));

    return res.status(200).json({ user: user });
  } catch (err) {
    return next(err); // handled by middlewares/errorHandler
  }
});

router.post('/user', async (req: Request, res: Response, next: NextFunction) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  });

  try {
    await schema.validate(req.body);
  } catch (err) {
    return next(err);
  }
});

export default router;
