import express from "express";
const router = express.Router();
import { IMonster } from '@interfaces';

router.get('/', (req, res) => {
    const monsters: IMonster[] = [
        { name: 'Troll' },
        { name: 'Orc' },
    ];
    
    res.send(monsters);
});

export default router;