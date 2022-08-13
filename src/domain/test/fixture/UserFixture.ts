import User from '../../entity/User';
import { v4 as uuidv4 } from 'uuid';

export const userFixture: User = new User(
    uuidv4(),
    'jose',
    'jose@jose.com',
    'J0sÉ@1234',
    [
        {
            ddd: '11',
            number: '123451234',
        },
    ],
    'token',
    new Date(),
    new Date(),
    new Date()
);
