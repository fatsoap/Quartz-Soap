const express = require('express');
const router = express.Router();
const controller = require('./controller');
const helper = require('./helper');


// Get all ideas from ideaBox
router.get('/', controller.getAll);

// Get random amount of ideas in ideaBox
router.get('/:amount', controller.getIdea);

// Edit idea in ideaBox
router.post('/', helper.reqBodyChecker,  controller.postIdea);

// Generate random amount of words in wordBox
router.get('/generate/:amount', controller.getWord);

module.exports = router;