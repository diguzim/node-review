import { IMonster } from '@interfaces';
import { Monster } from '@models';

export const MonsterService = {
    getAll: async () => {
        return await Monster.find();
    },
    get: async (id: string) => {
        return await Monster.findById(id);
    },
    create: async (params: IMonster) => {
        const monster = Monster.build(params);
        await monster.save();
        return monster;
    },
    update: async (id: string, params: IMonster) => {
        const monster = await Monster.findByIdAndUpdate(id, params, { new: true });
        return monster;
    },
    delete: async(id: string) => {
        return await Monster.findByIdAndDelete(id);
    }
};
