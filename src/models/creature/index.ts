import { ICreature } from '@interfaces';
import mongoose, { Types } from 'mongoose';

export interface CreatureDoc extends mongoose.Document, ICreature { }

interface CreatureModelInterface extends mongoose.Model<CreatureDoc> {
    build(attr: ICreature): CreatureDoc;
}

const creatureSchema = new mongoose.Schema({
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

creatureSchema.statics.build = (attr: ICreature) => {
    return new Creature(attr);
};

export const Creature = mongoose.model<ICreature, CreatureModelInterface>('Creature', creatureSchema);
