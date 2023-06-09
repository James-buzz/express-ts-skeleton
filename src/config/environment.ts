import * as production from './environments/production.environment';
import * as debug from './environments/debug.environment';
import * as dotenv from 'dotenv';

dotenv.config(); // todo: may not be needed

let env: Environment;

type Environment = {
  production: boolean;
  db: {
    host: string;
    port: number;
    database: string;
    user: string;
    password: string;
  };
};

if (process.env.ENVIRONMENT === 'production') {
  env = production.environment;
} else env = debug.environment;

export const environment = env;
