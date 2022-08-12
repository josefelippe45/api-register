import express, { Request, Response } from 'express';

export default class ExpressMock {
    public static request = {
        body: {},
        headers: { authorization: 'Bearer ToKeNxPTo' },
    } as Request;
    public static response = {
        status: jest.fn(() => ({ json: jest.fn() })),
    } as unknown as Response;

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
