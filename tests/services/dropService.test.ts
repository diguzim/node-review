import { DropService } from "@services";
import { Drop, DropDoc } from "@models";
import { Query, Types } from "mongoose";

describe('DropService', () => {
    describe('getAll', () => {
        it('should call find method on Drop model', async () => {
            jest.spyOn(Drop, 'find').mockImplementation(() => {
                const query = new Query<unknown[], unknown, object, DropDoc, 'find'>();
                query.exec = jest.fn().mockResolvedValue([]);
                return query;
            });

            await DropService.getAll();
            expect(Drop.find).toHaveBeenCalled();
        });
    });

    describe('get', () => {
        it('should call findById method on Drop model', async () => {
            jest.spyOn(Drop, 'findById').mockImplementation(() => {
                const query = new Query<unknown[], unknown, object, DropDoc, 'findById'>();
                query.exec = jest.fn().mockResolvedValue(null);
                return query;
            });

            await DropService.get('1');
            expect(Drop.findById).toHaveBeenCalledWith('1');
        });
    });

    describe('create', () => {
        it('should call build method on Drop model', async () => {
            jest.spyOn(Drop.prototype, 'save').mockImplementation(() => {
                return Promise.resolve();
            });

            // create some ranmdom ObjectID

            await DropService.create({ creatureId: new Types.ObjectId, itemId: new Types.ObjectId });
            expect(Drop.prototype.save).toHaveBeenCalled();
        });
    });

    describe('update', () => {
        it('should call findByIdAndUpdate method on Drop model', async () => {
            const creatureId = new Types.ObjectId;
            const itemId = new Types.ObjectId;

            jest.spyOn(Drop, 'findByIdAndUpdate').mockImplementation(() => {
                const query = new Query<unknown[], unknown, object, DropDoc, 'findByIdAndUpdate'>();
                query.exec = jest.fn().mockResolvedValue(null);
                return query;
            });

            await DropService.update('1', { creatureId, itemId });
            expect(Drop.findByIdAndUpdate).toHaveBeenCalledWith('1', { creatureId, itemId }, { new: true });
        });
    });

    describe('delete', () => {
        it('should call findByIdAndDelete method on Drop model', async () => {
            jest.spyOn(Drop, 'findByIdAndDelete').mockImplementation(() => {
                const query = new Query<unknown[], unknown, object, DropDoc, 'findByIdAndDelete'>();
                query.exec = jest.fn().mockResolvedValue(null);
                return query;
            });

            await DropService.delete('1');
            expect(Drop.findByIdAndDelete).toHaveBeenCalledWith('1');
        });
    });
});
