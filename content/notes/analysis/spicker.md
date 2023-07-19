---
title: "Analysis Spickzettel"
date: 2023-07-19T13:28:34+02:00
katex: true
---

## Wichtige Rechenregeln

### Brüche

#### Kreuzweise Multiplikation

Jede Seite mit dem Nenner der anderen multiplizeren, dadurch fällt der Nenner weg.

\begin{align}
\frac{a}{b} &= \frac{c}{d}\\\
\frac{a \cdot d}{b \cdot d} &= \frac{c \cdot b}{d \cdot b}\\\
a \cdot d &= c \cdot b
\end{align}

##### Beispiel

\begin{align}
\frac{x+3}{2} &= \frac{x+1}{4}\\\
4(x+3) &= 2(x+1)\\\
4x+12 &= 2x+2\\\
4x &= 2x-10\\\
2x &= -10\\\
x &= -5
\end{align}

#### Doppelbruch

\\[\frac{\frac{a}{b}}{\frac{c}{d}} = \frac{a}{b}\cdot \frac{d}{c} = \frac{a \cdot d}{b \cdot c}\\]

### Potenzregeln

#### Multiplikation unterschiedlicher Potenzen

\\[x^a \cdot x^b = x^{a+b}\\]

#### Multiplikation unterschiedlicher Basen

\\[a^x \cdot b^x = (a \cdot b)^x\\]

#### Division mit gleicher Basis

\\[\frac{x^a}{x^b} = x^{a-b}\\]

##### Beispiel
Der Ausdruck \\[\frac{4^k \cdot \dots}{4^{k+1} \cdot \dots} = \frac{\dots}{4 \cdot \dots}\\] da \\(4^{k+1} = 4^k + 4^1\\) und die \\(4^k\\) sich wegkürzen.

#### Division mit gleicher Potenz

\\[\frac{a^x}{b^x} = \left(\frac{a}{b}\right)^x\\]

## Binomische Formeln

1. \\((a+b)^2 = a^2 + b^2 + 2ab\\)
2. \\((a-b)^2 = a^2 + b^2 - 2ab\\)
3. \\((a+b)(a-b) = a^2 - b^2\\)

## Konvergenz/Divergenz

### Wurzelkriterium

Man kann \\(\sum_{k=0}^\infty a_k\\) umschreiben als
\\[
\lim_{k \to \infty} \sqrt[k]{|a_k|} =
\begin{cases}
< 1 & \text{konvergiert}\\ > 1 & \text{divergiert}\\ = 1 & \text{keine Aussage}
\end{cases}
\\]

- Das Ergebnis des Limes ist nur eine Kennzahl und **nicht** der Grenzwert!
- Durch die Betragsstriche fällt das \\((-1)^K\\) bei alternierenden Reihen weg.
- Insbesondere geeignet für Formen wie \\(\left(\frac{x}{y}\right)^k\\) oder \\(\frac{1}{(\ln{x})^k}\\)

### Quotientenkriterium

Man kann \\(\sum_{k=0}^\infty a_k\\) umschreiben als
\\[
\lim_{k \to \infty} \left|\frac{a_{k+1}}{a_k}\right| =
\begin{cases}
< 1 & \text{konvergiert}\\ > 1 & \text{divergiert}\\ = 1 & \text{keine Aussage}
\end{cases}
\\]

- Hier ist insbesondere der [Doppelbruch](#Doppelbruch) wichtig.

### Leibnizkriterium

- To-Do
