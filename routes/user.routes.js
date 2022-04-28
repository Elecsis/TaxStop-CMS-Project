const router = require("express").Router();
const mongoose = require("mongoose");
const isLoggedIn = require('../middleware/isLoggedIn')

const TaxForm = require('../models/Tax.form.model');

router.get("/taxForm", isLoggedIn,(req,res, next)=>{
    res.render("user-taxform");
  })

//TaxForm.create(Form,(error,))


module.exports = router;