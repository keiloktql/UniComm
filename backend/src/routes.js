const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.status(200).send('Welcome to UniComm Backend!');
});

module.exports = router;