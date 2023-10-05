const router = require('express').Router();

router.use('/download', require('./api/download'));

router.use('/info', require('./api/info'));

module.exports = router;