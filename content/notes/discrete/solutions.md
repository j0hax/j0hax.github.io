---
title: "ILIAS Lösungen"
date: 2024-01-05T16:58:30+01:00
weight: 100
ShowToc: true
---

# Online-Trainer Nr. 1 zu Kombinatorik

## Buchstaben kombinieren

>Gesucht sei die Anzahl der verschiedenen Wörter mit \\(8\\) Buchstaben aus dem Alphabet mit den Buchstaben \\(a,b,c,d,e\\), welche genau \\(3\\) mal den Buchstaben \\(e\\) und genau \\(4\\) mal den Buchstaben \\(a\\) enthalten.

Die Lösung ist hier ähnlich zu einer Aufgabe von Übungsblatt 2:

\\[
\binom{8}{3} \cdot \binom{5}{4} \cdot 3^1 = 840
\\]

Der erste Binomialkoeffizient wählt drei \\(e\\)s aus acht möglichen Buchstaben. Der zweite wählt dann vier \\(a\\)s aus den restlichen fünf stellen. Für die letzte Stelle kann man einen beliebigen Buchstaben aus der Menge \\(\\{b,c,d\\}\\) wählen.

## Blumensträuße zusammenstellen

>Es soll ein Blumenstrauß mit \\(4\\) Blumen aus \\(3\\) verschiedenen Blumensorten zusammengestellt werden.
>
>Wie viele verschiedene Blumensträuße können zusammengestellt werden?

Hier folgt man *Ziehen mit Wiederholung, ungeordnet* aus Teil 1.2 des Skriptes. Wir rechnen also
\\[
    \binom{3+4-1}{3-1} = \binom{6}{2} = \frac{30}{2} = 15
\\]

## Primzahlen

>Sei \\(n=p_1 \cdot p_2 \cdot p_3 = 13 \cdot 5 \cdot 11=715\\). Bestimmen Sie mittels Inklusion-Exklusion die Anzahl der Zahlen \\(\leq 715\\), die teilerfremd zu \\(n\\) sind.

Zuerst bestimmen wir die Anzahl von Zahlen, die durch die Primfaktoren teilbar sind:

- Zahlen durch 13 Teilbar: \\(|A| = \frac{715}{13} = 55\\)
- Zahlen durch 5 Teilbar: \\(|B| = \frac{715}{5} = 143\\)
- Zahlen durch 11 Teilbar: \\(|C| = \frac{715}{11} = 65\\)

Nun bestimmt man die Zahlen, die durch zwei der Primfaktoren teilbar sind:

- Zahlen durch 13 und 5 Teilbar: \\(|A \cap B| = \frac{715}{13 \cdot 5} = 11\\)
- Zahlen durch 13 und 11 Teilbar: \\(|A \cap C| = \frac{715}{13 \cdot 11} = 5\\)
- Zahlen durch 5 und 11 Teilbar: \\(|B \cap C| = \frac{715}{5 \cdot 11} = 13\\)

Als letztes observiert man, dass \\(p_1\\), \\(p_2\\), und \\(p_3\\) die Primfaktoren von 715 bereits sind, und die Zahl nur durch diese teilbar ist. Also muss lauten: \\(|A \cap B \cap C| = \frac{715}{13 \cdot 5 \cdot 11} = 1\\).

Durch Inklusion-Exklusion lautet also die Anzahl von Teilern \\[55+143+65-11-5-13+1 = 235.\\] Allerdings suchen wir die Anzahl von *teilerfremden* Zahlen, welche durch Subtraktion bestimmt werden kann. Somit ist die Lösung also \\[715 - 235 = 480.\\]

## Lastwagen anordnen

>An einer Verkehrsampel stehen \\(7\\) voneinander unterscheidbare Lastwagen alle direkt hintereinander. Von diesen \\(7\\) Lastwagen transportieren \\(4\\) Lastwagen Gefahrgut.

>1. Bestimmen Sie die Anzahl der verschiedenen Möglichkeiten, die \\(7\\) Lastwagen anzuordnen.

