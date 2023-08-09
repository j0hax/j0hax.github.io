---
title: "Stirling Zahlen (der zweiten Art)"
date: 2023-05-08
katex: true
---

Gegeben einer Menge \\(\\{x_1, \dots x_n\\}\\), zähle die Anzahl von Möglichkeiten diese auf \\(k\\) Partitionen aufzuteilen.

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
