
function printBox(width, height) {
  let coin = "*";
  let horizontal = "*";
  let vertical = "*";
  let pattern = "";
  let isCoin = false;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {

      isCoin = (i === 0 && j === 0) || (i === 0 && j === width - 1)
        || (i === height - 1 && j === 0) || (i === height - 1 && j === width - 1);

      if (isCoin) {
        pattern += coin;
      } else if (i === 0 || i === height - 1) {
        pattern += horizontal;
      }

      if (j === width - 2 && i > 0 && i < height - 1)
        pattern += vertical;
      else if (i > 0 && i < height - 1)
        pattern += ' ';

    }

    if (i !== height - 1) {
      pattern += "\n";
      if (i !== height - 2)
        pattern += vertical;
    }

  }

  console.log(pattern);

}

printBox(6, 5);

module.exports = printBox;
