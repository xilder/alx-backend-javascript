const http = require('http');
const fs = require('fs');
const { argv } = require('process');

const DATABASE = argv[2];

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

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;
  const { url } = req;
  if (url === '/') {
    res.end('Hello Holberton School!');
  }
  if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const result = await countStudents(DATABASE);
      res.end(`${result}`);
    } catch (err) {
      res.end(err.message);
    }
  }
  res.statusCode = 404;
  res.end();
});

app.listen(1245);

module.exports = app;
