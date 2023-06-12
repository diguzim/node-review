import { IItem } from '@interfaces';
import mongoose, { Types } from 'mongoose';

export interface ItemDoc extends mongoose.Document, IItem { }

interface ItemModelInterface extends mongoose.Model<ItemDoc> {
    build(attr: IItem): ItemDoc;
}

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: Types.ObjectId,
        ref: 'User',
        required: false
    }
});

itemSchema.statics.build = (attr: IItem) => {
    return new Item(attr);
};

export const Item = mongoose.model<IItem, ItemModelInterface>('Item', itemSchema);
