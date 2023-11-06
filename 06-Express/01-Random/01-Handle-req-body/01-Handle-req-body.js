import express from 'express';
const port = 3000;

const app = express();

app.use(express.json());

app.post('/submit-data', (req, res) => {
    const data = req.body;

    res.json({ message: 'Data recieved', data: data });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
});

