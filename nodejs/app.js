const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody!");
});

app.get('/resource', (req, res) => {
  res.send("Resource from Appsody! Message Edit");
});
 
module.exports.app = app;