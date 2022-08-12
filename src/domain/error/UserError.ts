import { BaseErrorStatus } from '../enum/BaseErrorStatus';
import type { BaseErrorInput } from '../type/BaseErrorInput';
import BaseError from './BaseError';

export default class UserError extends BaseError {
    public static ALREADY_EXISTS: BaseErrorInput = {
        status: BaseErrorStatus.CONFLICT,
        message: 'User already exists!',
    };
}
