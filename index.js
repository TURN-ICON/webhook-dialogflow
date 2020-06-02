const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = process.env.PORT || 4000;


app.use(morgan('dev'))
app.use(bodyParser.json())

app.use('/webhook', require('./routes/webhook.js'));

app.get('/', (req, res) => {
  res.send("<h1>Welcome to webhook-dialogflow</h1>");
});



app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});