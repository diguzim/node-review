import { Types } from 'mongoose';

export interface ICreatureLibraryEntry {
    creatureId: Types.ObjectId;
    text: string;
    race: string;
    pluralizedName: string;
}