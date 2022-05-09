# Exact Integer Roots

Here are simple algorithms *BigIntSqrt* and *BitIntCbrt* for computing exact integer values (truncated towards zero) of square and cube roots of arbitrary integers
using only integer arithmetic.  These can be used to implement `BigInt` equivalents of `Math.sqrt` and `Math.cbrt` in ECMAScript.
Both algorithms are efficient, taking only log(log(*n*)) operations to compute square or cube roots of *n*.
I'm also including proofs that these algorithms compute the exact results for all inputs:

<img src="https://render.githubusercontent.com/render/math?math=\forall n\in\mathbb{Z},n\geq 0:BigIntSqrt(n)=\left\lfloor\sqrt{n}\right\rfloor">
<img src="https://render.githubusercontent.com/render/math?math=\forall n\in\mathbb{Z}:BigIntCbrt(n)=\left[\sqrt[3]{n}\right]">

where ⌊*x*⌋ is the floor of the real number *x* (i.e. truncated towards -∞ to an integer) and [*x*] is the real number *x* truncated towards 0 to an integer.

# Approach

# Square Root Algorithm

## Proof

## Small Value Optimization

# Cube Root Algorithm

## Proof
