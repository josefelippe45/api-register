import type { Phone } from '../../type/Phone';
import UserBuilder from '../../../infra/builder/UserBuilder';
import { defaultUser } from './fixture/UserFixtures';

describe('Suite - User - Unit Test', () => {
    it('should throw if there is no phone', () => {
        expect(() =>
            new UserBuilder({ ...defaultUser, phones: [] }).toEntity()
        ).toThrowError('User must have at least one phone');
    });

    it('should throw if there is invalid phones', () => {
        const invalidPhones: Phone[] = [
            {
                ddd: '11xpto',
                number: '123451234',
            },
        ];
        expect(() =>
            new UserBuilder({
                ...defaultUser,
                phones: invalidPhones,
            }).toEntity()
        ).toThrowError('All phones must be valid');
    });

    it('should create a new user where lastLogin is equal to createdAt', () => {
        const user = new UserBuilder(defaultUser).toEntity();
        expect(user).toBeDefined();
        expect(user.lastLogin).toEqual(user.createdAt);
    });
});
