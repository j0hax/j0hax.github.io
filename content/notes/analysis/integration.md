---
title: "Integration"
date: 2023-07-27T12:39:45+02:00
---

## Partielle Integration

\begin{equation}
\int u~dv \implies uv - \int vdu
\end{equation}

### Beispiel

\begin{equation}
\int x \arctan{x}~dx = \int (\arctan{x}) (x~dx)
\end{equation}

Wir wählen \\(u = \arctan{x}\\) und \\(dv = x~dx\\).

Somit gilt \\(du = \frac{1}{1+x^2}\\) und \\(v = \frac{x^2}{2}\\).

\begin{align}
\frac{x^2}{2}\cdot \arctan{x} - \int \frac{1}{1+x^2} \cdot \frac{x^2}{2}~dx\\\
\frac{x^2}{2}\cdot \arctan{x} - \frac{1}{2} \int \frac{1}{1+x^2} \cdot x^2~dx\\\
\end{align}

Weiter können wir rechnen:
\begin{align}
\frac{1}{1+x^2} \cdot x^2 &= \frac{x^2+1}{1+x^2} - \frac{1}{1+x^2}\\\
&= 1 - \frac{1}{1+x^2}
\end{align}
und wissen somit
\begin{align}
\frac{x^2}{2}\cdot \arctan{x} - \frac{1}{2} \int 1 - \frac{1}{1+x^2}~dx\\\
\frac{x^2}{2}\cdot \arctan{x} - \frac{1}{2} x - \arctan{x}\\\
\end{align}

Als >>schöne<< Formel erhält man \\[\frac{1}{2} x^2 \arctan{x} - \frac{1}{2} (x - \arctan{x}) + c\\]