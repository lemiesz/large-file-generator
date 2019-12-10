const fs = require("fs");

const ITERATIONS = 100000; // Default generates a 5gb text file

function generate() {
  const writeStream = fs.createWriteStream("./out.txt");
  fs.readFile("./beemovie.txt", function(err, data) {
    if (err) throw err;
    for (let i = 0; i < ITERATIONS; i++) {
      writeStream.write(`${data} \n`);
    }
  });
}
generate();
