const { Schema, model } = require("mongoose");

const taxFormSchema = new Schema({
    taxYear:{type: Number, required: true},
    clientFirstName:{type: String, required: true},
    clientMiddleName:{type: String},
    clientLastName:{type: String, required: true},
    address: {
        addressLine:{type: String, required: true},
        aptNumLine:{type: String, required: true},
        city:{type: String, required: true},
        State:{type: String, required: true},
        zipCode:{type: Number, required: true},
    },

    clientEmail:{type: String, required: true},
    clientDateOfBirth:{type: Date, required: true},
    clientOccupation:{type: String, required: true},


    spouseFirstName:{type: String},
    spouseMiddleName:{type: String},
    spouseLastName:{type: String},
    spouseEmail:{type: String},
    spouseDateOfBirth:{type: Date},
    spouseOccupation:{type:String},

    
},{
    timestamps: true    
});

const TaxForm = model("TaxForm", taxFormSchema);

module.exports = TaxForm;