const router = require("express").Router();
const isLoggedIn = require('../middleware/isLoggedIn')
const TaxForm = require('../models/Tax.form.model');
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});
// GET about us page
router.get("/aboutUs", (req, res, next) => {
  res.render("about-us");
});
//GET service page
router.get("/services", (req, res, next) => {
  res.render("services");
});
//GET client portal page
router.get("/clientPortal", (req, res, next) => {
  res.render("client-portal");
});
//GET location page
router.get("/contactUs", (req, res, next) => {
  res.render("contact-us");
});
//GET location page
router.get("/location", (req, res, next) => {
  res.render("location");
});

// verifies that user is \/ \/ \/ \/ logged in to have access to myProfile view
router.get("/myProfile", isLoggedIn,(req,res, next)=>{
  TaxForm.find()
  .then(taxFormArray =>{
    res.render("user-profile", {taxFormArray});

  })
  
  
  
  

})
module.exports = router;
