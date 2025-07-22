---
title: "Taylorpolynome"
date: 2023-07-06
weight: 10
categories:
- university
---

# Allgemeine Formel für Taylorpolynome

Die Formel für das Taylorpolynom der Ordnung \\(n\\) um den Entwicklungspunkt \\(x_0\\) lautet

\begin{align}
P_{x_0, n} &= f(x_0) + f^\prime (x_0)(x-x_0) + \frac{f^{\prime \prime} (x_0)}{2!} (x-x_0)^2 \dots\\\
&= \sum_{k=0}^n \frac{f^k (x_0)}{k!} \cdot (x-x_0)^k
\end{align}

## Beispiel

> Berechnen Sie das Taylorpolynom von \\(f(x) = e^x\\) vom Grad \\(n\\) um den Entwicklungspunkt \\(0\\).

Wir wissen, dass \\(e^0 = 1\\). Praktisch ist, dass \\(f^\prime(x) = f^{\prime \prime}(x) = f^n(x) = e^x\\) und somit für _jede_ Ableitung \\(f^n(0) = 1\\) gilt.

\begin{align}
P_{0, n} &= \frac{\overbrace{f^0(0)}^{=1}}{n!} \cdot (x-0)^0 + \frac{f^1(0)}{n!} \cdot (x-0)^1 +\dots\\\
&= \sum_{k=0}^{n} \frac{1}{n!} \cdot (x-0)^n\\\
&= \sum_{k=0}^{n} \frac{x^n}{n!}
\end{align}


## Restgliedformel

Nach der Approximation braucht man das >>Restglied<<
\begin{equation}
R_n(x-x_0) = \frac{f^{n+1}(\xi)}{(n+1)!} (x-x_0)^{n+1}
\end{equation}
wobei \\(\xi \in (x_0, x)\\)