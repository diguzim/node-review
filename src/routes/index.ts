import express from "express";
import creatures from "./creatures";
import users from "./users";
import items from "./items";
import drops from "./drops";

const app = express();

app.use('/creatures', creatures);
app.use('/users', users);
app.use('/items', items);
app.use('/drops', drops);

export default app;