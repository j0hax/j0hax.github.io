---
title: "Online-Trainer Nr. 2 zu Rekursionsgleichungen"
date: 2024-01-07T13:02:13+01:00
---

# Lösen linearer Rekursionsgleichungen

>Wir betrachten die Rekursionsgleichung \\[x_0 = 2, x_n = 3x_{n-1}-4.\\] Dies ist eine lineare Rekursionsgleichung der Ordnung \\(1\\) und es gilt
>
>\\(x_1 = {2}\\), \\(x_2 = {2}\\), \\(x_3 = {2}\\)
>
>Bestimmen Sie nun eine geschlossene Formel für die Zahlen \\(x_n\\).
>
>\\(x_n = {0} \cdot 3^n + {2}\\)

Die Gleichung ist linear, da alle Summanden feste Zahlen sind. Die Ordnung ist 1, da immer nur "ein Schritt zurück" gerechnet wird. Wir rechnen kurz die ersten Werte:
\\[
    \begin{aligned}
    x_1 &= 3(2)-4 = 2\\\
    x_2 &= 3(2)-4 = 2\\\
    x_3 &= 3(2)-4 = 2\\\
    \vdots&\\\
    x_n &= 2
    \end{aligned}
\\]

Es wurde durch das einfüllen der Felder klar, dass es sich bei dieser spezifischen Rekursionsgleichung immer der gleiche Wert bildet. Somit ist der Koeffizient der geschlossenen Formel Null und es muss bloß die Zwei addiert werden.

# Lösen linearer Rekursionsgleichungen

>Wir betrachten die Rekursionsgleichung \\[x_0 = 2, x_1 = -4, x_n = x_{n-1}+6x_{n-2}.\\] Dies ist eine homogene Rekursionsgleichung der Ordnung \\({2}\\), für die \\[x_2 = {8}\\] und \\[x_3 = {-16}\\] gilt. Für die Bestimmung der geschlossenen Form werden die Nullstellen des *charakteristischen Polynoms* \\(x^2-x-6\\) benötigt; diese sind für \\(\alpha > \beta\\) \\[\alpha = {3}\\] und \\[\beta = {-2}.\\] Nun kann die geschlossene Form \\(x_n = A \alpha^n - B \beta^n\\) ermittelt werden. In diesem Fall gilt \\[A = {0}\\] und \\[B = {-2}\\] und damit \\[x_n = 2 \cdot (-2)^n\\]

# Finden von Rekursionsgleichungen

>Seien \\(a\\) und \\(b \in \mathbb{N}\\). Wir haben Steine der Länge \\(1\\) in \\(a\\) verschiedenen Farben und Steine der Länge \\(2\\) in \\(b\\) verschiedenen Farben. Wir gehen davon aus, dass von allen Typen von Steinen beliebig viele zur Verfügung stehen.
>
>![steine](./steine.png) 
>
>Mit diesen Steinen wollen wir nun eine waagerechte Reihe der Länge \\(n\\) legen, wobei \\(n \in \mathbb{N}\\). Mit \\(x_n\\) bezeichnen wir die Anzahl der Möglichkeiten, diese Reihe zu legen.
>
>Für den Fall \\(n=1\\) können wir nur einen Stein der Länge \\(1\\) legen. Da wir aber \\(a\\) verschiedene Farben zur Auswahl haben, ergeben sich auch a verschiedene Möglichkeiten. Somit ist \\(x_1=a.\\)
>
>Für den Fall \\(n=2\\) können wir entweder zwei Steine der Länge \\(1\\) oder einen Stein der Länge \\(2\\) legen. Bedenken wir auch hier wieder die \\(a\\) bzw. \\(b\\) verschiedenen Farbmöglichkeiten, ergibt sich \\(x_2=a^2+b\\).

> 1. Seien \\(a=8\\) und \\(b=5\\). Geben Sie die Anzahl aller Möglichkeiten für \\(n=3\\) an.

Wir zählen folgende Anordnungsmöglichkeiten für eine Länge von 3:
- `|a| b |` ergibt \\(a \cdot b = 40\\) Möglichkeiten,
- `| b |a|` ergibt \\(b \cdot a = 40\\) Möglichkeiten,
- `|a|a|a|` ergibt \\(a^3 = 8 \cdot 8 \cdot 8 = 512\\) Möglichkeiten.

Zusammen gibt es also \\[40 + 40 + 512 = 592\\] Möglichkeiten Steine mit Länge 3 anzuordnen.

>2. Bestimmen Sie eine Formel für \\(x_3\\) in Abhängigkeit von \\(a\\) und \\(b\\).

Wir verallgemeinern einfach den Rechenweg aus dem ersten Aufgabenteil: \\[x_3 = 2 \cdot (a \cdot b) + a^3 \\]

