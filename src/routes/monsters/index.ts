import express from "express";
const router = express.Router();
import { Monster } from '@models';

router.get('/', async (req, res) => {
    const monsters = await Monster.find();
    
    res.send(monsters);
});

export default router;