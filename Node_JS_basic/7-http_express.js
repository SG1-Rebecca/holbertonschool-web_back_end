const express = require('express');
const fs = require('node:fs');

const app = express();

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

      let output = `Number of students: ${students.length}\n`;

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

      // Build the output string for each field
      Object.keys(fields).forEach((field) => {
        output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      });

      // Resolve the promise with the output string
      resolve(output);
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const databasePath = process.argv[2];
  if (!databasePath) {
    res.send('This is the list of our students');
    return;
  }

  try {
    const data = await countStudents(databasePath);
    res.send(`This is the list of our students\n${data}`);
  } catch (error) {
    res.send('This is the list of our students');
  }
});

app.listen(1245);

module.exports = app;
