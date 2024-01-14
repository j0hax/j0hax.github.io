---
title: "Online-Trainer Nr. 4 zu Algebraischen Strukturen"
date: 2024-01-14T16:03:03+01:00
---

# Aussagen zur Teilbarkeit

>Welche der folgenden Aussagen sind wahr und welche sind falsch?

>Die Zahlen 2023 und 6137 sind teilerfremd.

Hier berechnet man einfach den ggT (größten gemeinsamen Teiler) der Zahlen mittels des Euklidischen Algorithmus: \\[
    \begin{aligned}
    6137 &= 2023 \cdot 3 + 68\\\
    2023 &= 68 \cdot 29 + 51\\\
    68 &= 51 \cdot 1 + 17\\\
    51 &= 17 \cdot 3 + 0
    \end{aligned}
\\]

**Falsch:** die Zahlen sind *nicht* Teilerfremd, da sie \\(17\\) als größten gemeinsamen Teiler haben.

>Jede ganze Zahl ungleich \\(0\\) hat nur endlich viele Teiler \\(\in \mathbb{Z}\\).

**Wahr:** Eine Teilermenge der Zahl \\(n\\) besteht aus mindestens \\(1\\) und \\(n\\), und es gibt nur eine finite Menge an ganzer Zahlen dazwischen.

>Wenn \\(a \mid b\\), dann auch \\(a \mid 2b^2+b+1\\).

**Falsch:** man erkennt schnell mit einem Gegenbeispiel, dass dies nicht sein kann. Setzt man \\(a=2\\) und \\(b=4\\), gilt \\(2 \mid 4\\). Aber \\(2 \cdot 4^2 + 4 + 1 = 37\\), eine Primzahl, welche natürlich nicht durch \\(2\\) teilbar ist.

>Es gilt \\(6\mathbb{Z} = 3\mathbb{Z}\\)

**Falsch.** *Wieso?*

# Division mit Rest

>Ordnen Sie den gegebenen Zahlen auf der linken Seite jeweils ihren Rest bei Division durch 7 zu.

>\\(13^{13}\\)

\\[
    \begin{aligned}
    13^{13} \bmod 7 &= 13^{2 \cdot 6 + 1} \bmod 7\\\
    &= (13^2)^6 \cdot 13^1 \bmod 7\\\
    &= (169 \bmod 7)^6 \cdot 13 \bmod 7\\\
    &= 1^6 \cdot 13 \bmod 7\\\
    &\equiv 6 \mod 7
    \end{aligned}
\\]