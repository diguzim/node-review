// Create tests similar to the existing tests for the other services on this repository
import { User, UserDoc } from "@models";
import { UserService } from "@services";
import { Query } from "mongoose";

describe('UserService', () => {
    describe('getAll', () => {
        it('should call find method on User model', async () => {
            jest.spyOn(User, 'find').mockImplementation(() => {
                const query = new Query<unknown[], unknown, object, UserDoc, 'find'>();
                query.exec = jest.fn().mockResolvedValue([]);
                return query;
            });

            await UserService.getAll();
            expect(User.find).toHaveBeenCalled();
        });
    });

    describe('get', () => {
        it('should call findById method on User model', async () => {
            jest.spyOn(User, 'findById').mockImplementation(() => {
                const query = new Query<unknown[], unknown, object, UserDoc, 'findById'>();
                query.exec = jest.fn().mockResolvedValue(null);
                return query;
            });

            await UserService.get('1');
            expect(User.findById).toHaveBeenCalledWith('1');
        });
    });

    describe('create', () => {
        it('should call build method on User model', async () => {
            jest.spyOn(User.prototype, 'save').mockImplementation(() => {
                return Promise.resolve();
            });

            await UserService.create({ name: 'test', email: 'test@example.com', password: 'secret' });
            expect(User.prototype.save).toHaveBeenCalled();
        });
    });

    describe('update', () => {
        it('should call findByIdAndUpdate method on User model', async () => {
            const password = 'secret';

            jest.spyOn(User, 'findByIdAndUpdate').mockImplementation(() => {
                const query = new Query<unknown[], unknown, object, UserDoc, 'findByIdAndUpdate'>();
                query.exec = jest.fn().mockResolvedValue(null);
                return query;
            });

            await UserService.update('1', { name: 'test', email: 'test@example.com', password });
            expect(User.findByIdAndUpdate).toHaveBeenCalledWith(
                '1',
                {
                    name: 'test',
                    email: 'test@example.com',
                    password: expect.stringMatching(/^((?!password).)*$/)
                },
                { new: true }
            );
        });
    });
    describe('delete', () => {
        it('should call findByIdAndDelete method on User model', async () => {
            jest.spyOn(User, 'findByIdAndDelete').mockImplementation(() => {
                const query = new Query<unknown[], unknown, object, UserDoc, 'findByIdAndDelete'>();
                query.exec = jest.fn().mockResolvedValue(null);
                return query;
            });

            await UserService.delete('1');
            expect(User.findByIdAndDelete).toHaveBeenCalledWith('1');
        });
    });
});
