import { DropController } from "@controllers";
import { DropService } from "@services";
import { Request } from "express";

import { fakeResponse } from "@test_helpers";

describe('DropController', () => {
    const drop = {
        creatureId: '1',
        itemId: '1'
    } as any;

    describe('getAll', () => {
        describe('success', () => {
            it('should successfully return all the drops', async () => {
                jest.spyOn(DropService, 'getAll').mockImplementation(() => {
                    return Promise.resolve([drop]);
                });

                const req = {} as Request;

                await DropController.getAll(req, fakeResponse);

                expect(DropService.getAll).toHaveBeenCalled();
                expect(fakeResponse.status).toHaveBeenCalledWith(200);
                expect(fakeResponse.json).toHaveBeenCalledWith([drop]);
            });
        });

        describe('error', () => {
            it('should return 500 with proper error message when catches an exception', async () => {
                jest.spyOn(DropService, 'getAll').mockImplementation(() => {
                    return Promise.reject();
                });

                const req = {} as Request;

                await DropController.getAll(req, fakeResponse);

                expect(DropService.getAll).toHaveBeenCalled();
                expect(fakeResponse.status).toHaveBeenCalledWith(500);
                expect(fakeResponse.json).toHaveBeenCalledWith({ error: 'Error when fething drops' });
            });
        });
    });

    describe('get', () => {
        const req = {
            params: {
                id: '1'
            }
        } as unknown as Request;

        describe('success', () => {
            it('should successfully return the drop', async () => {
                jest.spyOn(DropService, 'get').mockImplementation(() => {
                    return Promise.resolve(drop);
                });

                await DropController.get(req, fakeResponse);

                expect(DropService.get).toHaveBeenCalled();
                expect(fakeResponse.status).toHaveBeenCalledWith(200);
                expect(fakeResponse.json).toHaveBeenCalledWith(drop);
            });
        });

        describe('error', () => {
            it('should return 500 with proper error message when catches an exception', async () => {
                jest.spyOn(DropService, 'get').mockImplementation(() => {
                    return Promise.reject();
                });

                await DropController.get(req, fakeResponse);

                expect(DropService.get).toHaveBeenCalled();
                expect(fakeResponse.status).toHaveBeenCalledWith(500);
                expect(fakeResponse.json).toHaveBeenCalledWith({ error: 'Error when fething drop' });
            });
        });
    });

    describe('create', () => {
        const req = {
            body: drop
        } as unknown as Request;

        describe('success', () => {
            it('should successfully create the drop', async () => {
                jest.spyOn(DropService, 'create').mockImplementation(() => {
                    return Promise.resolve(drop);
                });

                await DropController.create(req, fakeResponse);

                expect(DropService.create).toHaveBeenCalled();
                expect(fakeResponse.status).toHaveBeenCalledWith(201);
                expect(fakeResponse.json).toHaveBeenCalledWith(drop);
            });
        });

        describe('error', () => {
            it('should return 500 with proper error message when catches an exception', async () => {
                jest.spyOn(DropService, 'create').mockImplementation(() => {
                    return Promise.reject();
                });

                await DropController.create(req, fakeResponse);

                expect(DropService.create).toHaveBeenCalled();
                expect(fakeResponse.status).toHaveBeenCalledWith(500);
                expect(fakeResponse.json).toHaveBeenCalledWith({ error: 'Error when creating a drop' });
            });
        });
    });

    describe('update', () => {
        const req = {
            params: {
                id: '1'
            },
            body: drop
        } as unknown as Request;

        describe('success', () => {
            it('should successfully update the drop', async () => {
                jest.spyOn(DropService, 'update').mockImplementation(() => {
                    return Promise.resolve(drop);
                });

                await DropController.update(req, fakeResponse);

                expect(DropService.update).toHaveBeenCalled();
                expect(fakeResponse.status).toHaveBeenCalledWith(200);
                expect(fakeResponse.json).toHaveBeenCalledWith(drop);
            });
        });

        describe('error', () => {
            it('should return 404 with proper error message when drop is not found', async () => {
                jest.spyOn(DropService, 'update').mockImplementation(() => {
                    return Promise.resolve(null);
                });

                await DropController.update(req, fakeResponse);

                expect(DropService.update).toHaveBeenCalled();
                expect(fakeResponse.status).toHaveBeenCalledWith(404);
                expect(fakeResponse.json).toHaveBeenCalledWith({ error: 'Drop not found' });
            });

            it('should return 500 with proper error message when catches an exception', async () => {
                jest.spyOn(DropService, 'update').mockImplementation(() => {
                    return Promise.reject();
                });

                await DropController.update(req, fakeResponse);

                expect(DropService.update).toHaveBeenCalled();
                expect(fakeResponse.status).toHaveBeenCalledWith(500);
                expect(fakeResponse.json).toHaveBeenCalledWith({ error: 'Error when updating a drop' });
            });
        });
    });

    describe('delete', () => {
        const req = {
            params: {
                id: '1'
            }
        } as unknown as Request;

        describe('success', () => {
            it('should successfully delete the drop', async () => {
                jest.spyOn(DropService, 'delete').mockImplementation(() => {
                    return Promise.resolve(drop);
                });

                await DropController.delete(req, fakeResponse);

                expect(DropService.delete).toHaveBeenCalled();
                expect(fakeResponse.status).toHaveBeenCalledWith(200);
                expect(fakeResponse.json).toHaveBeenCalledWith({ message: 'Drop deleted with success' });
            });
        });

        describe('error', () => {
            it('should return 404 with proper error message when drop is not found', async () => {
                jest.spyOn(DropService, 'delete').mockImplementation(() => {
                    return Promise.resolve(null);
                });

                await DropController.delete(req, fakeResponse);

                expect(DropService.delete).toHaveBeenCalled();
                expect(fakeResponse.status).toHaveBeenCalledWith(404);
                expect(fakeResponse.json).toHaveBeenCalledWith({ error: 'Drop not found' });
            });

            it('should return 500 with proper error message when catches an exception', async () => {
                jest.spyOn(DropService, 'delete').mockImplementation(() => {
                    return Promise.reject();
                });

                await DropController.delete(req, fakeResponse);

                expect(DropService.delete).toHaveBeenCalled();
                expect(fakeResponse.status).toHaveBeenCalledWith(500);
                expect(fakeResponse.json).toHaveBeenCalledWith({ error: 'Error when deleting a drop' });
            });
        });
    });
});
