/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import MongooseConnectionAdapter from '../adapter/MongoConnectionAdapter';

export function ConnectToMongo(
    _target: unknown,
    _key: string,
    descriptor: PropertyDescriptor
) {
    const original = descriptor.value;
    descriptor.value = async function (...args: unknown[]) {
        await new MongooseConnectionAdapter().open();
        console.info('connected to mongo');
        try {
            const result = await original.apply(this, args);
            return result;
        } catch (error) {
            console.info(error);
        } finally {
            await new MongooseConnectionAdapter().close();
            console.info('connection closed');
        }
    };
}
