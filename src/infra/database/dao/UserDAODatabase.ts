import UserDAO from '../../../application/dao/UserDAO';
import UserDTO from '../../../application/dto/UserDTO';
import UserBuilder from '../../builder/UserBuilder';
import UserModel from '../model/User';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../../config/Environment';

export default class UserDAODatabase implements UserDAO {
    public async create(user: UserDTO): Promise<UserDTO> {
        const token = jwt.sign({ id: user.email }, JWT_SECRET);
        const userToSave = new UserBuilder({ ...user, token }).toEntity();
        const userSaved = await UserModel.create(userToSave);
        return new UserBuilder(userSaved).toDTO();
    }
    public async findByEmail(email: string): Promise<UserDTO | null> {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return null;
        }
        return new UserBuilder(user).toDTO();
    }
}
