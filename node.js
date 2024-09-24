import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express()
app.use(cors());
dotenv.config();
const key = process.env.SECRET_KEY;
console.log(key)

const port = 5555;

app.get('/key', (req, res) => {
    res.send(key)
});

app.listen(5555, () => {
    console.log(`Listening on port ${port}`)
})