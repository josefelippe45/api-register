import { Request } from 'express';
export default interface Http {
    on<TResponse>(
        url: string,
        method: string,
        fn: (request: Request) => Promise<TResponse>
    ): void;
    listen(port: number): void;
}
