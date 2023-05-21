import express from "express";
const router = express.Router();
import { MonsterService } from "services";

router.get('/', async (req, res) => {
    try {
        const monsters = await MonsterService.getAll();

        res.json(monsters);
    } catch (error) {
        res.status(500).json({ error: 'Error when fething monsters' });
    }
});

router.get('/:id', async (req, res) => {
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
});

router.post('/', async (req, res) => {
    try {
        const { name } = req.body;

        const monster = await MonsterService.create({ name });
        res.json(monster);
    } catch (error) {
        res.status(500).json({ error: 'Error when creating a monster' });
    }
});

router.put('/:id', async (req, res) => {
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
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const monster = await MonsterService.delete(id);

        if (!monster) {
            return res.status(404).json({ error: 'Monster not found' });
        }

        res.json({ message: 'Monstro deleted with success' });
    } catch (error) {
        res.status(500).json({ error: 'Error when deleting a monster' });
    }
});

export default router;