const express = require("express");
const router = express.Router();
const CityController = require('../../controllers/city-controller');

router.post('/city', CityController.create);
// router.get('/test', (req, res) => {
//     res.status(200).send({ message: "Test route is working!" });
// });


module.exports = router;
