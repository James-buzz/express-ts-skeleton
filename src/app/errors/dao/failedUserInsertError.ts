import AppError from '../error';

class FailedUserInsertError extends AppError {
  constructor(userData: { name: string; password: string; email: string }) {
    super(
      {
        name: `Failed to insert user with name ${userData.name}`,
        password: `Failed to insert user with password ${userData.password}`,
        email: `Failed to insert user with email ${userData.email}`,
      },
      400,
    );
    this.name = 'FailedUserInsertError';
  }
}

export default FailedUserInsertError;
