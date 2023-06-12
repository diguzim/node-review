import { UserService } from '@services';
import { Request, Response } from 'express';

export const UserController = {
    getAll: async (req: Request, res: Response) => {
        try {
            const users = await UserService.getAll();

            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: 'Error when fething users' });
        }
    },
    get: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const user = await UserService.get(id);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: 'Error when fething an user' });
        }
    },
    create: async (req: Request, res: Response) => {
        try {
            const user = await UserService.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ error: 'Error when creating an user' });
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const user = await UserService.update(id, req.body);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.status(200).json(user);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Error when updating an user' });
        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const user = await UserService.delete(id);

            if (!user) {
                return res.status(404).json({ error: 'user not found' });
            }

            res.status(200).json({ message: 'User deleted with success' });
        } catch (error) {
            res.status(500).json({ error: 'Error when deleting an user' });
        }
    },
    login: async (req: Request, res: Response) => {
        try {
            const token = await UserService.login(req.body);
            res.status(200).json({ authenticationToken: token });
        } catch (error) {
            res.status(500).json({ error: 'Error when authenticating an user' });
        }
    }
};