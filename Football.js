function isDangerousSituation(situation) {
  // Iterate through the string
  for (let i = 0; i <= situation.length - 7; i++) {
    // Check for sequences of 7 consecutive '0's or '1's
    if (
      situation.substring(i, i + 7) === "0000000" ||
      situation.substring(i, i + 7) === "1111111"
    ) {
      return "YES";
    }
  }
  return "NO";
}

// Read input
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (situation) => {
  // Check if the situation is dangerous
  const result = isDangerousSituation(situation.trim());
  console.log(result);
  rl.close();
});
