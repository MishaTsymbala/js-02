var n = Number(prompt("Enter number"));
document.write('n fib ='+fib(n));
function fib(n) {
  if (n < 0)
  return "Can't be less than 0";
  var a = 1,
      b = 1;
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}