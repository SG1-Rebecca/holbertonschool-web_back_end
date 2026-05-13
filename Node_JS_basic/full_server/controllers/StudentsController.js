const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const dbPath = process.argv[2] || './database.csv';
      const fields = await readDatabase(dbPath);

      const sortedFields = Object
        .keys(fields)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      let responseText = 'This is the list of our students\n';

      for (const field of sortedFields) {
        const count = fields[field].length;

        const list = fields[field].join(', ');
        responseText += `Number of students in ${field}: ${count}. List: ${list}\n`;
      }

      res.status(200).send(responseText);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE'); // Souvent 500 dans ces exercices précis
      return;
    }

    try {
      const dbPath = process.argv[2] || './database.csv';
      const fields = await readDatabase(dbPath);

      // On récupère la liste ou un tableau vide si la clé n'existe pas
      const students = fields[major] || [];
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
