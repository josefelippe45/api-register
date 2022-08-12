import { Request, Response } from 'express';
export default interface Http {
    on<TResponse>(
        url: string,
        method: string,
        fn: (request: Request, response: Response) => Promise<TResponse>
    ): void;
    listen(port: number): void;
}
