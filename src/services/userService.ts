import { IUser } from '@interfaces';
import { User } from '@models';
import bcrypt from 'bcryptjs';

export const UserService = {
    getAll: async () => {
        return await User.find();
    },
    get: async (id: string) => {
        return await User.findById(id);
    },
    create: async (params: IUser) => {
        const user = User.build(await buildUserParams(params));
        await user.save();
        return user;
    },
    update: async (id: string, params: IUser) => {
        const user = await User.findByIdAndUpdate(id, await buildUserParams(params), { new: true });
        return user;
    },
    delete: async(id: string) => {
        return await User.findByIdAndDelete(id);
    }
};

async function buildUserParams(params: IUser) {
    const { password, ...paramsWithoutPassword } = params;
    const hashedPassword = await bcrypt.hash(password, 10);
    return {
        ...paramsWithoutPassword, password: hashedPassword
    };
}