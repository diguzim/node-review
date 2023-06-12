import { Response } from "express";

export const fakeResponse = {
    json: jest.fn(() => fakeResponse),
    status: jest.fn(() => fakeResponse),
} as unknown as Response;