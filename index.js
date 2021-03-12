const app = require('./app');
const serverless = require('serverless-http');
const port = 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports.handler = serverless(app);
