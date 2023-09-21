//  this is a https web-server
const https = require('https');
const express = require('express');
const port = 8080

app = express();

const fs = require('fs');
const httpsOptions = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('csr.pem')
}
const server = https.createServer(httpsOptions,app);

app.get('/', (req, res) => {
  res.send('Hello World!');
}  );

server.listen(port, () => {
    console.log('HTTPS is running on port ' + port + '')
});
