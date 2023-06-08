import { ICreature } from '@interfaces';
import { Creature, UserDoc } from '@models';

export const CreatureService = {
    getAll: async () => {
        return await Creature.find();
    },
    get: async (id: string) => {
        return await Creature.findById(id);
    },
    create: async (params: ICreature, user: UserDoc) => {
        const creature = Creature.build({
            ...params,
            userId: user?.id
        });
        await creature.save();
        return creature;
    },
    update: async (id: string, params: ICreature) => {
        const creature = await Creature.findByIdAndUpdate(id, params, { new: true });
        return creature;
    },
    delete: async (id: string) => {
        return await Creature.findByIdAndDelete(id);
    }
};
