import { HttpErrorStatus } from '../enum/HttpErrorStatus';

export type HttpErrorInput = {
    status: HttpErrorStatus;
    message: string;
};
