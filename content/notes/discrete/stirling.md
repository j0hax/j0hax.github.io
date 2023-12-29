---
title: "Stirling Zahlen"
date: 2023-05-08
katex: true
---

# ...der Ersten Art

**Definition 1.18**
> Für \\(n \in \mathbb{N}, k \in \mathbb{N}\_0\\) sei \\(s_{n,k}\\) die Anzahl der Permutationen in \\(S_n\\) mit genau \\(k\\) Zykeln in der Zykelschreibweise. Außerdem setzen wir \\(s_{0,0} = 1.\\)

## Eigenschaften

**Proposition 1.19**
1. Für \\(n < k\\) ist \\(s_{n,k} = 0.\\)
2. \\(s_{n,0} = 0\\) und \\(s_{n,n} = 1\\) für alle \\(n \in \mathbb{N}.\\)
3. Für alle \\(n \in \mathbb{N}\\) gilt:
    1. \\(s_{n,1} = (n − 1)!\\)
    2. \\(s_{n,n−1} = \binom{n}{2}\\)
4. \\(\sum_{k=1}^n s_{n,k} = n!\\)

### Code Beispiel
```python
#!/bin/env python
from math import comb, factorial


def stirling(n: int, k: int) -> int:
    if n < k:
        return 0
    if k == 0:
        return 0
    if n == k:
        return 1
    if k == 1:
        return factorial(n - 1)
    if k == n - 1:
        return comb(n, 2)

    return stirling(n - 1, k - 1) + (n - 1) * stirling(n - 1, k)


if __name__ == "__main__":
    n = int(input())
    k = int(input())
    s = stirling(n, k)
    print(s)
```

# ...der Zweiten Art

Gegeben einer Menge \\(\\{x_1, \dots x_n\\}\\), zähle die Anzahl von Möglichkeiten diese auf \\(k\\) Partitionen aufzuteilen.

Die rekursive Definition der Stirling-Zahlen lautet
\begin{equation}
S_{n,k} = S_{n-1, k-1} + k S_{n-1, k}
\end{equation}
mit \\(n, k \in \mathbb{N}_0\\).

## Eigenschaften

\begin{equation}
S_{n,k}=
\begin{cases}
0 & n < k\\\
1 & n=k \\\
0 & n=0 \lor k = 0 \\\
\binom{n}{2} & k = n-1\\\
2^{n-1}-1 & k = 2
\end{cases}
\end{equation}
