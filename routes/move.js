var move = require( '../services/move');
var Computer = require('../models/computer')
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/computer', function(req, res, next) {
  
  res.status(200).json(move.getMove(new Computer, req.body));
});

module.exports = router;
