import { CreatureController } from '@controllers';
import { CreatureService } from '@services';
import { Request } from 'express';

import { fakeResponse } from '@test_helpers';

describe('CreatureController', () => {
    const creature = {
        name: 'creature name',
        userId: '1'
    } as any;


    describe('getAll', () => {
        describe('success', () => {
            it('should successfully return all the creatures', async () => {
                jest.spyOn(CreatureService, 'getAll').mockImplementation(() => {
                    return Promise.resolve([creature]);
                });

                const req = {} as Request;

                await CreatureController.getAll(req, fakeResponse);

                expect(CreatureService.getAll).toHaveBeenCalled();
                expect(fakeResponse.status).toHaveBeenCalledWith(200);
                expect(fakeResponse.json).toHaveBeenCalledWith([creature]);
            });
        });

        describe('error', () => {
            it('should return 500 with proper error message when catches an exception', async () => {
                jest.spyOn(CreatureService, 'getAll').mockImplementation(() => {
                    return Promise.reject();
                });

                const req = {} as Request;

                await CreatureController.getAll(req, fakeResponse);

                expect(CreatureService.getAll).toHaveBeenCalled();
                expect(fakeResponse.status).toHaveBeenCalledWith(500);
                expect(fakeResponse.json).toHaveBeenCalledWith({ error: 'Error when fething creatures' });
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
            it('should successfully return the creature', async () => {
                jest.spyOn(CreatureService, 'get').mockImplementation(() => {
                    return Promise.resolve(creature);
                });

                await CreatureController.get(req, fakeResponse);

                expect(CreatureService.get).toHaveBeenCalledWith(req.params.id);
                expect(fakeResponse.status).toHaveBeenCalledWith(200);
                expect(fakeResponse.json).toHaveBeenCalledWith(creature);
            });
        });

        describe('error', () => {
            it('should return 404 with proper error message when user is not found', async () => {
                jest.spyOn(CreatureService, 'get').mockImplementation(() => {
                    return Promise.resolve(null);
                });

                await CreatureController.get(req, fakeResponse);

                expect(CreatureService.get).toHaveBeenCalledWith(req.params.id);
                expect(fakeResponse.status).toHaveBeenCalledWith(404);
                expect(fakeResponse.json).toHaveBeenCalledWith({ error: 'Creature not found' });
            });

            it('should return 500 with proper error message when catches an exception', async () => {
                jest.spyOn(CreatureService, 'get').mockImplementation(() => {
                    return Promise.reject();
                });

                await CreatureController.get(req, fakeResponse);

                expect(CreatureService.get).toHaveBeenCalledWith(req.params.id);
                expect(fakeResponse.status).toHaveBeenCalledWith(500);
                expect(fakeResponse.json).toHaveBeenCalledWith({ error: 'Error when fething creature' });
            });
        });
    });

    describe('create', () => {
        const req = {
            user: {
                id: '1'
            },
            body: {
                name: 'creature name'
            }
        } as unknown as Request;

        describe('success', () => {
            it('should successfully create a creature', async () => {
                jest.spyOn(CreatureService, 'create').mockImplementation(() => {
                    return Promise.resolve(creature);
                });

                await CreatureController.create(req, fakeResponse);

                expect(CreatureService.create).toHaveBeenCalledWith({ name: req.body.name }, { id: "1" });
                expect(fakeResponse.status).toHaveBeenCalledWith(201);
                expect(fakeResponse.json).toHaveBeenCalledWith(creature);
            });
        });

        describe('error', () => {
            it('should return 500 with proper error message when catches an exception', async () => {
                jest.spyOn(CreatureService, 'create').mockImplementation(() => {
                    return Promise.reject();
                });

                await CreatureController.create(req, fakeResponse);

                expect(CreatureService.create).toHaveBeenCalledWith({ name: req.body.name }, { id: "1" });
                expect(fakeResponse.status).toHaveBeenCalledWith(500);
                expect(fakeResponse.json).toHaveBeenCalledWith({ error: 'Error when creating a creature' });
            });
        });
    });

    describe('update', () => {
        const req = {
            params: {
                id: '1'
            },
            body: {
                name: 'creature name'
            }
        } as unknown as Request;

        describe('success', () => {
            it('should successfully update a creature', async () => {
                jest.spyOn(CreatureService, 'update').mockImplementation(() => {
                    return Promise.resolve(creature);
                });

                await CreatureController.update(req, fakeResponse);

                expect(CreatureService.update).toHaveBeenCalledWith(req.params.id, { name: req.body.name });
                expect(fakeResponse.status).toHaveBeenCalledWith(200);
                expect(fakeResponse.json).toHaveBeenCalledWith(creature);
            });
        });

        describe('error', () => {
            it('should return 404 with proper error message when creature is not found', async () => {
                jest.spyOn(CreatureService, 'update').mockImplementation(() => {
                    return Promise.resolve(null);
                });

                await CreatureController.update(req, fakeResponse);

                expect(CreatureService.update).toHaveBeenCalledWith(req.params.id, { name: req.body.name });
                expect(fakeResponse.status).toHaveBeenCalledWith(404);
                expect(fakeResponse.json).toHaveBeenCalledWith({ error: 'Creature not found' });
            });

            it('should return 500 with proper error message when catches an exception', async () => {
                jest.spyOn(CreatureService, 'update').mockImplementation(() => {
                    return Promise.reject();
                });

                await CreatureController.update(req, fakeResponse);

                expect(CreatureService.update).toHaveBeenCalledWith(req.params.id, { name: req.body.name });
                expect(fakeResponse.status).toHaveBeenCalledWith(500);
                expect(fakeResponse.json).toHaveBeenCalledWith({ error: 'Error when updating a creature' });
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
            it('should successfully delete a creature', async () => {
                jest.spyOn(CreatureService, 'delete').mockImplementation(() => {
                    return Promise.resolve(creature);
                });

                await CreatureController.delete(req, fakeResponse);

                expect(CreatureService.delete).toHaveBeenCalledWith(req.params.id);
                expect(fakeResponse.status).toHaveBeenCalledWith(204);
                expect(fakeResponse.json).not.toHaveBeenCalled();
            });
        });

        describe('error', () => {
            it('should return 404 with proper error message when creature is not found', async () => {
                jest.spyOn(CreatureService, 'delete').mockImplementation(() => {
                    return Promise.resolve(null);
                });

                await CreatureController.delete(req, fakeResponse);

                expect(CreatureService.delete).toHaveBeenCalledWith(req.params.id);
                expect(fakeResponse.status).toHaveBeenCalledWith(404);
                expect(fakeResponse.json).toHaveBeenCalledWith({ error: 'Creature not found' });
            });

            it('should return 500 with proper error message when catches an exception', async () => {
                jest.spyOn(CreatureService, 'delete').mockImplementation(() => {
                    return Promise.reject();
                });

                await CreatureController.delete(req, fakeResponse);

                expect(CreatureService.delete).toHaveBeenCalledWith(req.params.id);
                expect(fakeResponse.status).toHaveBeenCalledWith(500);
                expect(fakeResponse.json).toHaveBeenCalledWith({ error: 'Error when deleting a creature' });
            });
        });
    });
});

