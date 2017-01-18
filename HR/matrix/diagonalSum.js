var sample = "3/n 11 2 4/n 4 5 6/n 10 8 -12";

function getDiagonal(input) {
  var rows = input.split('/n');
  var maxRow = rows[0];
  maxRow = maxRow.trim();
  maxRow = parseInt(maxRow);

  var maxRow = parseInt(rows[0].trim());
  var count = 0;
  var primarySum = 0;
  var secondarySum = 0;

  for (var rowIndex = 1; rowIndex < rows.length; rowIndex++) {
    var rowContents = rows[rowIndex].trim().split(' ');
    var secondIndex = maxRow - count - 1;
    primarySum += parseInt(rowContents[count]);
    secondarySum += parseInt(rowContents[secondIndex]);
    count++;
  }
  var difference = primarySum - secondarySum;
  console.log(Math.abs(difference));
}
