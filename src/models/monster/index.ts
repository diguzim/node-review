import { IMonster } from '@interfaces';
import mongoose, { Types } from 'mongoose';

interface MonsterDoc extends mongoose.Document, IMonster {}

interface MonsterModelInterface extends mongoose.Model<MonsterDoc> {
    build(attr: IMonster): MonsterDoc;
}

const monsterSchema = new mongoose.Schema({
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

monsterSchema.statics.build = (attr: IMonster) => {
    return new Monster(attr);
};

const Monster = mongoose.model<IMonster, MonsterModelInterface>('Monster', monsterSchema);

export { Monster };
