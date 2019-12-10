const fs = require("fs");

function generate() {
  const writeStream = fs.createWriteStream("./out.txt");
  fs.readFile("./beemovie.txt", function(err, data) {
    if (err) throw err;
    for (let i = 0; i < 100000; i++) {
      writeStream.write(`${data} \n`);
    }
  });
}
generate();
