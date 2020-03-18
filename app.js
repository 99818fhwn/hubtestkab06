const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody!");
});
 
app.get('/resource', (req, res) => {
  res.send("Hello from Resource finally");
});
 


module.exports.app = app;