Hier nutzt man einen elementaren Satz aus der Kombinatork. Dieser ist im Skript Teil 1.2 als *Ziehen ohne Wiederholung, geordnet* bezeichnet. Insgesamt gibt es \\[7! = 5040\\] Wege die LKWs anzuordnen.

>2. Bestimmen Sie außerdem die Anzahl möglicher Anordnungen, in denen die \\(4\\) Lastwagen mit Gefahrgut direkt hintereinander stehen.

An diesem Teil kann man sich eine Auflistungen aller Möglichkeiten vorstellen: ich nutze `_` für einen normalen LKW und `G` für einen mit Gefahrgut:

- `_ _ _ G G G G` = \\(3! \cdot 4!\\)
- `_ _ G G G G _` = \\(2! \cdot 4! \cdot 3\\)
- `_ G G G G _ _` = \\(3 \cdot 4! \cdot 2!\\)
- `G G G G _ _ _` = \\(4! \cdot 3!\\)

Die vereinfachte Lösung lautet also \\[2 \cdot (3! \cdot 4!) + 2 \cdot (2! \cdot 4! \cdot 3) = 576\\] Möglichkeiten die LKWs anzuordnen, wenn alle vier mit Gefahrgut hintereinander stehen.

## Anzahl von Permutationen

>Bestimmen Sie die Anzahl der Permutationen \\(\sigma \in S_9\\) mit \\(\sigma(1) \ne 1\\).

Unsere Permutation lässt uns also *fast* alle möglichen Freiheiten, bis auf dass \\(\sigma(1)\\) jede Zahl außer \\(1\\) sein darf:

\\[
    \sigma =
    \begin{pmatrix}
    1 & 2 & \dots & 8 & 9\\\
    x & ? & \dots & ? & ?
    \end{pmatrix}
\\]

Die Stelle \\(x\\) hat 8 Möglichkeiten, also von \\(2\\) bis \\(9\\). Die anderen \\(n-1\\) Stellen der Permutation können jedoch ohne Wiederholung, geeordnet gezogen werden, also lautet die Gesamtanzahl in diesem Fall \\[ 8 \cdot (9 - 1)! = 322560\\]

## Projektteam bilden

>Aus einer Gruppe von \\(14\\) Studierenden soll für ein Projekt ein Team aus \\(3\\) Personen gebildet werden. Zwei der Studierenden weigern sich, in einem Team zusammenzuarbeiten. Wie viele mögliche Teams lassen sich bilden?

