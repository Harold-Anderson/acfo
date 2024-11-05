// detect-runtime.js
if (typeof Bun !== 'undefined') {
  console.log(`Running with Bun: ${Bun.version}`);
} else if (typeof process !== 'undefined' && process.version) {
  console.log(`Running with Node.js: ${process.version}`);
} else {
  console.log('Unknown runtime environment');
}
