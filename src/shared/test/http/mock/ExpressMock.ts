import express from 'express';

export default class ExpressMock {
    private static request = { body: {} };
    private static response = { json: jest.fn() };

    public static use = jest.fn();
    public use = ExpressMock.use;

    public static listen = jest.fn();
    public listen = ExpressMock.listen;

    public static get = jest
        .fn()
        .mockImplementation((_url, fn) => fn(this.request, this.response));
    public get = ExpressMock.get;
}

jest.mock('express', () => {
    return {
        __esModule: true,
        default: () => ExpressMock,
    };
});

express.json = jest.fn();
