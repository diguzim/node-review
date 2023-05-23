import { MonsterService } from '@services';
import { Request, Response } from 'express';

export const MonsterController = {
    getAll: async (req: Request, res: Response) => {
        try {
            const monsters = await MonsterService.getAll();
    
            res.json(monsters);
        } catch (error) {
            res.status(500).json({ error: 'Error when fething monsters' });
        }
    },
    get: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const monster = await MonsterService.get(id);
    
            if (!monster) {
                return res.status(404).json({ error: 'Monster not found' });
            }
    
            res.json(monster);
        } catch (error) {
            res.status(500).json({ error: 'Error when fething monster' });
        }
    },
    create: async (req: Request, res: Response) => {
        try {
            const { name } = req.body;
    
            const monster = await MonsterService.create({ name });
            res.json(monster);
        } catch (error) {
            res.status(500).json({ error: 'Error when creating a monster' });
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { name } = req.body;
    
            const monster = await MonsterService.update(id, { name });
    
            if (!monster) {
                return res.status(404).json({ error: 'Monster not found' });
            }
    
            res.json(monster);
        } catch (error) {
            res.status(500).json({ error: 'Error when updating a monster' });
        }
    },
    delete: async(req: Request, res: Response) => {
        try {
            const { id } = req.params;
    
            const monster = await MonsterService.delete(id);
    
            if (!monster) {
                return res.status(404).json({ error: 'Monster not found' });
            }
    
            res.json({ message: 'Monster deleted with success' });
        } catch (error) {
            res.status(500).json({ error: 'Error when deleting a monster' });
        }
    }
};