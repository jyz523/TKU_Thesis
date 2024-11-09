const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'Front')));


app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front', 'index.html'));
});


app.get('/', (req, res) => {
  res.redirect('/index');
});

app.get('/Dorm', (req, res) => {
    res.sendFile(path.join(__dirname, 'Front', 'dormitory.html'));
  });
  
app.get('/Front/Dorm/dorm123.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'Front', 'dorm123.html'));
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
