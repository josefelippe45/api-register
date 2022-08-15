import { Request } from 'express';
import UserDTOOutput from '../../application/dto/UserDTOOutput';
import SignUp from '../../application/usecase/SignUp';
import UserBuilder from '../builder/UserBuilder';
import UserDAODatabase from '../database/dao/UserDAODatabase';
import { ConnectToMongo } from '../database/decorator/ConnectToMongo';
import Controller from './Controller';

export default class SignUpController implements Controller {
    @ConnectToMongo
    public async execute(request: Request): Promise<UserDTOOutput> {
        const user = new UserBuilder(request.body).toDTOInput();
        const userDao = new UserDAODatabase();
        return new SignUp(userDao).execute(user);
    }
}
