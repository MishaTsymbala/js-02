var n = Number(prompt("Enter number"));
document.write('n-ne fib ='+fib(n));
function fib(n) {
    if (n < 0)
    return "Can't be less than 0";
    else if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
