import UserDTO from '../../../dto/UserDTO';

export const signUpUserFixture: UserDTO = {
    email: 'email@email.com',
    name: 'name',
    password: 'password',
    token: 'token',
    phones: [
        {
            ddd: '11',
            number: '12345-1234',
        },
    ],
};
