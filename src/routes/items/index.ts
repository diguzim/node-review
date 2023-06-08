import express from "express";
const router = express.Router();
import { ItemController } from "@controllers";
import { verifyAuthenticationToken } from "routes/middlewares";

router.get('/', async (req, res) => {
    ItemController.getAll(req, res);
});

router.get('/:id', async (req, res) => {
    ItemController.get(req, res);
});

router.post('/', verifyAuthenticationToken, async (req, res) => {
    ItemController.create(req, res);
});

router.put('/:id', async (req, res) => {
    ItemController.update(req, res);
});

router.delete('/:id', async (req, res) => {
    ItemController.delete(req, res);
});

export default router;