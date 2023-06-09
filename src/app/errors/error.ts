type ErrorMap = { [key: string]: string | undefined };

class AppError extends Error {
  public errors: ErrorMap;
  public errorCode: number;

  constructor(errors: ErrorMap, errorCode = 400) {
    super();
    this.errors = errors;
    this.name = 'AppError';
    this.errorCode = errorCode;
  }

  get message() {
    return Object.values(this.errors).filter(Boolean).join(', ');
  }
}

export default AppError;
