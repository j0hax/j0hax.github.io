---
title: "Types"
date: 2023-05-12
katex: true
---

Type systems help to apply and check for a syntactically consistent interpretation. They rule out programs that do not make any sense and allow certain operations while disallowing others.

# Typing Relations
The Typing Relation for arithmetic expressions is the smallest binary relation between terms and types satisfying all instances of the typing rules.

A term \\(t\\) is **typable** or **well-typed** if there is some \\(T\\) such that \\(t:T\\).

Soundness
: If \\(K \vdash P\\) then \\(K \vDash P\\) in \\(T\\).
: If the conclusion is provable from the premise, then the premise logically entails the conclusion.

Progress
: A well-typed term \\(t\\) is not stuck.
: If \\(t : T\\) then either \\(t\\) is a value or \\(t \to t^\prime\\) for some \\(t^\prime\\)

Preservation
: Types are preserved by one-step evaluation
: If \\(t:T\\) and \\(t \to t^\prime\\) then \\(t^\prime : T\\)

# Simply-Typed Lambda Calculus

## Annotating terms
\\(x\\) is of type \\(T\\) is denoted as
\begin{equation}
\lambda x:T.t
\end{equation}
The type depends on the context.