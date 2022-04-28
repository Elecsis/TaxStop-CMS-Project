const router = require("express").Router();
const mongoose = require("mongoose");
const isLoggedIn = require('../middleware/isLoggedIn')

const TaxForm = require('../models/Tax.form.model');

///GETS tax-formview page
router.get("/tax-form", isLoggedIn,(req,res, next)=>{
    res.render("user-tax-form");
  })

  router.post("/tax-form", isLoggedIn, (req, res) => {

    
  })



module.exports = router;