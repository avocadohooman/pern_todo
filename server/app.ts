import express from 'express';
import todoRouter from './controllers/todoRouter';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

const app = express();

app.use(cors());
app.use(express.json({ limit: '10kb' }));
app.use(express.static('build'));

const limit = rateLimit({
    max: 10,// max requests
    windowMs: 60 * 60 * 1000, // 1 Hour
    message: 'Too many requests' // message to send
});
app.use('/todo', limit);
app.use('/todo', todoRouter);

app.get('/health', async (req, res) => {
    res.send('ok');
})

export default app;