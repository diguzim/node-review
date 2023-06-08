import { Types } from 'mongoose';

export interface ICreature {
    name: string;
    userId?: Types.ObjectId;
}