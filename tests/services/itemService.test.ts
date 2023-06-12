import { Item, ItemDoc } from "@models";
import { ItemService } from "@services";
import { Query } from "mongoose";

describe('ItemService', () => {
    describe('getAll', () => {
        it('should call find method on Item model', async () => {
            jest.spyOn(Item, 'find').mockImplementation(() => {
                const query = new Query<unknown[], unknown, object, ItemDoc, 'find'>();
                query.exec = jest.fn().mockResolvedValue([]);
                return query;
            });

            await ItemService.getAll();
            expect(Item.find).toHaveBeenCalled();
        });
    });

    describe('get', () => {
        it('should call findById method on Item model', async () => {
            jest.spyOn(Item, 'findById').mockImplementation(() => {
                const query = new Query<unknown[], unknown, object, ItemDoc, 'findById'>();
                query.exec = jest.fn().mockResolvedValue(null);
                return query;
            });

            await ItemService.get('1');
            expect(Item.findById).toHaveBeenCalledWith('1');
        });
    });

    describe('create', () => {
        it('should call build method on Item model', async () => {
            jest.spyOn(Item.prototype, 'save').mockImplementation(() => {
                return Promise.resolve();
            });

            await ItemService.create({ name: 'test' }, { id: '1' } as any);
            expect(Item.prototype.save).toHaveBeenCalled();
        });
    });

    describe('update', () => {
        it('should call findByIdAndUpdate method on Item model', async () => {
            jest.spyOn(Item, 'findByIdAndUpdate').mockImplementation(() => {
                const query = new Query<unknown[], unknown, object, ItemDoc, 'findByIdAndUpdate'>();
                query.exec = jest.fn().mockResolvedValue(null);
                return query;
            });

            await ItemService.update('1', { name: 'test' });
            expect(Item.findByIdAndUpdate).toHaveBeenCalledWith('1', { name: 'test' }, { new: true });
        });
    });

    describe('delete', () => {
        it('should call findByIdAndDelete method on Item model', async () => {
            jest.spyOn(Item, 'findByIdAndDelete').mockImplementation(() => {
                const query = new Query<unknown[], unknown, object, ItemDoc, 'findByIdAndDelete'>();
                query.exec = jest.fn().mockResolvedValue(null);
                return query;
            });

            await ItemService.delete('1');
            expect(Item.findByIdAndDelete).toHaveBeenCalledWith('1');
        });
    });
});
