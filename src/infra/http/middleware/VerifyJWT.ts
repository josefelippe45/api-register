import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { JWT_SECRET } from '../../config/Environment';
import Middleware from './Middleware';

export default class VerifyJWT implements Middleware {
    public async execute(
        request: Request,
        response: Response,
        next: NextFunction
    ): Promise<void> {
        const authHeader = request.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            response.status(401).json({ error: 'Token not provided' });
        }
        try {
            await Promise.resolve(jwt.verify(token, JWT_SECRET));
            next();
        } catch (error) {
            response.status(401).json({ error: 'Token invalid' });
        }
    }
}
