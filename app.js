const app = require('./node_modules/express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody!");
});

app.get('/resource', (req, res) => {
  res.send("Resource from Appsody! Message Edit - Webhook");
});
 
module.exports.app = app;