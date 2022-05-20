// Code used to generate parts of the README.  Don't use this; use roots.js
// instead.


// Small-integer optimization for small BigInts, usable for values under about
// 2n**44n.  THIS WILL PRODUCE INCORRECT RESULTS FOR LARGER BIGINTS.
// I intentionally made this not switch to BigIntSqrt for larger values to make
// the loss of accuracy visible.
function BigIntSqrtSmall(n) {
  return BigInt(Math.floor(Math.sqrt(Number(n) + 0.5)));
}


function BigIntSqrtLogged(n) {
  if (n < 0n)
    throw RangeError("Square root of negative BigInt");
  if (n === 0n)
    return "0\n";
  str = "";
  const w = BigIntLog2(n);  // BigIntLog2 returns a BigInt
  str += "- *w* = `"+w+"n`\n";
  let x = 1n << (w >> 1n);  // x is the initial guess x0 here
  let i = 0;
  str += "- *x*<sub>"+i+++"</sub> = `"+x+"n`\n";
  let next = (x + n/x) >> 1n;
  do {
    x = next;
    str += "- *x*<sub>"+i+++"</sub> = `"+x+"n`\n";
  } while ((next = (x + n/x) >> 1n) < x);
  str += "- *next* = `"+next+"n`\n";
  return str;
}


// Small-integer optimization for small BigInts, usable for values under about
// 2n**44n.  THIS WILL PRODUCE INCORRECT RESULTS FOR LARGER BIGINTS.
// I intentionally made this not switch to BigIntCbrt for larger values to make
// the loss of accuracy visible.
function BigIntCbrtSmall(n) {
  if (n < 0n)
    return -BigIntCbrtSmall(-n);
  return BigInt(Math.floor(Math.cbrt(Number(n) + 0.5)));
}


function BigIntCbrtLogged(n) {
  if (n < 0n)
    return BigIntCbrtLogged(-n) + "negate\n";
  if (n === 0n)
    return "0\n";
  str = "";
  const w = BigIntLog2(n);  // BigIntLog2 returns a BigInt
  str += "- *w* = `"+w+"n`\n";
  let x = 1n << (w / 3n);  // x is the initial guess x0 here
  let i = 0;
  str += "- *x*<sub>"+i+++"</sub> = `"+x+"n`\n";
  let next = (2n*x + n/(x*x)) / 3n;
  do {
    x = next;
    str += "- *x*<sub>"+i+++"</sub> = `"+x+"n`\n";
  } while ((next = (2n*x + n/(x*x)) / 3n) < x);
  str += "- *next* = `"+next+"n`\n";
  return str;
}
