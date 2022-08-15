import UserBuilder from '../../infra/builder/UserBuilder';
import { userFixture, validateUserCases } from './fixture/UserFixture';

describe('Suite - User - Unit Test', () => {
    it.each(validateUserCases)('should throw $error', ({ user, error }) => {
        expect(() => new UserBuilder(user).toDTOOutput()).toThrowError(error);
    });
    it('should create a new user', () => {
        const user = new UserBuilder(userFixture).toDTOOutput();
        expect(user).toBeDefined();
    });
});
