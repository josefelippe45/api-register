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

    public static INVALID_ID: BaseErrorInput = {
        status: BaseErrorStatus.BAD_REQUEST,
        message: 'Id is invalid!',
    };

    public static ID_NOT_FOUND: BaseErrorInput = {
        status: BaseErrorStatus.BAD_REQUEST,
        message: 'Id not found!',
    };

    public static EMPTY_PHONE: BaseErrorInput = {
        status: BaseErrorStatus.BAD_REQUEST,
        message: 'User must have at least one phone',
    };

    public static INVALID_PHONES: BaseErrorInput = {
        status: BaseErrorStatus.BAD_REQUEST,
        message: 'All phones must be valid',
    };

    public static INVALID_EMAIL: BaseErrorInput = {
        status: BaseErrorStatus.BAD_REQUEST,
        message: 'Email must be valid',
    };

    public static INVALID_PASSWORD: BaseErrorInput = {
        status: BaseErrorStatus.BAD_REQUEST,
        message:
            'Password should contain at least 8 character, one digit, one uppercase and one lowercase letter',
    };
}
