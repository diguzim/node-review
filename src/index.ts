import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import routes from "./routes";
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(process.env.MONGO_HOST as string, {
    autoIndex: true,
    dbName: process.env.MONGO_DATABASE as string
}).then(
    () => console.log('Connected to database')
).catch(
    () => {
        console.log('Couldn\'t connect to database');
        process.exit(1); 
    }
);
    

if (!process.env.PORT) {
    console.log('Missing port environment variable');
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string);

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});