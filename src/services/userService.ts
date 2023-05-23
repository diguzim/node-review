import { IUser } from '@interfaces';
import { User } from '@models';

export const UserService = {
    getAll: async () => {
        return await User.find();
    },
    get: async (id: string) => {
        return await User.findById(id);
    },
    create: async (params: IUser) => {
        const user = User.build(params);
        await user.save();
        return user;
    },
    update: async (id: string, params: IUser) => {
        const user = await User.findByIdAndUpdate(id, params, { new: true });
        return user;
    },
    delete: async(id: string) => {
        return await User.findByIdAndDelete(id);
    }
};
