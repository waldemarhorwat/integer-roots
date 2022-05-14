# Exact Integer Roots

Here are simple algorithms *BigIntSqrt* and *BigIntCbrt* for computing exact integer values (truncated towards zero) of square and cube roots of arbitrary integers using only integer arithmetic.  These can be used to implement `BigInt` equivalents of `Math.sqrt` and `Math.cbrt` in ECMAScript.
Both algorithms are efficient, taking only log(log(*n*)) operations to compute square or cube roots of *n*.
I'm also including proofs that these algorithms compute the exact results for all inputs:

<img src="formulas/BigIntSqrt-def.png" width=330 height=24>
<img src="formulas/BigIntCbrt-def.png" width=273 height=24>

## Notation

All operations have their usual mathematical meanings on real numbers.

* ⌊*x*⌋ is the floor of the real number *x* (i.e. truncated towards -∞ to an integer): ⌊7.1⌋ = 7, ⌊–3.2⌋ = –4, ⌊5⌋ = 5, ⌊–2⌋ = –2
* [*x*] is the real number *x* truncated towards 0 to an integer: [7.1] = 7, [–3.2] = –3, [5] = 5, [–2] = –2

We can combine [*x*] with division to denote integer division truncating towards 0:

* <img src="formulas/quotient.png" width=22 height=40> is the quotient of *x* divided by *y* truncated towards 0 to an integer: [17/5] = [3.4] = 3, [–7/2] = [–3.5] = –3, [10/2] = 5. When *x* and *y* are integers, this is the same as ECMAScript's `BigInt` division of *x* and *y*.

When *x* ≥ 0 and *y* > 0, the result of *x*/*y* is nonnegative, so truncating it towards 0 is the same as truncating it towards -∞.

* In such nonnegative cases we'll sometimes use <img src="formulas/quotient-floor.png" width=24 height=40> instead of <img src="formulas/quotient.png" width=22 height=40>. In the nonnegative cases both denote ECMAScript's `BigInt` division of *x* and *y*.

## Bit-Size

We'll need a helper function *BigIntLog2* that, given a positive integer *n*, returns the position of its most significant set bit when expressed in binary. For example, *BigIntLog2*(1) = 0, *BigIntLog2*(2) = 1, *BigIntLog2*(255) = 7, *BigIntLog2*(256) = 8. Mathematically, for integer *n* > 0, *BigIntLog2* is defined as

<img src="formulas/BigIntLog2-def.png" width=352 height=20>

# Newton's Method on Real Numbers

The basic approach of computing the square or cube root of *n* is based on solving the equation *x*<sup>2</sup> – *n* = 0 or *x*<sup>3</sup> – *n* = 0 for a real number *x*. We can do this by starting with an initial guess *x*<sub>0</sub> and then using a variant of [Newton's method](https://en.wikipedia.org/wiki/Newton%27s_method) to refine it to produce successive approximations *x*<sub>1</sub>, *x*<sub>2</sub>, and so on until we find the desired answer. Let's first take a look at how Newton's method works on real numbers:

Given an approximation *x*<sub>*i*</sub> to a root of the equation *f*(*x*) = 0, [Newton's method](https://en.wikipedia.org/wiki/Newton%27s_method) produces the next approximation

<img src="formulas/newtons-method.png" width=151 height=48>

For computing square roots we're looking for roots of *f*(*x*) = *x*<sup>2</sup> – *n* so Newton's method becomes

<img src="formulas/newtons-method-2a.png" width=272 height=47>

For cube roots we're looking for roots of *f*(*x*) = *x*<sup>3</sup> – *n*, in which case Newton's method becomes

<img src="formulas/newtons-method-3.png" width=284 height=50>

These will produce an infinite series of successively more accurate real number approximations of the square or cube root of *n*.

# Computing Square Roots

The basic Newton's method uses real numbers and produces an infinite series of approximations. Let's modify it to use only integer arithmetic to find integer square roots truncated towards 0. Later we'll show that we'll arrive at the exact answer in finitely many (in fact only log(log(*n*))) operations. we can use it using only integer arithmetic in the *BigIntSqrt* and *BigIntCbrt* algorithms and .

# Square Root Algorithm

The approach is as follows:

If *n* = 0, then return 0.

<img src="formulas/n-width.png" width=102 height=20>
<img src="formulas/initial-guess-2.png" width=89 height=22>

For *i* = 0, 1, 2, 3, … compute the series

<img src="formulas/int-newtons-method-2.png" width=161 height=75>

until we find the lowest *k* > 0 such that *x*<sub>*k*+1</sub> ≥ *x*<sub>*k*</sub>.

We will prove that our search for such a *k* terminates and that *x*<sub>*k* is the value of *BigIntSqrt*(*n*):

<img src="formulas/x-k-2.png" width=88 height=24>

## ECMAScript

## Proof

## Small Value Optimization

# Cube Root Algorithm

## Proof

## Scratchpad

<img src="formulas/newtons-method.png" width=151 height=48>
<img src="https://latex.codecogs.com/svg.latex?x_{i%2b1}=x_i-\frac{f(x_i)}{f'(x_i)}">

<img src="formulas/newtons-method-2.png" width=230 height=38>
<img src="https://latex.codecogs.com/svg.latex?x_{i+1}=x_i-\frac{x_i^2-n}{2x_i}=\frac{1}{2}(x_i+\frac{n}{x_i})">
<img src="formulas/newtons-method-2a.png" width=272 height=47>

<img src="https://render.githubusercontent.com/render/math?math=\forall n\in\mathbb{Z},n\geq 0:BigIntSqrt(n)=\left\lfloor\sqrt{n}\right\rfloor">
<img src="https://render.githubusercontent.com/render/math?math=\forall n\in\mathbb{Z}:BigIntCbrt(n)=\left[\sqrt[3]{n}\right]">
