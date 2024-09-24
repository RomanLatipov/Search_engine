import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express()
app.use(cors());
app.use(express.json());

dotenv.config();
const key = process.env.SECRET_KEY;

app.get('/key', (req, res) => {
    res.send({"key": key});
});

app.listen(5555, () => {
    console.log(`Listening on port ${5555}`)
})