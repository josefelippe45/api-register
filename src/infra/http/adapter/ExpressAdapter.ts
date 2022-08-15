import express, { Express, Request, Response } from 'express';
import HandleBaseError from '../../../domain/error/HandleBaseError';
import Http from '../Http';
import VerifyJWT from '../middleware/VerifyJWT';
import type { HttpRequest } from '../../../domain/type/HttpRequest';

export default class ExpressAdapter implements Http {
    private app: Express;
    private verifyJWT: VerifyJWT;
    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.verifyJWT = new VerifyJWT();
    }

    public on(url: string, method: string, fn: HttpRequest): void {
        this.app[method](url, this.onCallback(fn));
    }
    public onPrivate(url: string, method: string, fn: HttpRequest): void {
        this.app[method](url, this.verifyJWT.execute, this.onCallback(fn));
    }

    public listen(port: number): void {
        this.app.listen(port);
    }

    private onCallback(
        fn: HttpRequest
    ): (request: Request, response: Response) => Promise<void> {
        return async (request: Request, response: Response): Promise<void> => {
            try {
                await fn(request, response);
            } catch (error) {
                console.info(error);
                const { response: errorResponse, status } = new HandleBaseError(
                    error
                ).getError();
                response.status(status).json(errorResponse);
            }
        };
    }
}
