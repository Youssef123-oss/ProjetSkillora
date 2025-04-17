import db from '../../database/db.js';

const User = {
  async findByEmail(email) {
    const result = await db.query('SELECT * FROM users WHERE email = $1', [
      email,
    ]);
    return result.rows[0];
  },

  async create(userData) {
    const { name, email, password } = userData;
    const result = await db.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, email',
      [name, email, password],
    );
    return result.rows[0];
  },
};

export default User;
