const THIRTY_MINUTES = 1000 * 60 * 3;
const DEFAULT_SAULT_ROUNDS = 10;
export const MONGO_USER = process.env.MONGO_USER;
export const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
export const MONGO_URI = process.env.MONGO_URI;
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRES_TIMER =
    Number(process.env.JWT_EXPIRES_TIMER) || THIRTY_MINUTES;
export const BCRYPT_SALT_ROUNDS =
    Number(process.env.BCRYPT_SALT_ROUNDS) || DEFAULT_SAULT_ROUNDS;
