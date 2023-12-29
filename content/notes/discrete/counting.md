---
title: "Kombinatorik & Zählprobleme"
date: 2023-05-08
katex: true
---

# Inklusion und Exklusion

## Für zwei Mengen

\begin{equation}
|A \cup B| = |A| + |B| - |A \cap B|
\end{equation}

## Für drei Mengen

\begin{equation}
|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|
\end{equation}

### Klausuraufgabe (SoSe 2023)

>Wie viele 0-1-Folgen der Länge 7 gibt es, die mit 000 beginnen oder mit 10 enden? (*Hinweis:* Beides ist auch erlaubt.) Ergebnis bitte in Dezimaldarstellung angeben.

Wir Zählen die Anzahl von Möglichkeiten für jede Folge:
1. \\(000????\\) ergibt \\(2^4 = 16\\) Möglichkeiten
2. \\(?????10\\) ergibt \\(2^5 = 32\\) Möglichkeiten
3. \\(000??10\\) ergibt \\(2^2 = 4\\) Möglichkeiten

**Achtung:** da alle \\(000??10\\) Folgen bereits in den ersten zwei Möglichkeiten enthalten sind, werden diese doppelt abgezählt und müssen somit **subtrahiert** werden.

\begin{align}
44 &= \underset{=16}{|000????|} + \underset{=32}{|?????10|} - \underset{=4}{|000??10|}\\\
\end{align}

# Permutationen Zählen

## Klausuraufgabe (SoSe 2023)

>Es sei \\(n \in \mathbb{N}, n \geq 3\\). Wie viele Permutationen \\(\sigma \in S_n\\) gibt es, für die sowohl \\(\sigma(1) < \sigma(2)\\) als auch \\(\sigma(2) > \sigma(3)\\) gilt?

### Lösung

Unsere Permutation sieht so aus:

\\[
\begin{pmatrix}
1 & 2 & 3 & \dots & n\\\
\sigma(1) & \sigma(2) & \sigma(3) & \dots & \sigma(n)
\end{pmatrix}
\\]

Es gibt also
- \\(\binom{n}{3}\\) Möglichkeiten die ersten 3 Zahlen zu wählen
- \\(2!\\) Vertauschumgsmöglichkeiten für \\(\sigma(1)\\) und \\(\sigma(3)\\) --- Hauptsache, \\(\sigma(2)\\) ist größer.
- \\((n-3)!\\) weitere Zahlen bleiben übrig zu tauschen.

Somit hat man
\\[
\binom{n}{3} \cdot 2! \cdot (n-3)!
\\]
Permutationen welche die Bedingung erfüllen.