import UserDAO from '../../../application/dao/UserDAO';
import UserDTOInput from '../../../application/dto/UserDTOInput';
import UserBuilder from '../../builder/UserBuilder';
import UserModel from '../model/User';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../../config/Environment';
import SignInDTOInput from '../../../application/dto/SignInDTO';
import UserDTOOutput from '../../../application/dto/UserDTOOutput';
import { v1 as uuidv1 } from 'uuid';

export default class UserDAODatabase implements UserDAO {
    public async findByCredentials(
        credentials: SignInDTOInput
    ): Promise<UserDTOOutput> {
        const { email, password } = credentials;
        const user = await UserModel.findOne({ email, password });
        if (!user) {
            return null;
        }
        return new UserBuilder(user).toDTOOutput();
    }
    public async updateLastLogin(user: UserDTOInput): Promise<UserDTOOutput> {
        const currentDate = new Date();
        const updatedUser = await UserModel.findOneAndUpdate(
            {
                email: user.email,
            },
            {
                lastLogin: currentDate,
            }
        );
        return new UserBuilder(updatedUser).toDTOOutput();
    }
    public async create(user: UserDTOInput): Promise<UserDTOOutput> {
        const token = jwt.sign({ id: user.email }, JWT_SECRET);
        const uuid = uuidv1();
        const userSaved = await UserModel.create({ ...user, token, id: uuid });
        return new UserBuilder(userSaved).toDTOOutput();
    }
    public async findByEmail(email: string): Promise<UserDTOOutput | null> {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return null;
        }
        return new UserBuilder(user).toDTOOutput();
    }
}
