import { UserDoc } from '@models';
import { ItemService } from '@services';
import { Request, Response } from 'express';

export const ItemController = {
    getAll: async (req: Request, res: Response) => {
        try {
            const items = await ItemService.getAll();

            res.status(200).json(items);
        } catch (error) {
            res.status(500).json({ error: 'Error when fething items' });
        }
    },
    get: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const item = await ItemService.get(id);

            if (!item) {
                return res.status(404).json({ error: 'Item not found' });
            }

            res.status(200).json(item);
        } catch (error) {
            res.status(500).json({ error: 'Error when fething an item' });
        }
    },
    create: async (req: Request, res: Response) => {
        try {
            const user = req.user;
            const { name } = req.body;

            console.log(`name: ${name}`);
            console.log(`user: ${user}`);

            const item = await ItemService.create({ name }, user as UserDoc);
            res.status(201).json(item);
        } catch (error) {
            res.status(500).json({ error: 'Error when creating an item' });
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { name } = req.body;

            const item = await ItemService.update(id, { name });

            if (!item) {
                return res.status(404).json({ error: 'Item not found' });
            }

            res.status(200).json(item);
        } catch (error) {
            res.status(500).json({ error: 'Error when updating an item' });
        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const item = await ItemService.delete(id);

            if (!item) {
                return res.status(404).json({ error: 'Item not found' });
            }

            res.status(204).json({ message: 'Item deleted with success' });
        } catch (error) {
            res.status(500).json({ error: 'Error when deleting an item' });
        }
    }
};