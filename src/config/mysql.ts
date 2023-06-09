import { createPool, Pool } from 'mysql2/promise';
import { environment as config } from './environment';

export const pool: Pool = createPool({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
