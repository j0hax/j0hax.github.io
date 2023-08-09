---
title: "Lambda Calculus"
date: 2023-04-27
katex: true
---

Formal system introduced by Alonzo Church in 1930. One of the two approaches that lead to the notion of an Algorithm, the other being the Turing Machine.

Variable
: \\(x\\)

Abstraction
: \\(\lambda x . t\\)

Application
: \\(t~t\\)

# Currying
Lambda calculus permits only functions with a single argument.
\begin{align}
    f:(X \times Y) \mapsto Z && \text{curry}(f): X \mapsto Y \mapsto Z
\end{align}
Currying **allows for Partial Application,** which fixes the number of arguments of a function, yielding a new function with smaller arity. Example for \\(f(x, y) = \lambda x . \lambda y . (x * y)\\):
\begin{align}
(\lambda x . \lambda y . (x * y))~2 &= \lambda y . (2 * y)
\end{align}
By only applying one argument, to a multiplication function, you receive a function that performs a constant operation on one argument.

# Free and Bound Variables
All variable names are local to definitions.
- For the example \\(\lambda x . xy\\)
    - \\(x\\) is a bound variable,
    - \\(y\\) is a free variable.
- For the example \\((\lambda x . x)~(\lambda y.yx)\\)
    - \\(x\\) is bound in the first term,
    - \\(x\\) is free in the second, but \\(y\\) is bounded.

\\(\alpha\\)-Conversion
: Renaming the parameter in a function abstraction
: For example, \\(\alpha\\)-conversion of \\(\lambda x.x\\) might yield \\(\lambda y.y\\)
: Terms that differ only by \\(\alpha\\)-conversion are called \\(\alpha\\)-equivalent

\\(\beta\\)-Reduction
: The replacement of a bound variable in a function body with a function argument
: For example, assuming some encoding of \\(2, 7, \times\\), we have the following \\(\beta\\)-reduction: \\((\lambda n.n \times 2)~7 \implies 7 \times 2\\).

Church-Rosser-Theorem
: When applying reduction rules to terms, the ordering in which the reductions are chosen does not make a difference to the eventual result

# Church Booleans and Numerals

- \\(\text{true} := \lambda x . \lambda y . x\\)
- \\(\text{false} := \lambda x . \lambda y . y\\)
- \\(\text{AND} := \lambda x . \lambda y . x y x\\)
- \\(\text{OR} := \lambda x . \lambda y . x x y\\)

- \\(0 := \lambda s . \lambda z . z\\)
- \\(1 := \lambda s . \lambda z . sz\\)
- \\(2 := \lambda s . \lambda z . s (sz)\\)
- \\(3 := \lambda s . \lambda z . s (s(sz))\\)
- \\(n := \lambda s . \lambda z . s^n z\\)
- \\(\text{PLUS} := \lambda m . \lambda n . \lambda s . \lambda z. m s (n s z)\\)
    - \\(\text{PLUS 1} \implies \lambda n . \lambda s \lambda z . s (nsz)) = \text{SUCC}\\)
    - \\(\text{SUCC 1} \implies (\lambda s \lambda z . s (s z)) = 2\\)

## Example
Calculating \\(\text{AND}~\text{false}~\text{true}\\):
\begin{align}
(\lambda x . \lambda y . x y x) (\lambda x . \lambda y . y) (\lambda x . \lambda y . x)\\\
(\lambda y . (\lambda x . \lambda y . y) y (\lambda x . \lambda y . y)) (\lambda x . \lambda y . x)\\\
((\lambda x . \lambda y . y) (\lambda x . \lambda y . x) (\lambda x . \lambda y . y))\\\
(\lambda y . y) (\lambda x . \lambda y . y)\\\
(\lambda x . \lambda y . y) &= \text{false}
\end{align}

# Recursion
- \\(\text{omega} := (\lambda x . x x)(\lambda x . x x)\\) diverges

## Y-Combinator
The Y-Combinator itself is not recursive, but it encodes recursion. It calls the function supplied to it recursively:
\begin{equation}
Y := \lambda f . (\lambda x . f(xx)) (\lambda x . f(xx))
\end{equation}

\\(\beta\\) reduction on a function \\(g\\) results in
\begin{align}
Y g &= \lambda f . (\lambda x . f(xx)) (\lambda x . f(xx)) g\\\
&= (\lambda x . g (xx)) \(\lambda x . g (xx))\\\
&= g ((\lambda x . g(xx)) (\lambda x . g(xx)))\\\
&= g(Y g)
\end{align}
which yields \\(Y g = g(Yg) = g(g(Yg)) = g(\dots g(Yg) \dots )\\).