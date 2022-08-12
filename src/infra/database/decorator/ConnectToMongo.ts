/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { connect, connection } from 'mongoose';
import { MONGO_URI } from '../../config/Environment';

export function ConnectToMongo(
    _target: unknown,
    _key: string,
    descriptor: PropertyDescriptor
) {
    const original = descriptor.value;
    descriptor.value = async function (...args: unknown[]) {
        await connect(MONGO_URI);
        console.info('connected to mongo');
        try {
            const result = await original.apply(this, args);
            return result;
        } finally {
            await connection.close();
            console.info('connection closed');
        }
    };
}
