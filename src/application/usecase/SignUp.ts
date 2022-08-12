import UserDAO from '../dao/UserDAO';
import UserDTO from '../dto/UserDTO';

export default class SignUp {
    private userDAO: UserDAO;

    constructor(userDAO: UserDAO) {
        this.userDAO = userDAO;
    }

    public async execute(user: UserDTO): Promise<void> {
        const { email } = user;
        const existentUser = await this.userDAO.findByEmail(email);
        if (existentUser) {
            throw new Error('User already exists');
        }
        await this.userDAO.create(user);
    }
}
