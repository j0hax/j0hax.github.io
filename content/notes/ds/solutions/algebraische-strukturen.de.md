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

>\\(3^{2023}\\)

???

>\\(13^{13}\\)

Wir nutzen die Potenzregeln 

\\[
    \begin{aligned}
    13^{13} \bmod 7 &= 13^{2 \cdot 6 + 1} \bmod 7\\\
    &= (13^2)^6 \cdot 13^1 \bmod 7\\\
    &= (169 \bmod 7)^6 \cdot 13 \bmod 7\\\
    &= 1^6 \cdot 13 \bmod 7\\\
    &\equiv 6 \mod 7
    \end{aligned}
\\]

>\\(5124\\)

Schriftliche Division ergibt \\(732\\) mit dem Rest \\(0\\).

>\\((2^{202}+4^{202})^2 \cdot 11^3\\)

???

# Erweiterter Euklidischer Algorithmus

>Bestimmen Sie den größten gemeinsamen Teiler \\(d=\operatorname{ggT}(124,88)\\) sowie eine Darstellung \\(d=u \cdot 124+v \cdot 88\\) mithilfe des erweiterten euklidischen Algorithmus, indem Sie die folgende Tabelle *vollständig* ausfüllen.

>Zur Erinnerung: Die Einträge der \\((i+1)\\)-ten Zeile erhalten Sie, indem Sie zunächst mit Rest \\(r_{i−1}\\) durch \\(r_i\\) dividieren, so dass \\(r_{i−1}=q \cdot r_i+r\\) für \\(q,r \in \mathbb{Z}\\) mit \\(0 \leq r < r_i\\) gilt. Setzen Sie dann \\[q_{i+1} = q, \qquad u_{i+1} = u_{i-1} - q \cdot u_i\\] \\[r_{i+1} = r, \qquad v_{i+1} = v_{i-1} - q \cdot v_i\\]

Zuerst führe ich einen "basic" euklidschen Algorithmus aus.
\\[
    \begin{aligned}
    124 &= 1 \cdot 88 + 36\\\
    88 &= 2 \cdot 36 + 16\\\
    36 &= 2 \cdot 16 + 4\\\
    16 &= 4 \cdot 4 + 0
    \end{aligned}
\\]
Nun werden die Werte in die Tabelle eingetragen und \\(u_i\\) bzw. \\(v_i\\) berechnet.
| \\(i\\) | \\(r_i\\) | \\(q_i\\) | \\(u_i\\) | \\(v_i\\) |
|:---:|:---:|:---:|:---:|:---:|
| 0 | 124 | - | 1 | 0 |
| 1 | 88 | - | 0 | 1 |
| 2 | 36 | 1 | 1 | -1 |
| 3 | 16 | 2 | -2 | 3 |
| 4 | 4 | 2 | 5 | -7 |
| 5 | 0 | 4 | -22 | 31 |

>Es gilt also \\[\operatorname{ggT}(124,88) = 4 = 5 \cdot 124 + (-7) \cdot 88.\\]

>Kürzen sie den Bruch \\(\frac{124}{88}\\). Finden Sie Zähler und Nenner des gekürzten Bruchs im euklidischen Algorithmus wieder?

Wir "verkleinern" die Zahlen im Bruch bis wir eine Primzahl im Nenner oder Zähler erreichen: \\[\frac{124}{88} = \frac{62}{44} = \frac{31}{22}.\\] Tatsächlich findet man \\(-22\\) und \\(31\\) in der letzten Zeile der Tabelle.

# Arithmetik in \\(\mathbb{Z}_n\\)

>Wir betrachten die folgenden Restklassen in \\(\mathbb{Z}_{37}\\): \\[a=\overline{8},\quad b=\overline{23},\quad c=\overline{18}.\\]

>Berechnen Sie den Ausdruck \\(a \cdot b + c.\\)

Wir rechenn zuerst \\(8 \cdot 23 + 18 = 202.\\) Mithilfe der Schriftlichen Division weiß man, dass \\(37\\) in \\(202\\) fünf mal reinpasst. Man rechnet also \\(5 \cdot 202 = 185\\) und ermittelt den Rest: \\(202 - 185 = 17.\\) Das Ergebnis lautet also \\[8 \cdot 23 + 18 = 202 \equiv 17 \mod 37.\\]

>Berechnen Sie das Negative von \\(c\\).

Da \\(18\\) kleiner als \\(37\\) ist, gibt es keinen Koeffizienten, man rechnet bloß \\(|-18 - 37| = 19\\)

\\[-18 \equiv 19 \mod 37\\]

>Berechnen Sie die Potenz \\(a^6\\) von \\(a\\).

