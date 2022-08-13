import UserDTOInput from '../../../dto/UserDTOInput';

export const signUpUserFixture: UserDTOInput = {
    email: 'email@email.com',
    name: 'name',
    password: 'password',
    phones: [
        {
            ddd: '11',
            number: '12345-1234',
        },
    ],
};
