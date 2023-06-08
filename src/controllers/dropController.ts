import { DropService } from '@services';
import { Request, Response } from 'express';

export const DropController = {
    getAll: async (req: Request, res: Response) => {
        try {
            const drops = await DropService.getAll();

            res.json(drops);
        } catch (error) {
            res.status(500).json({ error: 'Error when fething drops' });
        }
    },
    get: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const drop = await DropService.get(id);

            if (!drop) {
                return res.status(404).json({ error: 'Drop not found' });
            }

            res.json(drop);
        } catch (error) {
            res.status(500).json({ error: 'Error when fething drop' });
        }
    },
    create: async (req: Request, res: Response) => {
        try {
            const { creatureId, itemId } = req.body;

            const drop = await DropService.create({ creatureId, itemId });
            res.json(drop);
        } catch (error) {
            res.status(500).json({ error: 'Error when creating a drop' });
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { creatureId, itemId } = req.body;

            const drop = await DropService.update(id, { creatureId, itemId });

            if (!drop) {
                return res.status(404).json({ error: 'Drop not found' });
            }

            res.json(drop);
        } catch (error) {
            res.status(500).json({ error: 'Error when updating a drop' });
        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const drop = await DropService.delete(id);

            if (!drop) {
                return res.status(404).json({ error: 'Drop not found' });
            }

            res.json({ message: 'Drop deleted with success' });
        } catch (error) {
            res.status(500).json({ error: 'Error when deleting a drop' });
        }
    }
};