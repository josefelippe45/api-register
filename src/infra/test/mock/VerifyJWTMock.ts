export default class VerifyJWTMock {
    public static execute = jest.fn();
    public execute = VerifyJWTMock.execute;
}

jest.mock('../../http/middleware/VerifyJWT', () => ({
    __esModule: true,
    default: VerifyJWTMock,
}));
