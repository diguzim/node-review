import { Types } from 'mongoose';

export interface IItem {
    name: string;
    userId?: Types.ObjectId;
}