// controllers/discipleController.js
const Disciple = require("../models/disciple");

class DiscipleController {
  static async getDisciples(req, res) {
    try {
      const disciples = await Disciple.getAllDisciples();
      res.json(disciples);
    } catch (error) {
      console.error("Error fetching disciples:", error);
      res.status(500).json({ error: error?.message });
    }
  }

  static async getDisciple(req, res) {
    try {
      const { id } = req.params;
      const disciple = await Disciple.getDiscipleById(id);
      disciple
        ? res.json(disciple)
        : res.status(404).json({ message: "Disciple not found" });
    } catch (error) {
      console.error("Error fetching disciple:", error);
      res.status(500).json({ error: error?.message });
    }
  }

  static async createDisciple(req, res) {
    try {
      const { givenName, middleName, surname, network, birthdate, status } =
        req.body;

      const newDiscipleId = await Disciple.createDisciple(
        givenName,
        middleName,
        surname,
        network,
        birthdate,
        status,
      );

      res.status(201).json({
        id: newDiscipleId,
        message: `${givenName} ${surname} is successfully added from disciple list`,
      });
    } catch (error) {
      console.error("Error creating disciple:", error);
      res.status(500).json({ error: error?.message });
    }
  }

  static async getBirthdayCelebrants(req, res) {
    try {
      const celebrants = await Disciple.getBirthdayCelebrants();
      res.json(celebrants);
    } catch (error) {
      console.error("Error fetching birthday celebrants:", error);
      res.status(500).json({ error: error?.message });
    }
  }
}

module.exports = DiscipleController;
