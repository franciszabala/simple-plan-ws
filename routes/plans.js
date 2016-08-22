var express = require('express');
var router = express.Router();
var planService = require('../services/planservice');

router.get('/', function(req, res, next) {
  res.render('plan', { title: 'Plan API' });
});

router.get('/all', function(req, res, next) {
  res.status(200).json(planService.getAllPlans());
});

router.get('/:planid', function(req, res, next) {
  var planid = req.params.planid;
  if (planService.getPlan(planid)) {
    res.status(200).json(planService.getPlan(planid));
  } else {
    res.status(200).json([]);
  }
});


module.exports = router;
