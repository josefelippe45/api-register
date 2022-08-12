import { BaseErrorStatus } from '../enum/BaseErrorStatus';
import type { BaseErrorInput } from '../type/BaseErrorInput';
import BaseError from './BaseError';

export default class HttpError extends BaseError {
    public static NOT_FOUND: BaseErrorInput = {
        status: BaseErrorStatus.NOT_FOUND,
        message: 'Not found!',
    };
}
