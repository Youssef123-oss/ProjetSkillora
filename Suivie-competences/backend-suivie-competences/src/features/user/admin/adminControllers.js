import * as userService from './user.service.js';

export const registerUser = async (req, res) => {
  try {
    const user = await userService.register(req.body);
    res.status(201).json({ message: 'Utilisateur créé', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
