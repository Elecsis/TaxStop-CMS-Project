const router = require("express").Router();
const { create } = require("connect-mongo");
const mongoose = require("mongoose");
const isLoggedIn = require('../middleware/isLoggedIn')

const TaxForm = require('../models/Tax.form.model');

///GETS tax-formview page
router.get("/tax-form", isLoggedIn,(req,res, next)=>{
    res.render("user-tax-form");
  });

router.post("/tax-form", isLoggedIn, (req,res,next) => {
      const submitTaxForm = {
          taxYear:  req.body.taxYear,
          clientFirstName:  req.body.clientFirstName,
          clientMiddleName:  req.body.clientMiddleName,
          clientLastName:  req.body.clientFirstName,
          address: {
              addressLine:  req.body['client.address.addressLine'],
              aptNumLine:  req.body['client.address.aptNumLine'],
              city:  req.body['client.address.city'],
              State:  req.body['client.address.state'],
              zipCode:  req.body['client.address.zipCode'],
          },
      
          clientEmail:  req.body.clientEmail,
          clientDateOfBirth:  req.body.clientDateOfBirth,
          clientOccupation:  req.body.clientOccupation,
        };

        TaxForm.create(submitTaxForm)
          .then(newTaxDataForm =>{
            console.log('Form submitted sccuessfully', newTaxDataForm);
            res.redirect('/myProfile');
          })
          .catch((error) =>{
            if (error instanceof mongoose.Error.ValidationError) {
              return res
                .status(400)
                .render("user-taxform", { errorMessage: error.message });
            }
              return res
                .status(500)
                .render("user-taxform", { errorMessage: error.message });
          });

 });


 



module.exports = router;