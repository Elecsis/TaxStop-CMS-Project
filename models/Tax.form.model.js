const { Schema, model } = require("mongoose");

const taxFormSchema = new Schema({
    taxYear:{type: Number, required: true},
    clientFirstName:{type: String, required: true},
    clientMiddleName:{type: String},
    clientLastName:{type: String, required: true},
    address: {
        addressLine:{type: String, required: true},
        aptNumLine:{type: String},
        city:{type: String, required: true},
        State:{type: String, required: true},
        zipCode:{type: Number, required: true},
    },

    clientEmail:{type: String, required: true},
    clientDateOfBirth:{type: String, required: true},
    clientOccupation:{type: String, required: true},
},{
    timestamps: true    
});

const TaxForm = model("TaxForm", taxFormSchema);

module.exports = TaxForm;