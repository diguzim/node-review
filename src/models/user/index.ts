import { IUser } from '@interfaces';
import mongoose from 'mongoose';

export interface UserDoc extends mongoose.Document, IUser { }

interface UserModelInterface extends mongoose.Model<UserDoc> {
    build(attr: IUser): UserDoc;
}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});

userSchema.statics.build = (attr: IUser) => {
    return new User(attr);
};

export const User = mongoose.model<IUser, UserModelInterface>('User', userSchema);
