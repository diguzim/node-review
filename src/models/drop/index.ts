import { IDrop } from '@interfaces';
import mongoose, { Types } from 'mongoose';

interface DropDoc extends mongoose.Document, IDrop { }

interface DropModelInterface extends mongoose.Model<DropDoc> {
    build(attr: IDrop): DropDoc;
}

const dropSchema = new mongoose.Schema({
    creatureId: {
        type: Types.ObjectId,
        ref: 'Monster',
        required: true
    },
    itemId: {
        type: Types.ObjectId,
        ref: 'Item',
        required: true
    }
});

dropSchema.statics.build = (attr: IDrop) => {
    return new Drop(attr);
};

const Drop = mongoose.model<IDrop, DropModelInterface>('Drop', dropSchema);

export { Drop };
