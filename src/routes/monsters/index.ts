import express from "express";
const router = express.Router();
import { MonsterController } from "@controllers";
import { verifyAuthenticationToken } from "routes/middlewares";

router.get('/', async (req, res) => {
    MonsterController.getAll(req, res);
});

router.get('/:id', async (req, res) => {
    MonsterController.get(req, res);
});

router.post('/', verifyAuthenticationToken, async (req, res) => {
    MonsterController.create(req, res);
});

router.put('/:id', async (req, res) => {
    MonsterController.update(req, res);
});

router.delete('/:id', async (req, res) => {
    MonsterController.delete(req, res);
});

export default router;