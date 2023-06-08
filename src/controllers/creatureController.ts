import { UserDoc } from '@models';
import { CreatureService } from '@services';
import { Request, Response } from 'express';

export const CreatureController = {
    getAll: async (req: Request, res: Response) => {
        try {
            const creatures = await CreatureService.getAll();

            res.json(creatures);
        } catch (error) {
            res.status(500).json({ error: 'Error when fething creatures' });
        }
    },
    get: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const creature = await CreatureService.get(id);

            if (!creature) {
                return res.status(404).json({ error: 'Creature not found' });
            }

            res.json(creature);
        } catch (error) {
            res.status(500).json({ error: 'Error when fething creature' });
        }
    },
    create: async (req: Request, res: Response) => {
        try {
            const user = req.user;
            const { name } = req.body;

            const creature = await CreatureService.create({ name }, user as UserDoc);
            res.json(creature);
        } catch (error) {
            res.status(500).json({ error: 'Error when creating a creature' });
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { name } = req.body;

            const creature = await CreatureService.update(id, { name });

            if (!creature) {
                return res.status(404).json({ error: 'Creature not found' });
            }

            res.json(creature);
        } catch (error) {
            res.status(500).json({ error: 'Error when updating a creature' });
        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const creature = await CreatureService.delete(id);

            if (!creature) {
                return res.status(404).json({ error: 'Creature not found' });
            }

            res.json({ message: 'Creature deleted with success' });
        } catch (error) {
            res.status(500).json({ error: 'Error when deleting a creature' });
        }
    }
};