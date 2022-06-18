var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  req.body.forEach((e, i) => {
    if(!e){
      res.send(JSON.stringify(i));
    }
  });
});

module.exports = router;
