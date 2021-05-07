import express from 'express';
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const PORT = 3000;


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})