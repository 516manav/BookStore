const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({
    bookId: {
        type: String,
        require:true
    },
    buyerId: {
        type: String,
        require:true
    },
    sellerId: {
        type: String,
        require:true

    },
    status:{
        type:String,
        default:"wait"
    }
})
module.exports = mongoose.model('Requests', RequestSchema);