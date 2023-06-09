import mysql from 'mysql2/promise';
import { pool } from '../../../config/mysql';
import User from '../models/user.model';
import CannotFindUserError from '../../errors/dao/cannotFindUser.error';
import FailedUserInsertError from '../../errors/dao/failedUserInsertError';
import DatabaseConnectionError from '../../errors/mysql/databaseConnection.error';
import UnexpectedDatabaseError from '../../errors/mysql/unexpectedDatabase.error';
import AppError from '../../errors/error';

export const findUserById = async (id: number): Promise<User | null> => {
  try {
    const statement = `
    SELECT * FROM users
    WHERE id = ?
  `;
    const [rows] = await pool.query(statement, [id]);
    const result = rows as mysql.RowDataPacket;

    console.log(result.length);

    if (result.length < 1) throw new CannotFindUserError(`${id}`);
    const row = result[0];

    return row;
  } catch (err) {
    if (!(err instanceof Error) || err instanceof AppError) throw err;
    if (err.message === 'ECONNREFUSED') {
      throw new DatabaseConnectionError();
    } else {
      throw new UnexpectedDatabaseError();
    }
  }
};

export const insertUser = async (name: string, password: string, email: string): Promise<number> => {
  try {
    const statement = `
        INSERT INTO users (name, password, email)
        VALUES (?,?,?)
    `;
    const [result] = await pool.query(statement, [name, password, email]);
    const insertId = (result as mysql.OkPacket).insertId;
    if (!insertId) throw new FailedUserInsertError({ name, password, email });

    return insertId;
  } catch (err) {
    if (!(err instanceof Error) || err instanceof AppError) throw err;
    if (err.message === 'ECONNREFUSED') {
      throw new DatabaseConnectionError();
    } else {
      throw new UnexpectedDatabaseError();
    }
  }
};
