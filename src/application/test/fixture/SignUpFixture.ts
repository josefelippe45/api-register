import UserDTOInput from '../../dto/UserDTOInput';

export const signUpUserFixture: UserDTOInput = {
    email: 'email@email.com',
    name: 'name',
    password: 'P4sSw0rd',
    phones: [
        {
            ddd: '11',
            number: '12345-1234',
        },
    ],
};
