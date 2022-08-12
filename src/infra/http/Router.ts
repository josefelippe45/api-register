import Http from './Http';
import HttpError from '../../domain/error/HttpError';
import { Request, Response } from 'express';
import SignUpController from '../controller/SignUpController';
import BaseError from '../../domain/error/BaseError';

export default class Router {
    constructor(readonly http: Http) {
        this.configure();
    }
    public configure(): void {
        this.http.on(
            '/register',
            'post',
            async (request: Request, response: Response) => {
                const createdUser = await new SignUpController().execute(
                    request
                );
                response.status(201).json(createdUser);
            }
        );
        this.http.on('*', 'get', async (): Promise<void> => {
            throw new BaseError(HttpError.NOT_FOUND);
        });
    }
}
