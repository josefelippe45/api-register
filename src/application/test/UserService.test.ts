import UserDAOFake from './fake/UserDAOFake';
import UserService from '../service/UserService';
import { v4 as uuidv4 } from 'uuid';

describe('Suite - UserService - Unit Test', () => {
    let userService: UserService;
    let userDAOFake: UserDAOFake;
    let userDAOGetByIdSpy: jest.SpyInstance;

    beforeAll(() => {
        userDAOFake = new UserDAOFake();
        userService = new UserService(userDAOFake);
        userDAOGetByIdSpy = jest.spyOn(userDAOFake, 'getById');
    });

    it('should have called userDAO.getById', async () => {
        const uuid = uuidv4();
        const user = await userService.getById(uuid);
        expect(userDAOGetByIdSpy).toHaveBeenCalledTimes(1);
        expect(user).toBeDefined();
    });
});
