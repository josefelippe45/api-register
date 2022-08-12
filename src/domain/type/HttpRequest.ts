import { Request, Response } from 'express';

export type HttpRequest = (
    request: Request,
    response: Response
) => Promise<unknown>;
