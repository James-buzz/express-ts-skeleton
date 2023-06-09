import AppError from '../error';

class UnexpectedDatabaseError extends AppError {
  constructor() {
    super({ mysql: 'An unexpected database error occurred' }, 500);
    this.name = 'UnexpectedDatabaseError';
  }
}

export default UnexpectedDatabaseError;
