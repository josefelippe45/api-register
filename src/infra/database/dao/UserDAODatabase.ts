import { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v1 as uuidv1 } from 'uuid';
import UserDAO from '../../../application/dao/UserDAO';
import UserDTOInput from '../../../application/dto/UserDTOInput';
import UserBuilder from '../../builder/UserBuilder';
import UserModel from '../model/User';
import {
    BCRYPT_SALT_ROUNDS,
    JWT_EXPIRES_TIMER,
    JWT_SECRET,
} from '../../config/Environment';
import SignInDTOInput from '../../../application/dto/SignInDTO';
import UserDTOOutput from '../../../application/dto/UserDTOOutput';

export default class UserDAODatabase implements UserDAO {
    public async getById(id: string): Promise<UserDTOOutput> {
        const user = await UserModel.findOne({ id });
        return new UserBuilder(user).toDTOOutput();
    }
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

    public async signIn(user: UserDTOInput): Promise<UserDTOOutput> {
        const currentDate = new Date();
        const token = jwt.sign({ id: user.email }, JWT_SECRET, {
            expiresIn: JWT_EXPIRES_TIMER,
        });
        const filter = {
            email: user.email,
        };
        UserModel.updateOne(filter, {
            lastLogin: currentDate,
            token,
        });
        const userToSave = await UserModel.findOne(filter);
        return new UserBuilder(userToSave).toDTOOutput();
    }

    public async create(user: UserDTOInput): Promise<UserDTOOutput> {
        const token = jwt.sign({ id: user.email }, JWT_SECRET, {
            expiresIn: JWT_EXPIRES_TIMER,
        });
        const uuid = uuidv1();
        const passwordHash = await hash(user.password, BCRYPT_SALT_ROUNDS);
        const userSaved = await UserModel.create({
            ...user,
            token,
            id: uuid,
            password: passwordHash,
        });
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
