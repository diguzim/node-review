import express from "express";
import monsters from "./monsters";

const app = express();

app.use('/monsters', monsters);

export default app;