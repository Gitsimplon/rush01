
function displayCaracter(n) {
  let evenLetter = "";
  for (let i = 1; i <= n; i++) {
    evenLetter = (i % 4 === 0) ? "C" : "B";
    console.log((i % 2 === 1) ? "A" : evenLetter);
  }

}

displayCaracter(10);

module.exports = displayCaracter;
