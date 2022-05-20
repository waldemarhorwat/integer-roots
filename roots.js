// n must be a BigInt greater than zero.  Return its base-2 logarithm truncated
// towards -∞ to an integer.  The result is a BigInt.
//
// This should be a built-in.  Lacking that, we just count the digits of the
// base-2 representation of the BigInt.
function BigIntLog2(n) {
  if (n <= 0n)
    throw RangeError("Invalid BigIntLog2");
  return BigInt(n.toString(2).length - 1);
}


// Compute the square root of the BigInt n, truncated towards 0 to an integer.
// The result is a BigInt.
// See the README for the proof of correctness on all nonnegative BigInt inputs.
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


// Compute the cube root of the BigInt n, truncated towards 0 to an integer.
// The result is a BigInt.
// See the README for the proof of correctness on all BigInt inputs.
ffunction BigIntCbrt(n) {
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
