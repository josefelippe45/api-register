import { BaseErrorStatus } from '../enum/BaseErrorStatus';
import type { BaseErrorInput } from '../type/BaseErrorInput';

export default class BaseError extends Error {
    public readonly status: BaseErrorStatus;
    public readonly message: string;

    constructor(readonly error: BaseErrorInput) {
        super();
        this.message = error.message;
        this.status = error.status;
    }
}
