const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const ideaBoxRouter = require('./ideaBox/router');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/ideaBox', ideaBoxRouter);
//app.use('/todo', todoRouter);
//app.use('/sha256', SHA256);
//app.use('/todo', todoRouter);

app.get('*', (req, res) => {
    //res.sendFile()
    res.status(404).send('404 not found');
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server Running on ${PORT}`));