var n = Number(prompt("Enter number"));
document.write('n-ne fib ='+fib(n));
function fib(n) {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
