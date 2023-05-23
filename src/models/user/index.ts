import { IUser } from '@interfaces';
import mongoose from 'mongoose';

interface UserDoc extends mongoose.Document, IUser {}

interface UserModelInterface extends mongoose.Model<UserDoc> {
    build(attr: IUser): UserDoc;
}

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    }
});

userSchema.statics.build = (attr: IUser) => {
    return new User(attr);
};

const User = mongoose.model<IUser, UserModelInterface>('User', userSchema);

export { User };
