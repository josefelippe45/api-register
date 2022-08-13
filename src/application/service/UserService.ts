import UserDAO from '../dao/UserDAO';
import { ValidateId } from '../decorator/ValidateId';
import UserDTOOutput from '../dto/UserDTOOutput';

export default class UserService {
    private userDAO: UserDAO;

    constructor(userDAO: UserDAO) {
        this.userDAO = userDAO;
    }

    @ValidateId
    public getById(id: string): Promise<UserDTOOutput> {
        return this.userDAO.getById(id);
    }
}
