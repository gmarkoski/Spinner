// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r|  ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r\\  ');    // Need to escape the backslash since it's a special character.
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1500);


const spinner = ['\r| \r/ \r- \r| \r/ \r- \r\\ \r| \n'];
let delay = 100;

for (let char of spinner) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay),
  delay += 1000;
};


