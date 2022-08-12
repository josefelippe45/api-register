import UserDTO from '../../../../application/dto/UserDTO';

export const defaultUser: UserDTO = {
    name: 'jose',
    email: 'jose@jose.com',
    password: 'J0sÉ@1234',
    token: 'xpto',
    phones: [
        {
            ddd: '11',
            number: '123451234',
        },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
};
