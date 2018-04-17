function add(a, b) {
  var number = a + b;
  return number;
}

function subtract(a, b) {
  var number = a - b;
  return number;
}

function multiply(a, b) {
  var number = a*b;
  return number;
}

function divide(a, b){
  var number = a / b;
  return number;
}

function inc(n) {
  return n + 1;
}

function dec(n){
  return n - 1;
}

function makeInt(n){
  var parsedInt = parseInt(n, 10);
  return parsedInt;
}

function preserveDecimal(n){
  var parsedDecimal = parseFloat(n) ;
  return parsedDecimal;
}
