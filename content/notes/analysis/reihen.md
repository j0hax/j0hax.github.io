---
title: "Reihen"
date: 2023-07-26T14:47:55+02:00
weight: 2
categories:
- university
---

# Konvergenz- und Divergenzkriterien von Reihen

Eine **notwendige** Bedingung für das Konvergieren von Reihen, ist dass die Folge eine **Nullfolge** ist.

\begin{equation}
\lim_{k \to \infty} a_k = 0
\end{equation}

## Geometrische Reihen

\begin{equation}
\sum_{k=1}^\infty q^{k} =
\begin{cases}
\frac{q^m}{1-q} & |q| < 1\\\
\text{divergiert} & |q| \geq 1
\end{cases}
\end{equation}

## Harmonische Reihen

\begin{equation}
\sum_{k=1}^\infty \frac{1}{k^s} =
\begin{cases}
\text{konvergiert} & s > 1\\\
\text{divergiert} & s \leq 1
\end{cases}
\end{equation}

## Wurzelkriterium

Man kann \\(\sum_{k=0}^\infty a_k\\) umschreiben als
\begin{equation}
\lim_{k \to \infty} \sqrt[k]{|a_k|} =
\begin{cases}
\text{konvergiert} & < 1\\\ \text{divergiert} & > 1\\\ \text{keine Aussage} & = 1
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
\text{konvergiert} & < 1\\\ \text{divergiert} & > 1\\\ \text{keine Aussage} & = 1
\end{cases}
\end{equation}

- Hier ist insbesondere der [Doppelbruch](#Doppelbruch) wichtig.

## Leibnizkriterium

Gilt insbesondere für **alternierende Reihen.**
\begin{equation}
\sum_{k=0}^\infty (-1)^k \cdot b_k =
\begin{cases}
\text{konvergiert} & b_k~\text{ist monotone Nullfolge}\\\
\text{divergiert} & \text{sonst}
\end{cases}
\end{equation}