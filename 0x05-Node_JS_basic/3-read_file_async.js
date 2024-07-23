const fs = require('fs');

const countStudents = (path) => {
  const promise = (res, rej) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        rej(Error('Cannot load the database'));
      }
      if (data) {
        let lines = data.toString().split('\n');
        lines = lines.slice(1, lines.length);
        const objData = {};
        console.log(`Number of students: ${lines.length}`);

        for (const line of lines) {
          const lineArr = line.split(',');
          const subject = lineArr[3];
          if (!objData[subject]) {
            objData[subject] = [];
          }
          objData[subject].push(lineArr[0]);
        }
        for (const key in objData) {
          console.log(
            `Number of students in ${key}: ${
              objData[key].length
            }. List: ${objData[key].join(', ')}`
          );
        }
      }
      res();
    });
  };
  return new Promise(promise);
};

module.exports = countStudents;
