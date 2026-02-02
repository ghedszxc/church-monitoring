const express = require("express");
const router = express.Router();
const DiscipleController = require("../controllers/disciple");

// Define routes for the disciple resource
router.get("/", DiscipleController.getDisciples);
// router.get("/:id", DiscipleController.getDisciple);
// router.post("/", DiscipleController.createDisciple);
// router.put('/:id', DiscipleController.updateDisciple);
// router.delete('/:id', DiscipleController.deleteDisciple);

module.exports = router;
