---
title: "Reihen"
date: 2023-07-26T14:47:55+02:00
weight: 2
katex: true
categories:
- university
---

# Konvergenz- und Divergenzkriterien von Reihen

## Wurzelkriterium

Man kann \\(\sum_{k=0}^\infty a_k\\) umschreiben als
\begin{equation}
\lim_{k \to \infty} \sqrt[k]{|a_k|} =
\begin{cases}
< 1 & \text{konvergiert}\\\ > 1 & \text{divergiert}\\\ = 1 & \text{keine Aussage}
\end{cases}
\end{equation}

- Das Ergebnis des Limes ist nur eine Kennzahl und **nicht** der Grenzwert!
- Durch die Betragsstriche fällt das \\((-1)^K\\) bei alternierenden Reihen weg.
- Insbesondere geeignet für Formen wie \\(\left(\frac{x}{y}\right)^k\\) oder \\(\frac{1}{(\ln{x})^k}\\)

## Quotientenkriterium

Man kann \\(\sum_{k=0}^\infty a_k\\) umschreiben als
\begin{equation}
\lim_{k \to \infty} \left|\frac{a_{k+1}}{a_k}\right| =
\begin{cases}
< 1 & \text{konvergiert}\\\ > 1 & \text{divergiert}\\\ = 1 & \text{keine Aussage}
\end{cases}
\end{equation}

- Hier ist insbesondere der [Doppelbruch](#Doppelbruch) wichtig.

## Leibnizkriterium

- To-Do