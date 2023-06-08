import express from "express";
const router = express.Router();
import { DropController } from "@controllers";
import { verifyAuthenticationToken } from "routes/middlewares";

router.get('/', async (req, res) => {
    DropController.getAll(req, res);
});

router.get('/:id', async (req, res) => {
    DropController.get(req, res);
});

router.post('/', verifyAuthenticationToken, async (req, res) => {
    DropController.create(req, res);
});

router.put('/:id', verifyAuthenticationToken, async (req, res) => {
    DropController.update(req, res);
});

router.delete('/:id', verifyAuthenticationToken, async (req, res) => {
    DropController.delete(req, res);
});

export default router;