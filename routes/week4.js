const https = require('https');
const fs = require('fs');
const express = require('express');
const startUp = require('./startup');
const useragent = require('express-useragent');

const port = 8083;
const httpsOptions = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
};

app = express();

const server = https.createServer(httpsOptions, app);

app.use(express.json());
app.use('/', startUp);

app.get('/get-device', (req, res) => {
    const userAgent = req.header('User-Agent');
    const isWindows = /Windows/i.test(userAgent);
    const isMac = /Macintosh|Mac OS X/i.test(userAgent);
    const isLinux = /Linux/i.test(userAgent);

    res.send({
        isWindows: isWindows,
        isMac: isMac,
        isLinux: isLinux,
        postmanRunTime: userAgent.includes('PostmanRuntime')
    });
});

app.post('/getuser', (req, res) => {
    res.send(req.body);
});

server.listen(port, () => {
    console.log('HTTPS is running on port ' + port);
});
