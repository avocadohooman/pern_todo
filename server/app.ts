import express from 'express';
import todoRouter from './controllers/todoRouter';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('build'));
app.use('/todo', todoRouter);

app.get('/health', async (req, res) => {
    res.send('ok');
})

export default app;