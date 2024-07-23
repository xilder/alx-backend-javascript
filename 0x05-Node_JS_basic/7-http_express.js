const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

const countStudents = (path) => {
  const promise = (res, rej) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        rej(Error('Cannot load the database'));
      }
      let result = '';
      if (data) {
        let lines = data.toString().split('\n');
        lines = lines.splice(1, lines.length);
        result += `Number of students: ${lines.length}`;
        const objData = {};
        for (const line of lines) {
          if (line) {
            const [firstName, , , subject] = line.split(',');
            if (!objData[subject]) {
              objData[subject] = [];
            }
            objData[subject].push(firstName);
          }
        }
        for (const subject in objData) {
          if (subject) {
            result += `\nNumber of students in ${subject}: ${objData[
              subject
            ].join(', ')}`;
          }
        }
        res(result);
      }
    });
  };
  return new Promise(promise);
};

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const title = 'This is the list of out students';
  try {
    const students = await countStudents(process.argv[2]);
    res.send(`${title}\n${students}`);
  } catch (error) {
    res.send(`${title}\n${error.message}`);
  }
});

app.listen(port);
module.exports = app;
