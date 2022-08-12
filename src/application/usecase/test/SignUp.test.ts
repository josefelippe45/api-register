import SignUp from '../SignUp';
import UserDAOFake from './fake/UserDAOFake';
import { signUpUserFixture } from './fixture/SignUpFixture';

describe('Suite - SignUp - Unit Test', () => {
    let userDAOCreateSpy: jest.SpyInstance;
    let userDAOFindByEmailSpy: jest.SpyInstance;
    let userDaoFake: UserDAOFake;
    let signUp: SignUp;

    beforeAll(() => {
        userDaoFake = new UserDAOFake();
        userDAOCreateSpy = jest.spyOn(userDaoFake, 'create');
        userDAOFindByEmailSpy = jest.spyOn(userDaoFake, 'findByEmail');
        signUp = new SignUp(userDaoFake);
    });

    it('should throw if user already exists', async () => {
        await expect(() =>
            signUp.execute(signUpUserFixture)
        ).rejects.toThrowError('User already exists');

        expect(userDAOFindByEmailSpy).toHaveBeenCalledTimes(1);
        expect(userDAOCreateSpy).not.toHaveBeenCalled();
    });

    it('should create a new user', async () => {
        userDAOFindByEmailSpy.mockResolvedValue(null);
        await signUp.execute(signUpUserFixture);

        expect(userDAOFindByEmailSpy).toHaveBeenCalledTimes(1);
        expect(userDAOCreateSpy).toHaveBeenCalledTimes(1);
    });
});
