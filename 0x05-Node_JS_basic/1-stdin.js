#!/usr/bin/node
const getName = () => {
  return new Promise((resolve, reject) => {
    process.stdout.write('Welcome to Holberton School, what is your name?\n');
    process.stdin.on('readable', () => {
      const name = process.stdin.read();
      if (name) {
        resolve(name);
      } else {
        reject(new Error('faoled to read name'));
      }
    });
  });
};

getName()
  .then((name) => {
    process.stdout.write(`Your name is: ${name}`);
  })
  .catch(() => {})
  .finally(() => {
    process.stdout.write('This important software is now closing\n');
  });
