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
        fn: (request: Request) => Promise<TResponse>
    ): void {
        this.app[method](
            url,
            async (request: Request, response: Response): Promise<void> => {
                const result = await fn(request);
                response.json(result);
            }
        );
    }
    public listen(port: number): void {
        this.app.listen(port);
    }
}
