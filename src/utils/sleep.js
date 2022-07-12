const sleepByPromise = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

function sleepByLoop(ms) {
  const current = Date.now();
  while (Date.now() - current < ms) {}
}

module.exports = { sleepByPromise, sleepByLoop };
