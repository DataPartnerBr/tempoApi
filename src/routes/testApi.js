const express = require('express');
const router = express.Router();

router.get('/', async(req, res, next)=> {
  try {
    res.json("Api Funcionando OK!");
  } catch (err) {
    next(err);
  }
})

module.exports = router;