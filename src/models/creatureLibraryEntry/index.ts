import { ICreatureLibraryEntry } from '@interfaces';
import mongoose, { Types } from 'mongoose';

export interface CreatureLibraryEntryDoc extends mongoose.Document, ICreatureLibraryEntry { }

interface CreatureLibraryEntryModelInterface extends mongoose.Model<CreatureLibraryEntryDoc> {
    build(attr: ICreatureLibraryEntry): CreatureLibraryEntryDoc;
}

const creatureLibraryEntrySchema = new mongoose.Schema({
    creatureId: {
        type: Types.ObjectId,
        ref: 'Creature',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    pluralizedName: {
        type: String,
        required: true
    }
});

creatureLibraryEntrySchema.statics.build = (attr: ICreatureLibraryEntry) => {
    return new CreatureLibraryEntry(attr);
};

export const CreatureLibraryEntry = mongoose.model<ICreatureLibraryEntry, CreatureLibraryEntryModelInterface>('CreatureLibraryEntry', creatureLibraryEntrySchema);
