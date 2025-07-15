require('dotenv').config();
const express = require('express');
const cors = require('cors');
const logger = require('./middlewares/logger');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(logger); 

app.use('/', require('./routes/shorturl'));

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
