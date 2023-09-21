const express = require("express");
const https = require("https");
const fs = require("fs");

const app = express();

const httpsOptions = {
    key: fs.readFileSync("key.pem"),         // Path to your private key file
    cert: fs.readFileSync("cert.pem"), // Path to your SSL/TLS certificate file
  };
  

app.get("/", (req, res) => {
  res.send("Hello, HTTPS World!"); 
});

const port = 443; 

const server = https.createServer(httpsOptions, app);

server.listen(port, () => {
  console.log(`HTTPS is running on port ${port}`);
});