\\[
\begin{aligned}
8^6 \mod 37 &= \\left(8^2\\right)^3 \mod 37\\\
&= 64^3 \mod 37\\\
&\equiv \\left( 64 \bmod 37 \\right)^3 \mod 37\\\
&= 27^3 \mod 37\\\
&= 27^2 \cdot 27^1 \mod 37\\\
&\equiv (729 \bmod 37) \cdot 27 \mod 37\\\
&= 26 \cdot 27 \mod 37\\\
&= 702 \bmod 37\\\
&= 36
\end{aligned}
\\]

Formell schreibt man \\[8^6 \equiv 36 \mod 37.\\]

# Kongruenzen und Restklassen

>Geben Sie jeweils die eindeutige Zahl aus der Menge \\(\\{0,1,\dots,18\\}\\) an, so dass die folgenden Kongruenzen erfüllt sind.

>\\(-75 \equiv 1 \mod 19\\)

Begründung: \\(-4 \cdot 19 + \textcolor{red}{1} = -75\\).

>\\(-48 \equiv 9 \mod 19\\)

Begründung: \\(-3 \cdot 19 + \textcolor{red}{9} = -48\\).

>\\(85 \equiv 9 \mod 19\\)

Begründung: \\(4 \cdot 19 + \textcolor{red}{9} = 85\\).

>\\(-67 \equiv 9 \mod 19\\)

Begründung: \\(-4 \cdot 19 + \textcolor{red}{9} = -67\\).

# Kongruenzen und Restklassen

>Geben Sie jeweils die eindeutige Zahl aus der Menge \\(\\{−9,\dots,−1,0,1,\dots,9\\}\\) an, so dass die folgenden Kongruenzen erfüllt sind.

>\\(96 \equiv 1 \mod 19\\)

Begründung: \\(5 \cdot 19 + \textcolor{red}{1} = 96\\).

>\\(-59 \equiv -2 \mod 19\\)

Begründung: \\(-3 \cdot 19 + \textcolor{red}{-2} = -59\\).

>\\(-34 \equiv 4 \mod 19\\)

Begründung: \\(-2 \cdot 19 + \textcolor{red}{4} = -34\\).

>\\(-52 \equiv 5 \mod 19\\)

Begründung: \\(-3 \cdot 19 + \textcolor{red}{5} = -52\\).

# Invertierbare Restklassen

>Sind die folgenden Restklassen in \\(\mathbb{Z}_{51}\\) invertierbar (bzgl. Multiplikation)?

>\\(\overline{17}\\) ist **nicht invertierbar.**

Begründung: \\(\operatorname{ggT}(51,17) \ne 1\\)

>\\(\overline{11}\\) ist **invertierbar.**

Begründung: \\(\operatorname{ggT}(51,11) = 1\\)

>\\(\overline{81}\\) ist **nicht invertierbar.**

Begründung: \\(\operatorname{ggT}(51,81) \ne 1\\)

>\\(\overline{80}\\) ist **invertierbar.**

Begründung: \\(\operatorname{ggT}(51,80) = 1\\)

>Bestimmen Sie die inverse Restklasse von \\(\overline{23}\\) in \\(\mathbb{Z}_{51}\\)

Zuerst führen wir den euklidischen Algorithmus aus um \\(\operatorname{ggT}(51,23)\\) zu berechnen: \\[
    \begin{aligned}
    51 &= 2 \cdot 23 + 5\\\
    23 &= 4 \cdot 5 + 3\\\
    5 &= 1 \cdot 3 + 2\\\
    3 &= 1 \cdot 2 + 1 & \implies \operatorname{ggT} = 1\\\
    2 &= 1 \cdot 2 + 0.
    \end{aligned}
\\]

Nun müssen wir die passenden Bézout-Koeffizienten \\(a\\) und \\(b\\) finden, um die Gleichung \\(1 = a \cdot 51 + b \cdot 23\\) zu erfüllen.

Diese Lauten \\[\operatorname{ggT}(51,23) = 1 = -9 \cdot 51 + 20 \cdot 23.\\] Die inverse Restklasse von \\(\overline{23}\\) in \\(\mathbb{Z}_{51}\\) lautet also \\[\\left(\overline{23}\\right)^{-1} = \overline{20}\\]

# Eindeutig lösbare lineare Gleichung in \\(\mathbb{Z}_n\\)

???

# Verschlüsseln und Entschlüsseln

>Wir benutzen den Rechenbereich \\(Z_{27}\\), um die (Groß-)Buchstaben des Alphabets und das Leerzeichen darzustellen: \\[\\_ \leftrightarrow \overline{0}, \quad \texttt{A} \leftrightarrow \overline{1}, \quad \texttt{B} \leftrightarrow \overline{2}, \quad \ldots, \quad     \texttt{Z} \leftrightarrow \overline{26}.\\] Eine einfache Form der Verschlüsselung besteht darin, das zur Restklasse \\(\overline{x}\\) assoziierte Symbol mit demjenigen Symbol zu ersetzen, das zur Restklasse \\(\overline{ax+b}\\) gehört.
>
>Als Verschlüsselungsparameter wählen wir \\(a=2\\) und \\(b=15\\). Verschlüsseln Sie das Symbol "I" und tragen Sie die zum verschlüsselten Symbol gehörige Restklasse ein.

