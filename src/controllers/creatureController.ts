import { UserDoc } from '@models';
import { CreatureService } from '@services';
import { Request, Response } from 'express';

export const CreatureController = {
    getAll: async (req: Request, res: Response) => {
        try {
            const creatures = await CreatureService.getAll();

            return res.status(200).json(creatures);
        } catch (error) {
            return res.status(500).json({ error: 'Error when fething creatures' });
        }
    },
    get: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const creature = await CreatureService.get(id);

            if (!creature) {
                return res.status(404).json({ error: 'Creature not found' });
            }

            return res.status(200).json(creature);
        } catch (error) {
            return res.status(500).json({ error: 'Error when fething creature' });
        }
    },
    create: async (req: Request, res: Response) => {
        try {
            const user = req.user;
            const { name } = req.body;

            const creature = await CreatureService.create({ name }, user as UserDoc);
            return res.status(201).json(creature);
        } catch (error) {
            return res.status(500).json({ error: 'Error when creating a creature' });
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

            return res.status(200).json(creature);
        } catch (error) {
            return res.status(500).json({ error: 'Error when updating a creature' });
        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const creature = await CreatureService.delete(id);

            if (!creature) {
                return res.status(404).json({ error: 'Creature not found' });
            }

            res.status(204);
        } catch (error) {
            return res.status(500).json({ error: 'Error when deleting a creature' });
        }
    }
};