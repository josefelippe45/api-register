import User from '../../entity/User';
import { v4 as uuidv4 } from 'uuid';
import { Phone } from '../../type/Phone';
import UserError from '../../error/UserError';

export const userFixture: User = new User(
    uuidv4(),
    'jose',
    'jose@jose.com',
    'P4sSw0rd1!',
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

const invalidPhonesFixture: Phone[] = [
    {
        ddd: '11xpto',
        number: '123451234',
    },
];

export const validateUserCases: { user: User; error: string }[] = [
    {
        user: { ...userFixture, phones: invalidPhonesFixture } as User,
        error: UserError.INVALID_PHONES.message,
    },
    {
        user: { ...userFixture, phones: [] } as User,
        error: UserError.EMPTY_PHONE.message,
    },
    {
        user: { ...userFixture, email: 'invalidEmail' } as User,
        error: UserError.INVALID_EMAIL.message,
    },
];
