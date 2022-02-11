const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3349;


// Routes
const indexRouter = require('./src/routes/index');
const testApiRouter = require('./src/routes/testApi');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(express.json());
app.use('/', indexRouter);
app.use('/test-api', testApiRouter);

app.listen(port, () => console.log(`Server is running on port: ${port}`));