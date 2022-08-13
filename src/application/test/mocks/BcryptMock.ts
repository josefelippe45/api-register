export default class BcryptMock {
    public static compare = jest.fn();
    public compare = BcryptMock.compare;
}

jest.mock('bcrypt', () => {
    return {
        compare: BcryptMock.compare,
    };
});
