import express from "express";
import creatures from "./creatures";
import users from "./users";

const app = express();

app.use('/creatures', creatures);
app.use('/users', users);

export default app;