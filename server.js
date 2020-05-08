const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const apiRoutes = require(https://www.jsonstore.io/1a77c7266d87ef3a04ba31a22e88fd303d62fac9c46c5a22791f7684a5f6644c');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname + '/client/dist'));
app.use(bodyParser.json({
  strict: false,
}));
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/dist/index.html');
});

app.get('/about', (req, res) => {
  res.send('under construction');
});

app.use(apiRoutes);

app.use((err, req, res) => {
  res.send({
    ok: false,
    error: 'Unexpected server error',
  });
})

app.listen(port);
console.log(`Serving at http://localhost:${port}`);
