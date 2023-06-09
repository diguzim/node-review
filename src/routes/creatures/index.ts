import express from "express";
const router = express.Router();
import { CreatureController } from "@controllers";
import { verifyAuthenticationToken } from "routes/middlewares";

router.get('/', async (req, res) => {
    CreatureController.getAll(req, res);
});

router.get('/:id', async (req, res) => {
    CreatureController.get(req, res);
});

router.post('/', verifyAuthenticationToken, async (req, res) => {
    CreatureController.create(req, res);
});

router.put('/:id', verifyAuthenticationToken, async (req, res) => {
    CreatureController.update(req, res);
});

router.delete('/:id', verifyAuthenticationToken, async (req, res) => {
    CreatureController.delete(req, res);
});

export default router;