/* eslint-disable @typescript-eslint/no-unused-vars */
import UserDAO from '../../../dao/UserDAO';
import UserDTO from '../../../dto/UserDTO';

export default class UserDAOFake implements UserDAO {
    public async create(_user: UserDTO): Promise<void> {
        return;
    }
    public async findByEmail(_email: string): Promise<UserDTO> {
        return new UserDTO('', '', '', [], '');
    }
}
