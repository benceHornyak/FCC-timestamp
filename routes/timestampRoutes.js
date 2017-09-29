const express = require('express');
const router = express.Router();

const TimestampController = require('../controllers/timestampController');

router.get('/:timestamp', TimestampController.GetTimestamp);

module.exports = router;