import { BaseErrorStatus } from '../enum/BaseErrorStatus';
import type { HttpErrorOutput } from '../type/HttpErrorOutput';
import BaseError from './BaseError';

export default class HandleBaseError {
    private response: { message: string };
    private status: number;

    constructor(private readonly error: Error | BaseError) {}

    public getError(): HttpErrorOutput {
        if (this.error instanceof BaseError) {
            this.response = { message: this.error.message };
            this.status = this.error.status;
            return {
                response: this.response,
                status: this.status,
            };
        }
        return {
            response: this.response,
            status: BaseErrorStatus.INTERNAL_SERVER_ERROR,
        };
    }
}
