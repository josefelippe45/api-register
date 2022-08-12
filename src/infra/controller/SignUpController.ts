import { Request } from 'express';
import SignUp from '../../application/usecase/SignUp';
import UserBuilder from '../builder/UserBuilder';
import UserDAODatabase from '../database/dao/UserDAODatabase';
import { ConnectToMongo } from '../database/decorator/ConnectToMongo';
import Controller from './Controller';

export default class SignUpController implements Controller {
    @ConnectToMongo
    public async execute(request: Request): Promise<void> {
        const user = new UserBuilder().toDTO(request.body);
        const userDao = new UserDAODatabase();
        await new SignUp(userDao).execute(user);
    }
}
