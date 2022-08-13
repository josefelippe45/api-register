import BaseError from '../../domain/error/BaseError';
import UserError from '../../domain/error/UserError';
import UserDAO from '../dao/UserDAO';
import UserDTOInput from '../dto/UserDTOInput';
import UserDTOOutput from '../dto/UserDTOOutput';

export default class SignUp {
    private userDAO: UserDAO;

    constructor(userDAO: UserDAO) {
        this.userDAO = userDAO;
    }

    public async execute(user: UserDTOInput): Promise<UserDTOOutput> {
        const { email } = user;
        const existentUser = await this.userDAO.findByEmail(email);
        if (existentUser) {
            throw new BaseError(UserError.ALREADY_EXISTS);
        }
        return this.userDAO.create(user);
    }
}
