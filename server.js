const express = require('express')
const app = express()
const port = 3000

const sets = [
  set1 = {
    name: 'A cool Set Name',
    cards: [
      {
        question: 'What color is the sky?',
        answer: 'Blue'
      }
    ]
  }
]
console.log(sets[0]);
// app.use(express.static('public'))

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render('index', sets);
})

app.get('/newSet', (req, res) => {
  res.render('newSet', sets);
})

app.post('/newSet', (req, res) => {
  console.log('posted');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})