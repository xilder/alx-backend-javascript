const fs = require('fs');

const countStudents = (path) => {
  try {
    let lines = fs.readFileSync(path, 'utf8').toString().split('\n');
    lines = lines.slice(1, lines.length);
    const objData = {};
    console.log(`Number of students: ${lines.length}`);

    for (const line of lines) {
      const lineArr = line.split(',');
      const subject = lineArr[3];
      const firstName = line_arr[0]
      if (firstName && subject && !objData[subject]) {
        objData[subject] = [];
      }
      objData[subject].push(firstName);
    }
    for (const key in objData) {
      if (key) {
        console.log(
          `Number of students in ${key}: ${
            objData[key].length
          }. List: ${objData[key].join(', ')}`,
        );
      }
    }
  } catch (err) {
    throw Error('Cannot load the database');
  }
};

module.exports = countStudents;
