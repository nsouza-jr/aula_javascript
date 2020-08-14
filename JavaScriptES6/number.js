const myNUmber = 12.4032;
console.log(myNUmber);

const numberAsString = myNUmber.toString();
console.log('\nnumero transformado em string: ', typeof numberAsString);

const fixedTwoDecimals = myNUmber.toFixed(2);
console.log('\nnumero com 2 casas decimais: ', fixedTwoDecimals);

console.log('\nString parseada para float:', typeof parseFloat('13.22'));

console.log('\nString parseada para float com typeof:', typeof parseFloat('13.22'));

console.log('\nString parseada para int:', parseInt('13.20'));
