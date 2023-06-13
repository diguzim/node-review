import { Item, User } from "@models";

describe('Item model', () => {
    describe('build', () => {
        const name = 'Sample User';
        const email = 'email@example.com';
        const password = 'secret';

        const user = User.build({ name, email, password });

        it('should successfully build a creature', () => {
            const name = 'Sample Item';

            const creature = Item.build({ name, userId: user.id });

            expect(creature.id).toBeDefined();
            expect(creature.name).toBe(name);
            expect(creature.userId?.toString()).toEqual(user.id.toString());
        });
    });
});
