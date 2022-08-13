/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import BaseError from '../../domain/error/BaseError';
import UserError from '../../domain/error/UserError';
import { validate as uuidValidate } from 'uuid';

export function ValidateId(
    _target: unknown,
    _key: string,
    descriptor: PropertyDescriptor
) {
    const original = descriptor.value;
    descriptor.value = async function (...args: unknown[]) {
        const [id] = args;
        const parsedId = String(id);
        if (!id) {
            throw new BaseError(UserError.ID_NOT_FOUND);
        }
        if (!uuidValidate(parsedId)) {
            throw new BaseError(UserError.INVALID_ID);
        }
        uuidValidate(parsedId);
        const result = await original.apply(this, args);
        return result;
    };
}
