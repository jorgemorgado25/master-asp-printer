const printer = require('./printer');

try {
    const pr = printer.getPrinters();
    console.log(pr);
  } catch (err) {
    console.log(err);
}