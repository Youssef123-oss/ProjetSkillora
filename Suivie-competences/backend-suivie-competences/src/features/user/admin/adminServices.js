import User from './user.model.js';
import bcrypt from 'bcrypt';

export const register = async (userData) => {
  const existingUser = await User.findByEmail(userData.email);
  if (existingUser) {
    throw new Error('Email déjà utilisé');
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const newUser = await User.create({
    ...userData,
    password: hashedPassword,
  });

  return newUser;
};
