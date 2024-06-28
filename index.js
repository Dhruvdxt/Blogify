const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const v1Routes = require('./routes/v1/index');

const PORT = process.env.PORT || 3000;

const app = express();
db();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



app.get('/', (req, res) => {
    console.log('Hello Dhruv');
    res.send('Hello Dhruv');  
});

app.use('/api/v1', v1Routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
