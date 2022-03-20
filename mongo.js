const mongoose = require("mongoose");
const { float } = require("webidl-conversions");
const cryptoSchema = new mongoose.Schema({
    FROMSYMBOL: String,
    TOSYMBOL: String,
    PRICE: Number,

});

module.exports = mongoose.model("mongo", cryptoSchema);