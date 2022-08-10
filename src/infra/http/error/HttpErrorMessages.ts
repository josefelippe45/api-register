import HttpError from './HttpError';
import { HttpErrorStatus } from '../enum/HttpErrorStatus';
import { HttpErrorInput } from '../type/HttpErrorInput';

export default class HttpErrorMessages extends HttpError {
    public static NOT_FOUND: HttpErrorInput = {
        status: HttpErrorStatus.NOT_FOUND,
        message: 'Not found!',
    };
}
