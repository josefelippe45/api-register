import SignInDTOInput from '../../dto/SignInDTO';
import UserError from '../../../domain/error/UserError';
import UserDAOFake from './fake/UserDAOFake';
import SignIn from '../SignIn';
import { signInLastLoginFixture } from './fixture/SignInFixture';

describe('Suite - SignIn - Unit Test', () => {
    let signIn: SignIn;
    let userDAOFindByCredentialsSpy: jest.SpyInstance;
    let userDaoFake: UserDAOFake;
    const credentials = new SignInDTOInput('email@email.com', 'P4sSw0rd');

    beforeAll(() => {
        userDaoFake = new UserDAOFake();
        userDAOFindByCredentialsSpy = jest.spyOn(
            userDaoFake,
            'findByCredentials'
        );
        signIn = new SignIn(userDaoFake);
    });

    it('should throw if email or password was not provided', async () => {
        const credentials = new SignInDTOInput('', '');
        await expect(() => signIn.execute(credentials)).rejects.toThrow(
            UserError.EMPTY_PARAMS.message
        );
    });

    it('should throw if some credential does not match', async () => {
        userDAOFindByCredentialsSpy.mockResolvedValueOnce(null);
        await expect(() => signIn.execute(credentials)).rejects.toThrow(
            UserError.INVALID_CREDENTIALS.message
        );
    });

    it('should return logged user with updated lastLogin', async () => {
        const loggedUser = await signIn.execute(credentials);
        expect(loggedUser.lastLogin).toEqual(signInLastLoginFixture);
    });
});
