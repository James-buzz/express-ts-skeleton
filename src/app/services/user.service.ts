import { findUserById } from '../data/dao/user.dao';
import User from '../data/models/user.model';
import CannotFindUserError from '../errors/dao/cannotFindUser.error';

export const getUser = async (userId: number): Promise<User> => {
  const user = await findUserById(userId);

  if (user == null) throw new CannotFindUserError(`${userId}`);

  return user;
};
