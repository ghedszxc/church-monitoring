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
    // try {
    //   const { givenName, middleName, surname, network, birthdate, status } =
    //     req.body;
    //   const newDiscipleId = await Disciple.createDisciple(
    //     givenName,
    //     middleName,
    //     surname,
    //     network,
    //     birthdate,
    //     status,
    //   );
    //   res.status(201).json({
    //     id: newDiscipleId,
    //     message: `${givenName} ${surname} is successfully added from disciple list`,
    //   });
    // } catch (error) {
    //   console.error("Error creating disciple:", error);
    //   res.status(500).json({ error: error?.message });
    // }
  }

  static async addMultipleDisciples(req, res) {
    const result = [];

    try {
      req.body.map((payload) => {
        const { givenName, middleName, surname, network, birthdate, status } =
          payload;

        const slashFormat = birthdate.split(
          birthdate.includes("/") ? "/" : "-",
        );

        const formattedBirthdate = `${slashFormat[2]}-${slashFormat[1]}-${slashFormat[0]}`;

        // note: to fix in future, have a global function to handle capitalization of names
        const lowercasedGivenName = givenName.toLowerCase();
        const capitalizedGivenName = lowercasedGivenName
          .split(" ")
          .map((word) => {
            return word.length > 0
              ? word.charAt(0).toUpperCase() + word.slice(1)
              : word;
          })
          .join(" ");

        const lowercasedMiddleName = middleName.toLowerCase();
        const capitalizedMiddleName = lowercasedMiddleName
          .split(" ")
          .map((word) => {
            return word.length > 0
              ? word.charAt(0).toUpperCase() + word.slice(1)
              : word;
          })
          .join(" ");

        const lowercasedSurname = surname.toLowerCase();
        const capitalizedSurname = lowercasedSurname
          .split(" ")
          .map((word) => {
            return word.length > 0
              ? word.charAt(0).toUpperCase() + word.slice(1)
              : word;
          })
          .join(" ");

        Disciple.createDisciple(
          capitalizedGivenName,
          capitalizedMiddleName,
          capitalizedSurname,
          network.toUpperCase(),
          formattedBirthdate,
          status.toUpperCase(),
        );

        result.push({
          givenName: capitalizedGivenName,
          middleName: capitalizedMiddleName,
          surname: capitalizedSurname,
          network: network.toUpperCase(),
          birthdate: formattedBirthdate,
          status: status.toUpperCase(),
        });
      });
    } catch (error) {
      console.error("Error creating disciple:", error);
      res.status(500).json({ error: error?.message });
    } finally {
      res.status(201).json({
        message: `Successfully added multiple people from disciple list`,
        result,
      });
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
