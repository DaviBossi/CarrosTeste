const express = require("express");
const CarrosController = require("../controllers/carrosControler");

const router = express.Router();

router.get("/", CarrosController.getAll);

module.exports = router;