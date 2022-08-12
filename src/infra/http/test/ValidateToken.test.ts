import ExpressMock from './mock/ExpressMock';
import jwt from 'jsonwebtoken';
import VerifyJWT from '../middleware/VerifyJWT';

describe('Suite - ValidateToken - Unit Test', () => {
    let validateToken: VerifyJWT;
    let jwtVerifySpy: jest.SpyInstance;
    const nextFunction = jest.fn();
    beforeAll(() => {
        validateToken = new VerifyJWT();
        jwtVerifySpy = jest.spyOn(jwt, 'verify');
    });
    it('should send 401 if token was not provided', async () => {
        ExpressMock.request.headers.authorization = undefined;
        await validateToken.execute(
            ExpressMock.request,
            ExpressMock.response,
            nextFunction
        );

        expect(ExpressMock.response.status).toHaveBeenCalledWith(401);
    });

    it('should send 401 if token is invalid', async () => {
        const invalidToken = 'Bearer invalidToken';
        ExpressMock.request.headers.authorization = invalidToken;
        jwtVerifySpy.mockRejectedValueOnce(new Error('Token invalid'));
        await validateToken.execute(
            ExpressMock.request,
            ExpressMock.response,
            nextFunction
        );

        expect(ExpressMock.response.status).toHaveBeenCalledWith(401);
    });

    it('should call next function', async () => {
        const invalidToken = 'Bearer invalidToken';
        ExpressMock.request.headers.authorization = invalidToken;
        jwtVerifySpy.mockResolvedValueOnce(null);
        await validateToken.execute(
            ExpressMock.request,
            ExpressMock.response,
            nextFunction
        );

        expect(nextFunction).toHaveBeenCalledTimes(1);
    });
});
