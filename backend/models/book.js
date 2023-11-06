const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    by: {
        type: String
    },
    image: {
        type: String
    },
    title: {
        type: String
    },
    author: {
        type: String
    },
    gener: {
        type: String
    }
    , description: {
        type: String
    },
    address: {
        type: String
    }
    , contact: {
        type: String
    }
    ,
    lat: {
        type: String
    },
    lng: {
        type: String
    }
    , price: {
        type: String
    },
    buyerId: {
        type: String,
        require: true

    },
    status: {
        type: String,
        default: "none"
    }
})
module.exports = mongoose.model('Books', BookSchema);



