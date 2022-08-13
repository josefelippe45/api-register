import { compare } from 'bcrypt';
import BaseError from '../../domain/error/BaseError';
import UserError from '../../domain/error/UserError';
import UserDAO from '../dao/UserDAO';
import SignInDTOInput from '../dto/SignInDTO';
import UserDTOInput from '../dto/UserDTOInput';
import UserDTOOutput from '../dto/UserDTOOutput';

export default class SignIn {
    private userDAO: UserDAO;

    constructor(userDAO: UserDAO) {
        this.userDAO = userDAO;
    }

    public async execute(signInDTO: SignInDTOInput): Promise<UserDTOOutput> {
        const user = await this.getLoggedUser(signInDTO);
        return this.userDAO.signIn(user);
    }

    private async getLoggedUser(
        signInDTO: SignInDTOInput
    ): Promise<UserDTOOutput> {
        const { email, password } = signInDTO;
        if (!email || !password) {
            throw new BaseError(UserError.EMPTY_PARAMS);
        }
        const user = await this.userDAO.findByCredentials(signInDTO);
        await this.validateUser(user, password);
        return user;
    }

    private async validateUser(
        user: UserDTOInput,
        password: string
    ): Promise<void> {
        if (!user) {
            throw new BaseError(UserError.INVALID_CREDENTIALS);
        }
        const isValid = await compare(password, user.password);
        if (!isValid) {
            throw new BaseError(UserError.INVALID_CREDENTIALS);
        }
    }
}
