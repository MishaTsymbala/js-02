// function prn(msg) {
//     document.write(msg + '<br');
// }

// var cars = ['bmw', 'ferrari', 'zaz'];
// prn(cars.length);
// cars[3]= 'toyota';
// prn(cars.length);
// prn(cars[0]);

// cars.push('audi');
// prn(cars.length);

// function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
//   var result = "";
//   return result;
// }


var myGlobal = 10;
function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
