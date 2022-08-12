import UserDAO from '../../../application/dao/UserDAO';
import UserDTO from '../../../application/dto/UserDTO';
import UserBuilder from '../../builder/UserBuilder';
import UserModel from '../model/User';

export default class UserDAODatabase implements UserDAO {
    public async create(user: UserDTO): Promise<void> {
        const userToSave = new UserBuilder().toDomain(user);
        await UserModel.create(userToSave);
    }
    public async findByEmail(email: string): Promise<UserDTO | null> {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return null;
        }
        return new UserBuilder().toDTO(user);
    }
}
