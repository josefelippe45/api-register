import { Request, Response } from 'express';
export default interface Http {
    on(
        url: string,
        method: string,
        fn: (request: Request, response: Response) => Promise<unknown>
    ): void;
    onPrivate(
        url: string,
        method: string,
        fn: (request: Request, response: Response) => Promise<unknown>
    ): void;
    listen(port: number): void;
}
