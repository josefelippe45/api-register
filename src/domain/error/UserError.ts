import { BaseErrorStatus } from '../enum/BaseErrorStatus';
import type { BaseErrorInput } from '../type/BaseErrorInput';
import BaseError from './BaseError';

export default class UserError extends BaseError {
    public static ALREADY_EXISTS: BaseErrorInput = {
        status: BaseErrorStatus.CONFLICT,
        message: 'User already exists!',
    };

    public static EMPTY_PARAMS: BaseErrorInput = {
        status: BaseErrorStatus.BAD_REQUEST,
        message: 'Email and/or password cannot be empty!',
    };

    public static INVALID_CREDENTIALS: BaseErrorInput = {
        status: BaseErrorStatus.BAD_REQUEST,
        message: 'Email and/or password invalids!',
    };
}
