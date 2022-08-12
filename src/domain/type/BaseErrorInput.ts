import { BaseErrorStatus } from '../enum/BaseErrorStatus';

export type BaseErrorInput = {
    status: BaseErrorStatus;
    message: string;
};
