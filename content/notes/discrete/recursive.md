---
title: "Rekursionsgleichungen"
date: 2023-05-15
katex: true
---

Der Unterschied zwischen **homogen** und **inhomogen** ist nur, dass eine inhomogenene Rekursionsgleichung eine Konstante hinzugefügt hat. Beispielsweise ist \\(x_n = 2 x_{n-1} + 3\\) inhomogen.

Die **Ordnung** wird durch die anzahl der \\(x_{k-\dots}\\) bestimmt. Beispielsweise ist \\(x_n = 3 x_{n-1} + x_{n-2}\\) eine Rekursionsgleichung der 2. Ordnung.

# Erste Ordnung lösen

Sei \\(x_0 = b_0, x_n = c x_{n-1} +b_1\\) für \\(n \geq 1\\). Dann gilt:
\begin{equation}
x_n =
\begin{cases}
c^n b_0 & b_1 = 0\\\
b_0 + n b_1 & c=1\\\
c^n b_0 + \frac{c^n - 1}{c-1} b_1 & c \neq 1
\end{cases}
\end{equation}

# Zweite Ordnung lösen

Funktioniert nur für homogene Gleichungen. In der Rekursion
\begin{equation}
x_1 = b_1, x_0 = b_0, x_n = c_1 x_{n−1} + c_2 x_{n−2}
\end{equation}
ist für \\(n \geq 2\\)
\begin{equation}
x_n = A \alpha^n + B \beta^n
\end{equation}
die Lösung für alle \\(n \in \mathbb{N}_0\\), wobei
\begin{align}
A = \frac{b_1 - b_0 \beta}{\alpha - \beta} && B = \frac{b_1 - b_0 \alpha}{\alpha - \beta}
\end{align}
mit \\(\alpha \geq \beta\\) die Nullstellen des Polynoms \\(t^2 - c_1 t - c_2\\) sind. Hier nutzt man am besten die p-q Formel.