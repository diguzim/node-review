import { UserService } from '@services';
import { Request, Response } from 'express';

export const UserController = {
    getAll: async (req: Request, res: Response) => {
        try {
            const users = await UserService.getAll();
    
            res.json(users);
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
    
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: 'Error when fething user' });
        }
    },
    create: async (req: Request, res: Response) => {
        try {
            const { name, email } = req.body;
    
            const user = await UserService.create({ name, email });
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: 'Error when creating a user' });
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { name, email } = req.body;
    
            const user = await UserService.update(id, { name, email });
    
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
    
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: 'Error when updating a user' });
        }
    },
    delete: async(req: Request, res: Response) => {
        try {
            const { id } = req.params;
    
            const user = await UserService.delete(id);
    
            if (!user) {
                return res.status(404).json({ error: 'user not found' });
            }
    
            res.json({ message: 'User deleted with success' });
        } catch (error) {
            res.status(500).json({ error: 'Error when deleting a user' });
        }
    }
};