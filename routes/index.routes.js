const router = require("express").Router();
const isLoggedIn = require('../middleware/isLoggedIn')
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// verifies that user is logged in to have access to myProfile view
router.get("/myProfile", isLoggedIn,(req,res, next)=>{
  res.render("user-profile");
})
module.exports = router;
