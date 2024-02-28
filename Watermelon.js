var readline = require("readline").createInterface(process.stdin);

readline.prompt();
//single input
readline.on("line", (w) => {
  logic(w);
  readline.close();
});

function logic(w) {
  if (w != 2 && w % 2 === 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
