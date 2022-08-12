import Http from './Http';
import HttpErrorMessages from './error/HttpErrorMessages';
import { Request, Response } from 'express';
import SignUpController from '../controller/SignUpController';

export default class Router {
    constructor(readonly http: Http) {
        this.configure();
    }
    public configure(): void {
        this.http.on(
            '/register',
            'post',
            async (request: Request, response: Response) => {
                try {
                    await new SignUpController().execute(request);
                    response.status(201).json('created');
                } catch (error) {
                    response.status(400).json({ error: error.message });
                }
            }
        );
        this.http.on(
            '*',
            'get',
            async (_request: Request, response: Response): Promise<void> => {
                const error = HttpErrorMessages.NOT_FOUND;
                response.status(error.status).json(error.message);
            }
        );
    }
}
