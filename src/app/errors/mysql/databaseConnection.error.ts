import AppError from '../error';

class DatabaseConnectionError extends AppError {
  constructor() {
    super({ mysql: 'Could not connect to the database' }, 500);
    this.name = 'DatabaseConnectionError';
  }
}

export default DatabaseConnectionError;