- *Hier weiß ich leider nicht weiter :(*

## Bücher auswählen

>Gegeben seien \\(39\\) unterschiedliche Bücher. Von diesen sind \\(3\\) auf Deutsch, \\(6\\) auf Englisch und \\(30\\) auf Spanisch. Wie viele Möglichkeiten gibt es, zwei Bücher in zwei verschiedenen Sprachen auszuwählen?

### Variante 1: *Eklusion*

Hier berechnet man die Gesamtanzahl an Bücherkombinationen, und zieht von dieser die Anzahl von Kombinationen von einsprachigen Büchern.

- Es gibt insgesamt \\(\binom{39}{2} = 741\\) Wege, zwei beliebige Bücher zu wählen;
- von den Deutschen \\(\binom{3}{2} = 3\\) Wege;
- von den Englischen \\(\binom{6}{2} = 15\\) Wege;
- und von den Spanischen \\(\binom{30}{2} = 435\\) Wege.

Somit erhält man \\[741 - 3 - 15 - 435 = 288.\\]

### Variante 2: *Inklusion*

Hier berechnet man wiederholt die Anzahl an Kombinationen ein Buch zu wählen, und multipliziert diese aus mit der Anzahl an Kombinationen ein Buch in einer anderen Sprache zu wählen.

- Deutsch & Englisch: \\(\binom{3}{1} \cdot \binom{6}{1} = 3 \cdot 6 = 18\\)
- Deutsch & Spanisch: \\(\binom{3}{1} \cdot \binom{30}{1} = 3 \cdot 30 = 90\\)
- Englisch & Spanisch: \\(\binom{6}{1} \cdot \binom{30}{1} = 6 \cdot 30 = 180\\)

Somit erhält man \\[18 + 90 + 180 = 288.\\]

## Inverse einer Permutation

>Gegeben sei folgende Permutation in Zwei-Zeilen-Notation:
> \\[
> \sigma = \begin{pmatrix}
> 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12\\\
> 11 & 8 & 3 & 7 & 2 & 4 & 6 & 12 & 1 & 9 & 10 & 5
> \end{pmatrix}
> \\]
> Bestimmen Sie die inverse Permutation \\(\sigma^{-1}\\) in Zykelschreibweise.

Um eine Permutation zu invertieren tauscht man die oberen und unteren Zeilen, und ordnet diese neu:
\\[
    \begin{aligned}
    \sigma^{-1} &= \begin{pmatrix}
    11 & 8 & 3 & 7 & 2 & 4 & 6 & 12 & 1 & 9 & 10 & 5\\\
    1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12
    \end{pmatrix}\\\
    &= \begin{pmatrix}
    1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12\\\
    9 & 5 & 3 & 6 & 12 & 7 & 4 & 2 & 10 & 11 & 1 & 8
    \end{pmatrix}\\\
    \end{aligned}
\\]

Nun Schreibt man die Permutation in Zykelschreibweise, in dem man wiederholt die Zahlen verfolgt, die sich aufeinander abbilden. Also für den "Index" \\(x\\) lautet die Schreibweise \\((x, \sigma(x), \sigma(\sigma(x)) \dots )\\). Man schließt die Klammer, sobald ein *Zykel* zuende ist.

Für die Lösung \\(\sigma^{-1}\\) lautet die Zykelschreibweise also \\[(1, 9, 10, 11) (2, 5, 12, 8) (3) (4, 6, 7)\\]

## Mengenpartitionen angeben

>Bestimmen Sie die Anzahl der \\(3\\)-Partitionen der Menge \\(\\{1,2,3,4,5,6,7\\}\\):

Hier nutzt man einfach die Stirling-Zahl zweiter Art:
\\[
    \begin{aligned}
    S_{7,3} &= S_{6,2} + 3 S_{6,3} &&= 31 + 3(90) = 301\\\
    S_{6,2} &= 2^{6-1}-1 = 32 - 1 = 31\\\
    S_{6,3} &= S_{5,2} + 3 S_{5,3} &&= 15 + 3(25) = 90\\\
    S_{5,2} &= 2^{5-1}-1 = 16 -1 = 15\\\
    S_{5,3} &= S_{4,2} + 3 S_{4,3} &&= 7 + 3(6) = 25\\\
    S_{4,2} &= 2^{4-1}-1 = 8 - 1 = 7\\\
    S_{4,3} &= \binom{4}{2} = \frac{4!}{2! \cdot (4 - 2)!}= \frac{12}{2} = 6
    \end{aligned}
\\]

>Geben Sie eine \\(3\\)-Partition der Menge \\(\\{1,2,3,4,5,6,7\\}\\) an:

Wir finden einen (trivialen) Weg, die Menge in drei Partitionen zu teilen, z.B. \\[\\{1,2,3\\} \cup \\{4,5,6\\} \cup \\{7\\}\\]

## Wörteranzahl bestimmen

>Bestimmen Sie die Anzahl der Wörter der Länge \\(6\\) über dem Alphabet \\(\\{a, b\\}\\), die genau  \\(2\\) mal den Buchstaben \\(a\\) enthalten.

Nachdem man die \\(a\\)'s gewält hat, bleibt nur noch die Möglichkeit \\(b\\) zu wählen. Die Lösung ist also ein relativ kurzer Rechenweg: \\[\binom{6}{2} \cdot 1^4 = \frac{30}{2} \cdot 1 = 15\\]