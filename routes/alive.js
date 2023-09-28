const express = require('express');
const router = express.Router();

router.get('/alive', (req, res) => {
    res.send({ status: 'Server is alive!' });
});

module.exports = router;
