import { IItem } from '@interfaces';
import { Item, UserDoc } from '@models';

export const ItemService = {
    getAll: async () => {
        return await Item.find();
    },
    get: async (id: string) => {
        return await Item.findById(id);
    },
    create: async (params: IItem, user: UserDoc) => {
        const item = Item.build({
            ...params,
            userId: user?.id
        });
        await item.save();
        return item;
    },
    update: async (id: string, params: IItem) => {
        const item = await Item.findByIdAndUpdate(id, params, { new: true });
        return item;
    },
    delete: async (id: string) => {
        return await Item.findByIdAndDelete(id);
    }
};
