import express from "express";
import monsters from "./monsters";
import users from "./users";

const app = express();

app.use('/monsters', monsters);
app.use('/users', users);

export default app;