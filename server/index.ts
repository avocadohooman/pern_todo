import express from 'express';
import Pool from './db';
import todoRouter from './controllers/todoRouter';
import cors from 'cors';

const app = express();
const pool = Pool;

app.use(cors());
app.use(express.json());
app.use('/todo', todoRouter);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});