import { Types } from 'mongoose';

export interface IMonster {
    name: string;
    userId?: Types.ObjectId;
}