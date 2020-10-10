import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.listen(PORT, () => console.log(`express ping tester listening on port: ${ PORT }`));
