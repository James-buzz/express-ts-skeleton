import AppError from '../error';

class CannotFindUserError extends AppError {
  constructor(userId: string) {
    super({ userId: `Cannot find user with id ${userId}` }, 404);
    this.name = 'CannotFindUserError';
  }
}

export default CannotFindUserError;