>3. Finden Sie eine lineare Rekursionsgleichung \\(2.\\) Ordnung für die Zahlen \\(x_n\\) in Abhängigkeit von \\(a\\) und \\(b\\).

Die Rekursionsgleichung lautet hier einfach \\[x_n = a x_{n-1} + b x_{n-2}\\] für alle \\(n \geq 3\\), da es für einen Stein der Länge \\(1\\) \\(a\\) Möglichkeiten gibt *oder* für einen Stein der Länge \\(2\\) dann \\(b\\) Möglichkeiten gibt.

# Rekursionsgleichung finden

>Für \\(n \in \mathbb{N}\\) sei \\(x_n\\) die Anzahl der Folgen der Länge \\(n\\) mit Einträgen aus der Menge \\(\\\{0,1, \dots ,k−1\\\}\\), die eine gerade Anzahl von Nullen enthalten.
>
>Zum Beispiel ist \\(x_1 = k-1\\) und \\(x_2= (k-1)^2 + 1\\).
>
>Wir suchen eine nicht-lineare Rekursionsgleichung 1. Ordnung für die Zahlen \\(x_n\\) und gehen wie folgt vor.
>
>Der Wert für \\(x_1\\) wurde bereits bestimmt, daher setzen wir \\(n \geq 2\\) voraus. Wenn wir für eine beliebige Folge der Länge \\(n\\) den letzten Eintrag betrachten, erhalten wir zwei Fälle.
>
> 1. Fall: Wenn die Folge auf \\(i \ne 0\\) endet, so steht auf den ersten \\(n−1\\) Positionen eine Folge der Länge \\(n−1\\) mit einer geraden Anzahl von Nullen. Also gibt es in diesem Fall \\((k-1) \cdot x_{n−1}\\) viele Folgen.
> 2. Fall: Wenn die Folge auf \\(0\\) endet, so steht auf den ersten \\(n−1\\) Positionen eine Folge mit einer ungeraden Anzahl von Nullen. Hiervon gibt es \\(k^{n-1} - x_{n-1}\\) viele Folgen.
>
> Insgesamt erhalten wir aus den beiden Fällen: \\(x_n = (k-2) \cdot x_{n-1} + k^{n-1}\\) für alle \\(n \geq 2\\)

# Rechnen mit Potenzreihen

>Bestimmen Sie für die formale Potenzreihe \\[s = {1-2x-2x^2+x^3-x^4-3x^5-2x^6-x^7\cdots}\\]  die Anfangsterme ihrer Ableitung \\(s^\prime\\), ihres Quadrats \\(s^2\\) und ihrer Inversen \\(s^{-1}\\).

- Beim Ableiten wird einfach für jeden Summand die Potenzregel angewandt: \\[s^\prime = -2 + 4x + 3x^2 -4x^3 -15x^4 + \dots\\]
- Beim Quadrieren wird \\((1-2x-2x^2+x^3-x^4-3x^5-2x^6-x^7) \cdot (1-2x-2x^2+x^3-x^4-3x^5-2x^6-x^7)\\) distributiv berechnet: \\[s^2 = 1 -4x+0x^2 + 10x^3 -2x^4 \dots\\]

# Vervollständigen eines rekursiv definierten Dreiecks

>Für \\(n,k \in \mathbb{N}\_0\\) und \\(n \geq k\\) werden die Zahlen \\(a\_{n,k}\\) rekursiv definiert durch
\\[
    a_{n,k} =
    \begin{cases}
        1 & \text{falls \\(k = n\\)\}\\\
        0 & \text{falls \\(k = 0 < n\\)}\\\
        a_{n-1,k-1} + k a_{n-1, k} & \text{sonst}
    \end{cases}
\\]

Die Zellen des Dreieicks sind relativ leicht zu berechnen:
- Diagonal herrscht \\(k=n\\), also werden diese mit \\(1\\)en besetzt.
- \\(a_{n, 0} = 0\\) (rest der ersten Spalte), da \\(k=0 < n\\)
- Für die Spalte \\(a_{n,1}\\) gilt \\(0 + 1 \cdot 1\\), also immer \\(1\\)
- Bei den restlichen Einträgen der Tabelle addiert man den Wert links oben zu dem Wert direkt über der Zelle mal die Spalte.

|  | \\(k=0\\) | \\(k=1\\) | \\(k=2\\)| \\(k=3\\) | \\(k=4\\) |
|---|---|---|---|---|---|
| \\(n=0\\) | \\(1\\) |  |  |  |  |
| \\(n=1\\) | \\(0\\) | \\(1\\) |  |  |  |
| \\(n=2\\) | \\(0\\) | \\(1\\) | \\(1\\) |  |  |
| \\(n=3\\) | \\(0\\) | \\(1\\) | \\(3\\) | \\(1\\) |  |
| \\(n=4\\) | \\(0\\) | \\(1\\) | \\(7\\) | \\(6\\) | \\(1\\) |