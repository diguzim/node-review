import express from "express";
const router = express.Router();
import { UserController } from "@controllers";

router.get('/', async (req, res) => {
    UserController.getAll(req, res);
});

router.get('/:id', async (req, res) => {
    UserController.get(req, res);
});

router.post('/', async (req, res) => {
    UserController.create(req, res);
});

router.put('/:id', async (req, res) => {
    UserController.update(req, res);
});

router.delete('/:id', async (req, res) => {
    UserController.delete(req, res);
});

router.post('/login', async (req, res) => {
    UserController.login(req, res);
});

export default router;