import BcryptMock from './mocks/BcryptMock';
import SignInDTOInput from '../dto/SignInDTO';
import UserError from '../../domain/error/UserError';
import UserDAOFake from './fake/UserDAOFake';
import SignIn from '../usecase/SignIn';
import { userFixture } from '../../domain/test/fixture/UserFixtures';

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

    it('should return logged', async () => {
        userDAOFindByCredentialsSpy.mockResolvedValueOnce(userFixture);
        BcryptMock.compare.mockResolvedValueOnce(true);
        const loggedUser = await signIn.execute(credentials);
        expect(loggedUser).toBeDefined();
    });

    it('should throw if user has an invalid password', async () => {
        userDAOFindByCredentialsSpy.mockResolvedValueOnce(userFixture);
        BcryptMock.compare.mockResolvedValueOnce(false);
        await expect(() => signIn.execute(credentials)).rejects.toThrow(
            UserError.INVALID_CREDENTIALS.message
        );
    });
});
