import { User } from "@models";

describe('User model', () => {
    describe('build', () => {
        it('should successfully build an user', () => {
            const name = 'Sample User';
            const email = 'email@example.com';
            const password = 'secret';

            const user = User.build({ name, email, password });

            expect(user.id).toBeDefined();
            expect(user.name).toBe(name);
            expect(user.email).toBe(email);
            expect(user.password).toBe(password);
        });
    });
});
