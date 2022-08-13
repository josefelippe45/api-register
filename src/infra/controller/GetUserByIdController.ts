import { Request } from 'express';
import UserDTOOutput from '../../application/dto/UserDTOOutput';
import UserService from '../../application/service/UserService';
import UserDAODatabase from '../database/dao/UserDAODatabase';
import { ConnectToMongo } from '../database/decorator/ConnectToMongo';
import Controller from './Controller';

export default class GetUserByIdController implements Controller {
    @ConnectToMongo
    public async execute(request: Request): Promise<UserDTOOutput> {
        const { id } = request.params;
        const userDao = new UserDAODatabase();
        return new UserService(userDao).getById(id);
    }
}
