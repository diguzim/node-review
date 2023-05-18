import express from "express";
const router = express.Router();
import { Monster } from 'interfaces';

router.get('/', (req, res) => {
    const monsters: Monster[] = [
        { id: 1, name: 'Troll' },
        { id: 2, name: 'Orc' },
    ];
    
    res.send(monsters);
});

export default router;