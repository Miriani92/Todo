const express = require("express");
const { getTodo } = require("../controllers/todoCTR");
const router = express.Router();

router.route("/").get(getTodo);

module.exports = router;
