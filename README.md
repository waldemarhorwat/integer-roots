# Exact Integer Roots

Here are simple algorithms *BigIntSqrt* and *BigIntCbrt* for computing exact integer values (truncated towards zero) of square and cube roots of arbitrary integers using only integer arithmetic.  These can be used to implement `BigInt` equivalents of `Math.sqrt` and `Math.cbrt` in ECMAScript.
Both algorithms are efficient, taking only log(log(*n*)) operations to compute square or cube roots of *n*.
I'm also including proofs that these algorithms compute the exact results for all inputs:

<img src="formulas/BigIntSqrt-def.png" width=330 height=24>
<img src="formulas/BigIntCbrt-def.png" width=273 height=24>
<img src="https://render.githubusercontent.com/render/math?math=\forall n\in\mathbb{Z},n\geq 0:BigIntSqrt(n)=\left\lfloor\sqrt{n}\right\rfloor">
<img src="https://render.githubusercontent.com/render/math?math=\forall n\in\mathbb{Z}:BigIntCbrt(n)=\left[\sqrt[3]{n}\right]">

** Notation

* ⌊*x*⌋ is the floor of the real number *x* (i.e. truncated towards -∞ to an integer): ⌊7.1⌋ = 7, ⌊-3.2⌋ = -4, ⌊5⌋ = 5
* [*x*] is the real number *x* truncated towards 0 to an integer: [7.1] = 7, [-3.2] = -3, [5] = 5

# Approach

The fundamental approach of computing the exact square or cube root of *n* truncated to an integer is based on solving the equation *x*<sup>2</sup> – *n* = 0 or *x*<sup>3</sup> – *n* = 0 for a real number *x*. We can do this by starting with an initial guess *x*<sub>0</sub> and then using a variant of [Newton's method](https://en.wikipedia.org/wiki/Newton%27s_method) to refine it to produce successive approximations *x*<sub>1</sub>, *x*<sub>2</sub>, and so on until we find the desired answer. Although Newton's method uses real numbers, we'll show that we can use it using only integer arithmetic in the *BigIntSqrt* and *BigIntCbrt* algorithms and we'll arrive at the exact answer in finitely many (in fact only log(log(*n*))) operations.

Given an approximation *x*<sub>*i*</sub> to a root of the equation *f*(*x*) = 0, [Newton's method](https://en.wikipedia.org/wiki/Newton%27s_method) produces the next approximation

<img src="https://render.githubusercontent.com/render/math?math=x_{i%2b1}=x_i-\frac{f(x_i)}{f'(x_i)}">
<img src="https://latex.codecogs.com/svg.latex?x_{i%2b1}=x_i-\frac{f(x_i)}{f'(x_i)}">

For computing square roots we're looking for roots of *f*(*x*) = *x*² – *n* so Newton's method becomes

<img src="formulas/newtons-method-2.png" width=230 height=38>
<img src="https://latex.codecogs.com/svg.latex?x_{i+1}=x_i-\frac{x_i^2-n}{2x_i}=\frac{1}{2}(x_i+\frac{n}{x_i})">
<img src="formulas/newtons-method-2a.png" width=272 height=47>

# Square Root Algorithm

## Proof

## Small Value Optimization

# Cube Root Algorithm

## Proof
