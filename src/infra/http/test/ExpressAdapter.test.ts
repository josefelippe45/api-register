import ExpressMock from './mock/ExpressMock';
import VerifyJWTMock from './mock/VerifyJWTMock';
import ExpressAdapter from '../adapter/ExpressAdapter';

describe('Suite - ExpressAdapter - Unit Test', () => {
    let expressAdapter: ExpressAdapter;
    beforeAll(() => {
        expressAdapter = new ExpressAdapter();
    });

    describe('method on', () => {
        it('should call a valid http method', () => {
            const url = '/test';
            const method = 'get';
            const callBack = () => Promise.resolve({});
            expressAdapter.on(url, method, callBack);
            expect(ExpressMock.get).toHaveBeenCalledWith(
                url,
                expect.any(Function)
            );
        });

        it('should call a valid http1 method', () => {
            const url = '/test';
            const method = 'get';
            const callBack = function () {
                throw new Error('test');
            };
            expressAdapter.on(url, method, callBack);
            expect(ExpressMock.response.status).toHaveBeenCalledWith(500);
        });
    });

    describe('method listen', () => {
        it('should have called listen', () => {
            const port = 3000;
            expressAdapter.listen(port);
            expect(ExpressMock.listen).toHaveBeenCalledWith(port);
        });
    });

    describe('method onPrivate', () => {
        it('should call a valid private route', () => {
            VerifyJWTMock.execute.mockResolvedValueOnce(null);
            const url = '/test';
            const method = 'get';
            const callBack = () => Promise.resolve({});
            expressAdapter.onPrivate(url, method, callBack);
            expect(ExpressMock.get).toHaveBeenCalledWith(
                url,
                expect.any(Function),
                expect.any(Function)
            );
        });
    });
});
