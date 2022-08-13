import type { Phone } from '../type/Phone';
import UserBuilder from '../../infra/builder/UserBuilder';
import { userFixture } from './fixture/UserFixtures';
import User from '../entity/User';

describe('Suite - User - Unit Test', () => {
    it('should throw if there is no phone', () => {
        const user = { ...userFixture, phones: [] } as User;
        expect(() => new UserBuilder(user).toDTOOutput()).toThrowError(
            'User must have at least one phone'
        );
    });

    it('should throw if there is invalid phones', () => {
        const invalidPhones: Phone[] = [
            {
                ddd: '11xpto',
                number: '123451234',
            },
        ];
        const user = { ...userFixture, phones: invalidPhones } as User;
        expect(() => new UserBuilder(user).toDTOOutput()).toThrowError(
            'All phones must be valid'
        );
    });

    it('should create a new user', () => {
        const user = new UserBuilder(userFixture).toDTOOutput();
        expect(user).toBeDefined();
    });
});
