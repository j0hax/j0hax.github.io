---
title: "Stirling Zahlen (der zweiten Art)"
date: 2023-08-02T15:16:28+02:00
katex: true
---

Die rekursive Definition der Stirling-Zahlen lautet
\begin{equation}
S_{n,k} = S_{n-1, k-1} + k S_{n-1, k}
\end{equation}
mit \\(n, k \in \mathbb{N}_0\\).

# Eigenschaften

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