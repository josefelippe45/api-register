import { HttpErrorStatus } from '../enum/HttpErrorStatus';
import { HttpErrorInput } from '../type/HttpErrorInput';

export default class HttpError {
    public readonly status: HttpErrorStatus;
    public readonly message: string;

    constructor(readonly error: HttpErrorInput) {
        this.message = error.message;
        this.status = error.status;
    }
}
