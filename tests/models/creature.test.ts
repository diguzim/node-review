import { Creature, User } from "@models";

describe('Creature model', () => {
    describe('build', () => {
        const name = 'Sample User';
        const email = 'email@example.com';
        const password = 'secret';

        const user = User.build({ name, email, password });

        it('should successfully build a creature', () => {
            const name = 'Sample Creature';

            const creature = Creature.build({ name, userId: user.id });

            expect(creature.id).toBeDefined();
            expect(creature.name).toBe(name);
            expect(creature.userId?.toString()).toEqual(user.id.toString());
        });
    });
});
