import UserDTO from '../../../../application/dto/UserDTO';

export const defaultUser: UserDTO = {
    name: 'jose',
    email: 'jose@jose.com',
    password: 'J0sÉ@1234',
    token: 'xpto',
    phones: [
        {
            ddd: '11',
            number: '12345-1234',
        },
    ],
};
