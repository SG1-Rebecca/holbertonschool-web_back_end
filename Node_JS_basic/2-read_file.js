const fs = require('node:fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');

    const students = data
      .trim()
      .split('\n')
      .slice(1);
    const fieldMap = {};

    // Process each student record and group by field of study
    students.forEach((row) => {
      const columns = row.split(',');
      const firstname = columns[0];
      const field = columns[3];

      // Initialize the field in the map if it doesn't exist
      if (!fieldMap[field]) {
        fieldMap[field] = [];
      }
      fieldMap[field].push(firstname);
    });

    const totalStudents = students.length;
    console.log(`Number of students: ${totalStudents}`);

    Object.keys(fieldMap).forEach((field) => {
      const list = fieldMap[field].join(', ');
      console.log(`Number of students in ${field}: ${fieldMap[field].length}. List: ${list}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
