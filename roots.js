function BigIntLog2(n) {
  if (n <= 0n)
    throw RangeError("Invalid BigIntLog2");
  return BigInt(n.toString(2).length - 1);
}


function BigIntSqrt(n) {
  if (n < 0n)
    throw RangeError("Square root of negative BigInt");
  if (n === 0n)
    return 0n;
  const w = BigIntLog2(n);  // BigIntLog2 returns a BigInt
  let x = 1n << (w >> 1n);  // x is the initial guess x0 here
  let next = (x + n/x) >> 1n;
  do {
    x = next;
  } while ((next = (x + n/x) >> 1n) < x);
  return x;
}

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


function BigIntCbrt(n) {
  if (n < 0n)
    return -BigIntCbrt(-n);
  if (n === 0n)
    return 0n;
  const w = BigIntLog2(n);  // BigIntLog2 returns a BigInt
  let x = 1n << (w / 3n);  // x is the initial guess x0 here
  let next = (2n*x + n/(x*x)) / 3n;
  do {
    x = next;
  } while ((next = (2n*x + n/(x*x)) / 3n) < x);
  return x;
}

function BigIntCbrtSmall(n) {
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
