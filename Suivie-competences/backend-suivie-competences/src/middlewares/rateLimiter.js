import rateLimit from 'express-rate-limit';

export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // max 100 requêtes par IP
  message: {
    success: false,
    message: 'Trop de requêtes - réessayez plus tard.',
  },
});
