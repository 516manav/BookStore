const express = require("express");
const { DonateBook } = require("./functions/mutation");
const router = express.Router();


router.post("/donate",DonateBook)

module.exports=router