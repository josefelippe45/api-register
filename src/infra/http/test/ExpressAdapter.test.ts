import ExpressAdapter from '../adapter/ExpressAdapter';
import ExpressMock from './mock/ExpressMock';

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
    });

    describe('method listen', () => {
        it('should have called listen', () => {
            const port = 3000;
            expressAdapter.listen(port);
            expect(ExpressMock.listen).toHaveBeenCalledWith(port);
        });
    });
});
