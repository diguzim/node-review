import { IDrop } from '@interfaces';
import { Drop } from '@models';

export const DropService = {
    getAll: async () => {
        return await Drop.find();
    },
    get: async (id: string) => {
        return await Drop.findById(id);
    },
    create: async (params: IDrop) => {
        const drop = Drop.build(params);
        await drop.save();
        return drop;
    },
    update: async (id: string, params: IDrop) => {
        const drop = await Drop.findByIdAndUpdate(id, params, { new: true });
        return drop;
    },
    delete: async (id: string) => {
        return await Drop.findByIdAndDelete(id);
    }
};
