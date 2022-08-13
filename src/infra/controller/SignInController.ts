import { Request } from 'express';
import UserDTOOutput from '../../application/dto/UserDTOOutput';
import SignIn from '../../application/usecase/SignIn';
import UserDAODatabase from '../database/dao/UserDAODatabase';
import { ConnectToMongo } from '../database/decorator/ConnectToMongo';
import Controller from './Controller';

export default class SignInController implements Controller {
    @ConnectToMongo
    public async execute(request: Request): Promise<UserDTOOutput> {
        const credentials = request.body;
        const userDao = new UserDAODatabase();
        return new SignIn(userDao).execute(credentials);
    }
}
