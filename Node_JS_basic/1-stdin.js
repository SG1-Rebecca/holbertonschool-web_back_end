// Display welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Capture input from the user
process.stdin.on('data', (data) => {
// Output once the input is collected
  process.stdout.write(`Your name is: ${data}`);
});

// Output the program end
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
