const express = require("express");
const CarrosController = require("../controllers/carrosControler");

const router = express.Router();

router.get("/", CarrosController.getAll);

router.post("/",CarrosController.addCar);

router.put("/",CarrosController.updateCar);

module.exports = router;