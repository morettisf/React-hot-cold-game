const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use([bodyParser.urlencoded({ extended: true }), bodyParser.json()]);
app.use(express.static('src'));

let fewestGuesses = 20;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/fewest-guesses', (req, res) => {
  res.json({ fewestGuesses })
});

app.post('/fewest-guesses', (req, res) => {
  console.log('getting post')
  let newCount = req.body.count;
  fewestGuesses = newCount;
  res.json({ fewestGuesses });
});

app.listen(process.env.PORT || 8080);