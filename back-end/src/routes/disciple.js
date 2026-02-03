const express = require("express");
const router = express.Router();
const DiscipleController = require("../controllers/disciple");

// Define routes for the disciple resource
router.get("/", DiscipleController.getDisciples);
router.get("/:id", DiscipleController.getDisciple);
router.get("/birthday/celebrants", DiscipleController.getBirthdayCelebrants);

router.post("/", DiscipleController.createDisciple);
router.post("/add/multiple/disciples", DiscipleController.addMultipleDisciples);

// router.put('/:id', DiscipleController.updateDisciple);
// router.delete('/:id', DiscipleController.deleteDisciple);

module.exports = router;
