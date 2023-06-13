import { Item, Creature, User, Drop } from "@models";

describe('Drop model', () => {
    describe('build', () => {
        const name = 'Sample User';
        const email = 'email@example.com';
        const password = 'secret';

        const user = User.build({ name, email, password });
        const creature = Creature.build({ name: "Sample Creature", userId: user.id });
        const item = Item.build({ name: "Sample Item", userId: user.id });

        it('should successfully build a creature', () => {
            const drop = Drop.build({ creatureId: creature.id, itemId: item.id });

            expect(drop.id).toBeDefined();
            expect(drop.creatureId?.toString()).toEqual(creature.id.toString());
            expect(drop.itemId?.toString()).toEqual(item.id.toString());
        });
    });
});
