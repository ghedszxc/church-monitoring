const pool = require("../database");

class Disciple {
  static async getAllDisciples() {
    const [rows] = await pool.execute("SELECT * FROM disciples");
    return rows;
  }

  // static async getDiscipleById(id) {
  //   const [rows] = await pool.execute("SELECT * FROM disciples WHERE id = ?", [
  //     id,
  //   ]);
  //   return rows[0]; // Return the first row if found
  // }

  // static async createDisciple(
  //   givenName,
  //   middleName,
  //   surname,
  //   network,
  //   birthdate,
  //   status,
  // ) {
  //   const [result] = await pool.execute(
  //     "INSERT INTO disciples (givenName, middleName, surname, network, birthdate, status) VALUES (?, ?, ?, ?, ?, ?)",
  //     [givenName, middleName, surname, network, birthdate, status],
  //   );
  //   return result.insertId;
  // }

  // Add more methods for update, delete, etc.
}

module.exports = Disciple;
