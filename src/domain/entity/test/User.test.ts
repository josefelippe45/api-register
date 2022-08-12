import type { Phone } from '../../../application/type/Phone';
import User from '../User';
import { defaultUser } from './fixture/UserFixtures';

describe('Suite - User - Unit Test', () => {
    const { name, email, password, token } = defaultUser;
    it('should throw if there is no phone', () => {
        expect(() => new User(name, email, password, [], token)).toThrowError(
            'User must have at least one phone'
        );
    });

    it('should throw if there is invalid phones', () => {
        const invalidPhones: Phone[] = [
            {
                ddd: '11xpto',
                number: '12345-1234',
            },
        ];
        expect(
            () => new User(name, email, password, invalidPhones, token)
        ).toThrowError('All phones must be valid');
    });
});
