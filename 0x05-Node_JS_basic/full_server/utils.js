import fs from 'fs';

const readDatabase = (path) => {
  const promise = (res, rej) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        rej(new Error('Cannot load the database'));
      }
      const obj = {};
      if (data) {
        let lines = data.toString().split('\n');
        lines = lines.slice(1, lines.length);
        for (const line of lines) {
          if (line) {
            const params = line.split(',');
            const firstName = params[0];
            const subject = params[3];
            if (!obj[subject]) {
              obj[subject] = [];
            }
            obj[subject].push(firstName);
          }
        }
      }
      res(obj);
    });
  };
  return new Promise(promise);
};

module.exports = readDatabase;
