const express = require("express");
const router = express.Router();
const v1ApiRoutes = require("./v1/index");

router.use('/v1', v1ApiRoutes);  // Ensure this has a leading slash

module.exports = router;