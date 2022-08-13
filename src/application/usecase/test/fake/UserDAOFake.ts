/* eslint-disable @typescript-eslint/no-unused-vars */
import User from '../../../../domain/entity/User';
import UserDAO from '../../../dao/UserDAO';
import SignInDTOInput from '../../../dto/SignInDTO';
import UserDTOInput from '../../../dto/UserDTOInput';
import UserDTOOutput from '../../../dto/UserDTOOutput';
import { signInLastLoginFixture } from '../fixture/SignInFixture';

export default class UserDAOFake implements UserDAO {
    private user: User;

    constructor() {
        this.user = {
            name: '',
            email: '',
            password: '',
            phones: [],
            token: '',
            createdAt: new Date(),
            updatedAt: new Date(),
            lastLogin: new Date(),
        } as User;
    }

    public async updateLastLogin(user: UserDTOInput): Promise<UserDTOOutput> {
        const userUpdated = {
            ...user,
            lastLogin: signInLastLoginFixture,
        } as User;
        return userUpdated;
    }
    public async findByCredentials(
        _credentials: SignInDTOInput
    ): Promise<UserDTOOutput> {
        return this.user;
    }
    public async create(_user: UserDTOInput): Promise<UserDTOOutput> {
        return;
    }
    public async findByEmail(_email: string): Promise<UserDTOOutput> {
        return this.user;
    }
}
