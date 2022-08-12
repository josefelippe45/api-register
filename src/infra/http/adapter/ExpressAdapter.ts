import express, { Express, Request, Response } from 'express';
import Http from '../Http';

export default class ExpressAdapter implements Http {
    private app: Express;

    constructor() {
        this.app = express();
        this.app.use(express.json());
    }

    public on<TResponse>(
        url: string,
        method: string,
        fn: (request: Request, response: Response) => Promise<TResponse>
    ): void {
        this.app[method](
            url,
            async (request: Request, response: Response): Promise<void> => {
                await fn(request, response);
            }
        );
    }
    public listen(port: number): void {
        this.app.listen(port);
    }
}
