import { ItemController } from "@controllers";
import { ItemService } from "@services";
import { Request } from "express";

import { fakeResponse } from '@test_helpers';

describe('ItemController', () => {
    const item = {
        name: 'item name',
        userId: '1'
    } as any;

    describe('getAll', () => {
        describe('success', () => {
            it('should successfully return all the items', async () => {
                jest.spyOn(ItemService, 'getAll').mockImplementation(() => {
                    return Promise.resolve([item]);
                });

                const req = {} as Request;

                await ItemController.getAll(req, fakeResponse);

                expect(ItemService.getAll).toHaveBeenCalled();
                expect(fakeResponse.status).toHaveBeenCalledWith(200);
                expect(fakeResponse.json).toHaveBeenCalledWith([item]);
            });
        });

        describe('error', () => {
            it('should return 500 with proper error message when catches an exception', async () => {
                jest.spyOn(ItemService, 'getAll').mockImplementation(() => {
                    return Promise.reject();
                });

                const req = {} as Request;

                await ItemController.getAll(req, fakeResponse);

                expect(ItemService.getAll).toHaveBeenCalled();
                expect(fakeResponse.status).toHaveBeenCalledWith(500);
                expect(fakeResponse.json).toHaveBeenCalledWith({ error: 'Error when fething items' });
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
            it('should successfully return the item', async () => {
                jest.spyOn(ItemService, 'get').mockImplementation(() => {
                    return Promise.resolve(item);
                });

                await ItemController.get(req, fakeResponse);

                expect(ItemService.get).toHaveBeenCalledWith('1');
                expect(fakeResponse.status).toHaveBeenCalledWith(200);
                expect(fakeResponse.json).toHaveBeenCalledWith(item);
            });
        });

        describe('error', () => {
            it('should return 500 with proper error message when catches an exception', async () => {
                jest.spyOn(ItemService, 'get').mockImplementation(() => {
                    return Promise.reject();
                });

                await ItemController.get(req, fakeResponse);

                expect(ItemService.get).toHaveBeenCalledWith('1');
                expect(fakeResponse.status).toHaveBeenCalledWith(500);
                expect(fakeResponse.json).toHaveBeenCalledWith({ error: 'Error when fething an item' });
            });
        });
    });

    describe('create', () => {
        const req = {
            user: {
                id: '1'
            },
            body: item
        } as unknown as Request;

        describe('success', () => {
            it('should successfully create the item', async () => {
                jest.spyOn(ItemService, 'create').mockImplementation(() => {
                    return Promise.resolve(item);
                });

                await ItemController.create(req, fakeResponse);

                expect(ItemService.create).toHaveBeenCalledWith({ name: req.body.name }, { id: "1" });
                expect(fakeResponse.status).toHaveBeenCalledWith(201);
                expect(fakeResponse.json).toHaveBeenCalledWith(item);
            });
        });

        describe('error', () => {
            it('should return 500 with proper error message when catches an exception', async () => {
                jest.spyOn(ItemService, 'create').mockImplementation(() => {
                    return Promise.reject();
                });

                await ItemController.create(req, fakeResponse);

                expect(ItemService.create).toHaveBeenCalledWith({ name: req.body.name }, { id: "1" });
                expect(fakeResponse.status).toHaveBeenCalledWith(500);
                expect(fakeResponse.json).toHaveBeenCalledWith({ error: 'Error when creating an item' });
            });
        });
    });

    describe('update', () => {
        const req = {
            user: {
                id: '1'
            },
            params: {
                id: '1'
            },
            body: item
        } as unknown as Request;

        describe('success', () => {
            it('should successfully update the item', async () => {
                jest.spyOn(ItemService, 'update').mockImplementation(() => {
                    return Promise.resolve(item);
                });

                await ItemController.update(req, fakeResponse);

                expect(ItemService.update).toHaveBeenCalledWith(req.params.id, { name: req.body.name });
                expect(fakeResponse.status).toHaveBeenCalledWith(200);
                expect(fakeResponse.json).toHaveBeenCalledWith(item);
            });
        });

        describe('error', () => {
            it('should return 404 with proper error message when creature is not found', async () => {
                jest.spyOn(ItemService, 'update').mockImplementation(() => {
                    return Promise.resolve(null);
                });

                await ItemController.update(req, fakeResponse);

                expect(ItemService.update).toHaveBeenCalledWith(req.params.id, { name: req.body.name });
                expect(fakeResponse.status).toHaveBeenCalledWith(404);
                expect(fakeResponse.json).toHaveBeenCalledWith({ error: 'Item not found' });
            });

            it('should return 500 with proper error message when catches an exception', async () => {
                jest.spyOn(ItemService, 'update').mockImplementation(() => {
                    return Promise.reject();
                });

                await ItemController.update(req, fakeResponse);

                expect(ItemService.update).toHaveBeenCalledWith(req.params.id, { name: req.body.name });
                expect(fakeResponse.status).toHaveBeenCalledWith(500);
                expect(fakeResponse.json).toHaveBeenCalledWith({ error: 'Error when updating an item' });
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
            it('should successfully delete the item', async () => {
                jest.spyOn(ItemService, 'delete').mockImplementation(() => {
                    return Promise.resolve(item);
                });

                await ItemController.delete(req, fakeResponse);

                expect(ItemService.delete).toHaveBeenCalledWith(req.params.id);
                expect(fakeResponse.status).toHaveBeenCalledWith(204);
                expect(fakeResponse.json).toHaveBeenCalledWith({ message: 'Item deleted with success' });
            });
        });

        describe('error', () => {
            it('should return 404 with proper error message when creature is not found', async () => {
                jest.spyOn(ItemService, 'delete').mockImplementation(() => {
                    return Promise.resolve(null);
                });

                await ItemController.delete(req, fakeResponse);

                expect(ItemService.delete).toHaveBeenCalledWith(req.params.id);
                expect(fakeResponse.status).toHaveBeenCalledWith(404);
                expect(fakeResponse.json).toHaveBeenCalledWith({ error: 'Item not found' });
            });

            it('should return 500 with proper error message when catches an exception', async () => {
                jest.spyOn(ItemService, 'delete').mockImplementation(() => {
                    return Promise.reject();
                });

                await ItemController.delete(req, fakeResponse);

                expect(ItemService.delete).toHaveBeenCalledWith(req.params.id);
                expect(fakeResponse.status).toHaveBeenCalledWith(500);
                expect(fakeResponse.json).toHaveBeenCalledWith({ error: 'Error when deleting an item' });
            });
        });
    });
});
