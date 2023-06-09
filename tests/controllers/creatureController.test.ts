import { CreatureController } from '@controllers';
import { CreatureService } from '@services';
import { Request, Response } from 'express';

test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
});

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
                const res = {
                    json: jest.fn(),
                    status: jest.fn(() => res),
                } as unknown as Response;

                await CreatureController.getAll(req, res);

                expect(CreatureService.getAll).toHaveBeenCalled();
                expect(res.status).toHaveBeenCalledWith(200);
                expect(res.json).toHaveBeenCalledWith([creature]);
            });
        });

        describe('error', () => {
            it('should return 500 with proper error message when catches an exception', async () => {
                jest.spyOn(CreatureService, 'getAll').mockImplementation(() => {
                    return Promise.reject();
                });

                const req = {} as Request;
                const res = {
                    json: jest.fn(),
                    status: jest.fn(() => res),
                } as unknown as Response;

                await CreatureController.getAll(req, res);

                expect(CreatureService.getAll).toHaveBeenCalled();
                expect(res.status).toHaveBeenCalledWith(500);
                expect(res.json).toHaveBeenCalledWith({ error: 'Error when fething creatures' });
            });
        });
    });

    describe('get', () => {
        describe('success', () => {
            it('should successfully return the creature', async () => {
                jest.spyOn(CreatureService, 'get').mockImplementation(() => {
                    return Promise.resolve(creature);
                });

                const req = {
                    params: {
                        id: '1'
                    }
                } as unknown as Request;
                const res = {
                    json: jest.fn(),
                    status: jest.fn(() => res),
                } as unknown as Response;

                await CreatureController.get(req, res);

                expect(CreatureService.get).toHaveBeenCalledWith('1');
                expect(res.status).toHaveBeenCalledWith(200);
                expect(res.json).toHaveBeenCalledWith(creature);
            });
        });

        describe('error', () => {
            it('should return 404 with proper error message when user is not found', async () => {
                jest.spyOn(CreatureService, 'get').mockImplementation(() => {
                    return Promise.resolve(null);
                });

                const req = {
                    params: {
                        id: '1'
                    }
                } as unknown as Request;
                const res = {
                    json: jest.fn(),
                    status: jest.fn(() => res),
                } as unknown as Response;

                await CreatureController.get(req, res);

                expect(CreatureService.get).toHaveBeenCalledWith('1');
                expect(res.status).toHaveBeenCalledWith(404);
                expect(res.json).toHaveBeenCalledWith({ error: 'Creature not found' });
            });

            it('should return 500 with proper error message when catches an exception', async () => {
                jest.spyOn(CreatureService, 'get').mockImplementation(() => {
                    return Promise.reject();
                });

                const req = {
                    params: {
                        id: '1'
                    }
                } as unknown as Request;
                const res = {
                    json: jest.fn(),
                    status: jest.fn(() => res),
                } as unknown as Response;

                await CreatureController.get(req, res);

                expect(CreatureService.get).toHaveBeenCalledWith('1');
                expect(res.status).toHaveBeenCalledWith(500);
                expect(res.json).toHaveBeenCalledWith({ error: 'Error when fething creature' });
            });
        });
    });

    describe('create', () => {
        describe('success', () => {
            it('should successfully create a creature', async () => {
                jest.spyOn(CreatureService, 'create').mockImplementation(() => {
                    return Promise.resolve(creature);
                });

                const req = {
                    user: {
                        id: '1'
                    },
                    body: {
                        name: 'creature name'
                    }
                } as unknown as Request;
                const res = {
                    json: jest.fn(),
                    status: jest.fn(() => res),
                } as unknown as Response;

                await CreatureController.create(req, res);

                expect(CreatureService.create).toHaveBeenCalledWith({ name: 'creature name' }, { id: '1' });
                expect(res.status).toHaveBeenCalledWith(201);
                expect(res.json).toHaveBeenCalledWith(creature);
            });
        });

        describe('error', () => {
            it('should return 500 with proper error message when catches an exception', async () => {
                jest.spyOn(CreatureService, 'create').mockImplementation(() => {
                    return Promise.reject();
                });

                const req = {
                    user: {
                        id: '1'
                    },
                    body: {
                        name: 'creature name'
                    }
                } as unknown as Request;
                const res = {
                    json: jest.fn(),
                    status: jest.fn(() => res),
                } as unknown as Response;

                await CreatureController.create(req, res);

                expect(CreatureService.create).toHaveBeenCalledWith({ name: 'creature name' }, { id: '1' });
                expect(res.status).toHaveBeenCalledWith(500);
                expect(res.json).toHaveBeenCalledWith({ error: 'Error when creating a creature' });
            });
        });
    });

    describe('update', () => {
        describe('success', () => {
            it('should successfully update a creature', async () => {
                jest.spyOn(CreatureService, 'update').mockImplementation(() => {
                    return Promise.resolve(creature);
                });

                const req = {
                    params: {
                        id: '1'
                    },
                    body: {
                        name: 'creature name'
                    }
                } as unknown as Request;
                const res = {
                    json: jest.fn(),
                    status: jest.fn(() => res),
                } as unknown as Response;

                await CreatureController.update(req, res);

                expect(CreatureService.update).toHaveBeenCalledWith('1', { name: 'creature name' });
                expect(res.status).toHaveBeenCalledWith(200);
                expect(res.json).toHaveBeenCalledWith(creature);
            });
        });

        describe('error', () => {
            it('should return 404 with proper error message when creature is not found', async () => {
                jest.spyOn(CreatureService, 'update').mockImplementation(() => {
                    return Promise.resolve(null);
                });

                const req = {
                    params: {
                        id: '1'
                    },
                    body: {
                        name: 'creature name'
                    }
                } as unknown as Request;
                const res = {
                    json: jest.fn(),
                    status: jest.fn(() => res),
                } as unknown as Response;

                await CreatureController.update(req, res);

                expect(CreatureService.update).toHaveBeenCalledWith('1', { name: 'creature name' });
                expect(res.status).toHaveBeenCalledWith(404);
                expect(res.json).toHaveBeenCalledWith({ error: 'Creature not found' });
            });

            it('should return 500 with proper error message when catches an exception', async () => {
                jest.spyOn(CreatureService, 'update').mockImplementation(() => {
                    return Promise.reject();
                });

                const req = {
                    params: {
                        id: '1'
                    },
                    body: {
                        name: 'creature name'
                    }
                } as unknown as Request;
                const res = {
                    json: jest.fn(),
                    status: jest.fn(() => res),
                } as unknown as Response;

                await CreatureController.update(req, res);

                expect(CreatureService.update).toHaveBeenCalledWith('1', { name: 'creature name' });
                expect(res.status).toHaveBeenCalledWith(500);
                expect(res.json).toHaveBeenCalledWith({ error: 'Error when updating a creature' });
            });
        });
    });

    describe('delete', () => {
        describe('success', () => {
            it('should successfully delete a creature', async () => {
                jest.spyOn(CreatureService, 'delete').mockImplementation(() => {
                    return Promise.resolve(creature);
                });

                const req = {
                    params: {
                        id: '1'
                    }
                } as unknown as Request;
                const res = {
                    json: jest.fn(),
                    status: jest.fn(() => res),
                } as unknown as Response;

                await CreatureController.delete(req, res);

                expect(CreatureService.delete).toHaveBeenCalledWith('1');
                expect(res.status).toHaveBeenCalledWith(204);
                expect(res.json).not.toHaveBeenCalled();
            });
        });

        describe('error', () => {
            it('should return 404 with proper error message when creature is not found', async () => {
                jest.spyOn(CreatureService, 'delete').mockImplementation(() => {
                    return Promise.resolve(null);
                });

                const req = {
                    params: {
                        id: '1'
                    }
                } as unknown as Request;
                const res = {
                    json: jest.fn(),
                    status: jest.fn(() => res),
                } as unknown as Response;

                await CreatureController.delete(req, res);

                expect(CreatureService.delete).toHaveBeenCalledWith('1');
                expect(res.status).toHaveBeenCalledWith(404);
                expect(res.json).toHaveBeenCalledWith({ error: 'Creature not found' });
            });

            it('should return 500 with proper error message when catches an exception', async () => {
                jest.spyOn(CreatureService, 'delete').mockImplementation(() => {
                    return Promise.reject();
                });

                const req = {
                    params: {
                        id: '1'
                    }
                } as unknown as Request;
                const res = {
                    json: jest.fn(),
                    status: jest.fn(() => res),
                } as unknown as Response;

                await CreatureController.delete(req, res);

                expect(CreatureService.delete).toHaveBeenCalledWith('1');
                expect(res.status).toHaveBeenCalledWith(500);
                expect(res.json).toHaveBeenCalledWith({ error: 'Error when deleting a creature' });
            });
        });
    });
});