Wir erstellen zuert eine Symboltabelle, um schnell Buchstaben Zahlen zuzuordnen:

| Buchstabe | Zahl |
|:---:|:---:|
| _ | 0 |
| A | 1 |
| B | 2 |
| C | 3 |
| D | 4 |
| E | 5 |
| F | 6 |
| G | 7 |
| H | 8 |
| I | 9 |
| J | 10 |
| K | 11 |
| L | 12 |
| M | 13 |
| N | 14 |
| O | 15 |
| P | 16 |
| Q | 17 |
| R | 18 |
| S | 19 |
| T | 20 |
| U | 21 |
| V | 22 |
| W | 23 |
| X | 24 |
| Y | 25 |
| Z | 26 |

Nun rechnen wir los mit *I* als den Wert 9: \\[\overline{2 \cdot 9 + 15} = \overline{32} = \overline{6}.\\]

Unser verschlüsseltes Zeichen lautet also *F,* die dis am Platz 6 in der Tabelle ist.

>Die Verschlüsselung kann durch eine Funktion der Form \\(\overline{x} \mapsto \overline{cx + d}\\) rückgängig gemacht werden, wenn die Koeffizienten \\(c\\) und \\(d\\) passend gewählt werden. Tragen Sie die Entschlüsselungsparameter ein.

Der Formel entsprechend ist \\(c = a^{-1}\\). Um \\(c\\) zu finden, rechnen wir mit dem erweiterten euklidischen Algorithmus: \\[\operatorname{ggT}(27, 2) = 1 = 1 \cdot 27 + -13 \cdot 2.\\] Der rechte Bézout-Koeffizient ist hierbei relevant, um die Multiplikation "rückgängig" zu machen: \\[(\overline{2})^{-1} = \overline{-13} = \overline{14}.\\]

Weiterhin ist \\(d = -b \cdot c = b \cdot a^{-1}\\) zu finden: \\[\overline{-b \cdot c} = \overline{-210} = \overline{6}\\]

>Entschlüsseln Sie das Symbol "L" und tragen Sie die zum entschlüsselten Symbol gehörige Restklasse ein.

Unserer Tabelle nach hat *L* den Wert 12. Wir rechen also unseren mit unseren jetzt bekannten Zahlen \\[\overline{14 \cdot 12 + 6} = \overline{174} = \overline{12}\\] und erkennen, dass *L* sich in diesem Fall als *L* dechiffrieren lässt.

# Ziffer einer ISBN bestimmen

>Die Internationale Standardbuchnummer (ISBN) ist eine Nummer zur eindeutigen Identifizierung von Büchern. Heutzutage hat die ISBN 13 Stellen (ISBN-13), früher gab es eine 10-stellige Nummer (ISBN-10). Zum Beispiel hat das Buch Diskrete Strukturen 1 von A. Steger die ISBN \\(978−3−540−46660−4\\). Die Stellen der ISBN sind in fünf Gruppen unterteilt, die meist durch Bindestriche getrennt werden (die aber ansonsten keine Bedeutung haben). Die erste Gruppe ist ein Präfix. Die zweite Gruppe ist eine Ländernummer, zum Beispiel steht die \\(3\\) für den deutschen Sprachraum. Die dritte Gruppe ist eine Verlagsnummer, die von einer zentralen Agentur vergeben wird. Die vierte Gruppe ist eine vom Verlag vergebene Titelnummer. Mathematisch für uns interessant ist die letzte Gruppe, die Prüfziffer.
>
>Seien \\(z_1 z_2 \dots z_{12}\\) die ersten zwölf Ziffern der ISBN. Die Prüfziffer \\(z_{13} \in \\{0,1,2,3,4,5,6,7,8,9\\}\\) ist dann bestimmt durch die Kongruenz \\[(z_1+z_3+z_5+z_7+z_9+z_{11}+z_{13})+3 \cdot (z_2+z_4+z_6+z_8+z_{10}+z_{12}) \equiv 0 \mod 10.\\]

> Bestimmen Sie die Prüfziffer der ISBN \\({978-3-453-60393-❓}\\)

Wir rechen: \\[9+8+4+3+9+x_{13} + 3 \cdot (7+3+5+6+3+3) = 114 + x_{13}.\\] Da wir mit \\(0 \bmod 10\\) rechnen, muss die Zahl ohne Rest durch 10 teilbar sein. 120 ist die nächstgröße Zahl, die durch 10 teilbar ist, also \\(x_{13} = 6.\\)