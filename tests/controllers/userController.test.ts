import { UserController } from "@controllers";
import { UserService } from "@services";
import { fakeResponse } from "@test_helpers";
import { Request } from "express";

describe('UserController', () => {
    const user = {
        name: 'user name',
        email: 'user email',
        password: 'user password'
    } as any;

    describe('getAll', () => {
        describe('success', () => {
            it('should successfully return all the users', async () => {
                jest.spyOn(UserService, 'getAll').mockImplementation(() => {
                    return Promise.resolve([user]);
                });

                const req = {} as Request;

                await UserController.getAll(req, fakeResponse);

                expect(UserService.getAll).toHaveBeenCalled();
                expect(fakeResponse.status).toHaveBeenCalledWith(200);
                expect(fakeResponse.json).toHaveBeenCalledWith([user]);
            });
        });

        describe('error', () => {
            it('should return 500 with proper error message when catches an exception', async () => {
                jest.spyOn(UserService, 'getAll').mockImplementation(() => {
                    return Promise.reject();
                });

                const req = {} as Request;

                await UserController.getAll(req, fakeResponse);

                expect(UserService.getAll).toHaveBeenCalled();
                expect(fakeResponse.status).toHaveBeenCalledWith(500);
                expect(fakeResponse.json).toHaveBeenCalledWith({ error: 'Error when fething users' });
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
            it('should successfully return the user', async () => {
                jest.spyOn(UserService, 'get').mockImplementation(() => {
                    return Promise.resolve(user);
                });

                await UserController.get(req, fakeResponse);

                expect(UserService.get).toHaveBeenCalled();
                expect(fakeResponse.status).toHaveBeenCalledWith(200);
                expect(fakeResponse.json).toHaveBeenCalledWith(user);
            });
        });

        describe('error', () => {
            it('should return 500 with proper error message when catches an exception', async () => {
                jest.spyOn(UserService, 'get').mockImplementation(() => {
                    return Promise.reject();
                });

                await UserController.get(req, fakeResponse);

                expect(UserService.get).toHaveBeenCalled();
                expect(fakeResponse.status).toHaveBeenCalledWith(500);
                expect(fakeResponse.json).toHaveBeenCalledWith({ error: 'Error when fething an user' });
            });
        });
    });

    describe('create', () => {
        const req = {
            body: user
        } as unknown as Request;

        describe('success', () => {
            it('should successfully create the user', async () => {
                jest.spyOn(UserService, 'create').mockImplementation(() => {
                    return Promise.resolve(user);
                });

                await UserController.create(req, fakeResponse);

                expect(UserService.create).toHaveBeenCalled();
                expect(fakeResponse.status).toHaveBeenCalledWith(201);
                expect(fakeResponse.json).toHaveBeenCalledWith(user);
            });
        });

        describe('error', () => {
            it('should return 500 with proper error message when catches an exception', async () => {
                jest.spyOn(UserService, 'create').mockImplementation(() => {
                    return Promise.reject();
                });

                await UserController.create(req, fakeResponse);

                expect(UserService.create).toHaveBeenCalled();
                expect(fakeResponse.status).toHaveBeenCalledWith(500);
                expect(fakeResponse.json).toHaveBeenCalledWith({ error: 'Error when creating an user' });
            });
        });
    });

    describe('update', () => {
        const req = {
            params: {
                id: '1'
            },
            body: user
        } as unknown as Request;

        describe('success', () => {
            it('should successfully update the user', async () => {
                jest.spyOn(UserService, 'update').mockImplementation(() => {
                    return Promise.resolve(user);
                });

                await UserController.update(req, fakeResponse);

                expect(UserService.update).toHaveBeenCalled();
                expect(fakeResponse.status).toHaveBeenCalledWith(200);
                expect(fakeResponse.json).toHaveBeenCalledWith(user);
            });
        });

        describe('error', () => {
            it('should return 404 with proper error message when user is not found', async () => {
                jest.spyOn(UserService, 'update').mockImplementation(() => {
                    return Promise.resolve(null);
                });

                await UserController.update(req, fakeResponse);

                expect(UserService.update).toHaveBeenCalled();
                expect(fakeResponse.status).toHaveBeenCalledWith(404);
                expect(fakeResponse.json).toHaveBeenCalledWith({ error: 'User not found' });
            });

            it('should return 500 with proper error message when catches an exception', async () => {
                jest.spyOn(UserService, 'update').mockImplementation(() => {
                    return Promise.reject();
                });

                await UserController.update(req, fakeResponse);

                expect(UserService.update).toHaveBeenCalled();
                expect(fakeResponse.status).toHaveBeenCalledWith(500);
                expect(fakeResponse.json).toHaveBeenCalledWith({ error: 'Error when updating an user' });
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
            it('should successfully delete the user', async () => {
                jest.spyOn(UserService, 'delete').mockImplementation(() => {
                    return Promise.resolve(user);
                });

                await UserController.delete(req, fakeResponse);

                expect(UserService.delete).toHaveBeenCalled();
                expect(fakeResponse.status).toHaveBeenCalledWith(200);
                expect(fakeResponse.json).toHaveBeenCalledWith({ message: 'User deleted with success' });
            });
        });

        describe('error', () => {
            it('should return 404 with proper error message when user is not found', async () => {
                jest.spyOn(UserService, 'delete').mockImplementation(() => {
                    return Promise.resolve(null);
                });

                await UserController.delete(req, fakeResponse);

                expect(UserService.delete).toHaveBeenCalled();
                expect(fakeResponse.status).toHaveBeenCalledWith(404);
                expect(fakeResponse.json).toHaveBeenCalledWith({ error: 'User not found' });
            });

            it('should return 500 with proper error message when catches an exception', async () => {
                jest.spyOn(UserService, 'delete').mockImplementation(() => {
                    return Promise.reject();
                });

                await UserController.delete(req, fakeResponse);

                expect(UserService.delete).toHaveBeenCalled();
                expect(fakeResponse.status).toHaveBeenCalledWith(500);
                expect(fakeResponse.json).toHaveBeenCalledWith({ error: 'Error when deleting an user' });
            });
        });
    });

    describe('login', () => {
        const req = {
            body: {
                email: 'user email',
                password: 'user password'
            }
        } as unknown as Request;

        describe('success', () => {
            const token = 'token';
            it('should successfully login the user', async () => {
                jest.spyOn(UserService, 'login').mockImplementation(() => {
                    return Promise.resolve(token);
                });

                await UserController.login(req, fakeResponse);

                expect(UserService.login).toHaveBeenCalled();
                expect(fakeResponse.status).toHaveBeenCalledWith(200);
                expect(fakeResponse.json).toHaveBeenCalledWith({ authenticationToken: token });
            });
        });

        describe('error', () => {
            it('should return 500 with proper error message when catches an exception', async () => {
                jest.spyOn(UserService, 'login').mockImplementation(() => {
                    return Promise.reject();
                });

                await UserController.login(req, fakeResponse);

                expect(UserService.login).toHaveBeenCalled();
                expect(fakeResponse.status).toHaveBeenCalledWith(500);
                expect(fakeResponse.json).toHaveBeenCalledWith({ error: 'Error when authenticating an user' });
            });
        });
    });
});
