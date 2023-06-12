import { Creature, CreatureDoc } from "@models";
import { CreatureService } from "@services";
import { Query } from "mongoose";

describe('CreatureService', () => {
    describe('getAll', () => {
        it('should call find method on Creature model', async () => {
            jest.spyOn(Creature, 'find').mockImplementation(() => {
                const query = new Query<unknown[], unknown, object, CreatureDoc, 'find'>();
                query.exec = jest.fn().mockResolvedValue([]);
                return query;
            });

            await CreatureService.getAll();
            expect(Creature.find).toHaveBeenCalled();
        });
    });

    describe('get', () => {
        it('should call findById method on Creature model', async () => {
            jest.spyOn(Creature, 'findById').mockImplementation(() => {
                const query = new Query<unknown[], unknown, object, CreatureDoc, 'findById'>();
                query.exec = jest.fn().mockResolvedValue(null);
                return query;
            });

            await CreatureService.get('1');
            expect(Creature.findById).toHaveBeenCalledWith('1');
        });
    });

    describe('create', () => {
        it('should call build method on Creature model', async () => {
            jest.spyOn(Creature.prototype, 'save').mockImplementation(() => {
                return Promise.resolve();
            });

            await CreatureService.create({ name: 'test' }, { id: '1' } as any);
            expect(Creature.prototype.save).toHaveBeenCalled();
        });
    });

    describe('update', () => {
        it('should call findByIdAndUpdate method on Creature model', async () => {
            jest.spyOn(Creature, 'findByIdAndUpdate').mockImplementation(() => {
                const query = new Query<unknown[], unknown, object, CreatureDoc, 'findByIdAndUpdate'>();
                query.exec = jest.fn().mockResolvedValue(null);
                return query;
            });

            await CreatureService.update('1', { name: 'test' });
            expect(Creature.findByIdAndUpdate).toHaveBeenCalledWith('1', { name: 'test' }, { new: true });
        });
    });

    describe('delete', () => {
        it('should call findByIdAndDelete method on Creature model', async () => {
            jest.spyOn(Creature, 'findByIdAndDelete').mockImplementation(() => {
                const query = new Query<unknown[], unknown, object, CreatureDoc, 'findByIdAndDelete'>();
                query.exec = jest.fn().mockResolvedValue(null);
                return query;
            });

            await CreatureService.delete('1');
            expect(Creature.findByIdAndDelete).toHaveBeenCalledWith('1');
        });
    });
});