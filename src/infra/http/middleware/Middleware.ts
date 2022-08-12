import { NextFunction, Request, Response } from 'express';

export default interface Middleware {
    execute(
        request: Request,
        response: Response,
        next: NextFunction
    ): Promise<void>;
}
