const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsod----y!");
});


app.get('/test', (req, res) => {
  res.send("Hello from Appsody + test!");
});

module.exports.app = app;
