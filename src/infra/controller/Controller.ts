import { Request } from 'express';

export default interface Controller {
    execute(request: Request): Promise<unknown>;
}
