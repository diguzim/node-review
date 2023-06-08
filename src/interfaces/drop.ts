import { Types } from 'mongoose';

export interface IDrop {
    creatureId?: Types.ObjectId;
    itemId?: Types.ObjectId;
}