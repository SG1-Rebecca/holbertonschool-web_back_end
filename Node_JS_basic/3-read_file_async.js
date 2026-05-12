const fs = require('node:fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split the data into lines and filter out empty lines
      const lines = data
        .split('\n')
        .filter((line) => line.trim() !== '');

      const students = lines.slice(1);

      console.log(`Number of students: ${students.length}`);

      const fields = {};

      // Browse each student and group them by field
      students.forEach((student) => {
        const studentData = student.split(',');
        const firstname = studentData[0];
        const field = studentData[3];

        if (!fields[field]) {
          fields[field] = [];
        }

        fields[field].push(firstname);
      });

      // Display the number of students in each field and their names
      Object.keys(fields).forEach((field) => {
        console.log(
          `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`,
        );
      });

      // Resolve the promise after processing the data
      resolve();
    });
  });
}

module.exports = countStudents;
