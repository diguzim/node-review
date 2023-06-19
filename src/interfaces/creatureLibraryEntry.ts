import { Types } from 'mongoose';

export interface ICreatureLibraryEntry {
    creatureId: Types.ObjectId;
    description: string;
    race: string;
    pluralizedName: string;
}