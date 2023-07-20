---
title: "Probeklausur"
date: 2023-07-20T12:41:36+02:00
categories:
- university
katex: true
---

**Note:** This page is currently a work in progress. Solutions are updated as I have time.

# Aufgabe 1
> Berechnen Sie die folgenden Grenzwerte:

## (a)
>\\[\lim_{x \to \frac{\pi}{2}} \frac{\sin{x}-1}{\cos{x}}\\]

Naiives einsetzen liefert \\(\frac{0}{0},\\) also muss die [Regel von Bernoulli-de l'Hôpital](https://de.wikipedia.org/wiki/Regel_von_de_L%E2%80%99Hospital) angewandt werden:

\begin{align}
\lim_{x \to a} \frac{f(x)}{g(x)} &= \lim_{x \to a} \frac{f^\prime(x)}{g^\prime(x)}\\\
&f^{\prime}(x) = \cos{x}\\\
&g^{\prime}(x) = -\sin{x}
\end{align}

Somit erhält man für den Grenzwert \\(\frac{\pi}{2}\\)
\begin{equation}
\lim_{x \to \frac{\pi}{2}} \frac{\cos{x}}{-\sin{x}} = \frac{0}{-1},
\end{equation}
und es gilt auch
\begin{equation}
\lim_{x \to \frac{\pi}{2}} \frac{\sin{x}-1}{\cos{x}} = 0.
\end{equation}

# Aufgabe 2

> Lösen Sie die folgende Anfangswertaufgabe: \\[u^{\prime} = u^2 \cos{t},{\quad}u(0) = 1\\]

*Hinweis:* \\(u^{\prime} = \frac{du}{dt}\\)! Wir rechnen:
\begin{align}
\frac{du}{dt} &= u^2 \cos{t} && \times dt\\\
du &= u^2 \cos{t}~dt && \div u^2\\\
\frac{du}{u^2} &= \cos{t}~dt\\\
\frac{1}{u^2}~du &= \cos{t}~dt\\\
\int \frac{1}{u^2}~du &= \int \cos{t}~dt\\\
-\frac{1}{u} + c_1 &= \sin{t} + c_2\\\
\frac{1}{u} &= c - \sin{t} && (\square)^{-1}\\\
u &= \frac{1}{c - \sin{t}}
\end{align}
Nun haben wir unsere Stammfunktion \\(u\\) bestimmt. Jetzt muss lediglich die Konstante \\(c\\) berechnet werden:
\begin{align}
u(0) &= \frac{1}{c - \sin{0}} = \frac{1}{c - 0} = 1\\\
&\iff c = 1
\end{align}
Wir wissen also, dass die endültige Lösung
\begin{equation}u(x) = \frac{1}{1-\sin{x}}
\end{equation}
lautet.

# Aufgabe 3

> Berechnen Sie das Integral \\\[\int_0^1 \frac{x}{1+x^4}~dx\\\]

Hier wird eine gewisse >>Kreativität<< gefordert. Durch das Geschickte Wählen von \\(u = x^2\\) gilt \\(du = 2x~dx\\).
\begin{align}
\int \frac{x}{1+x^4}~dx &= \frac{1}{2} \int \frac{2x}{1+\left(x^2\right)^2}~dx\\\
&= \frac{1}{2} \int \frac{1}{1+u^2}~du\\\
&= \frac{1}{2} \arctan{x^2}
\end{align}

Nun werden die Grenzwerte eingesetzt, um die Grenzen des bestimmten Integrals zu berechnen.
\begin{align}
\left[ \frac{1}{2} \arctan{x^2} \right]_0^1 &= \frac{1}{2} \arctan{1^2} - \frac{1}{2} \arctan{0^2}\\\
&= \frac{1}{2} \cdot \frac{\pi}{4} - \frac{1}{2} \cdot 0\\\
&= \frac{\pi}{8}
\end{align}

# Aufgabe 4

> Berechnen Sie das Gebietsintegral \\[\int_G xy^4~d(x,y),\\] wobei \\(G = \\{(x,y) \in \mathbb{R}^2 : 1 \leq x^2 + y^2 \leq 4, x > 0\\}\\)

Für diese Aufgabe braucht man Polarkoordinaten. Wir rechnen um:
- Der Radius wird bestimmt durch \\(r = \sqrt{4} = 2\\)
- Die Koordinaten werden transformiert als \\(x = r \cos{\theta}\\) und \\(y = r \sin{\theta}\\)

Das Integral wird umgeschrieben als
\begin{equation}
\int_0^2 \int_{- \frac{\pi}{2}}^{\frac{\pi}{2}} r \cdot (r \cos{\theta}) (r \sin{\theta})^4~d \theta~d r
\end{equation}

Nun bestimmen wir schrittweise das innere Integral, wobei durch die U-Substitution von \\(u = \sin{\theta}\\) entsteht: \\(du = \cos{\theta}~d \theta\\)
\begin{align}
&\int r \cdot (r \cos{\theta}) (r \sin{\theta})^4~d \theta\\\
&= \int r \cdot r \cos{\theta} \cdot r^4 \cdot \sin^4{\theta}~d \theta\\\
&= r^6 \int \cos{\theta}~\sin^4{\theta}~d \theta\\\
&= r^6 \int u^4~du\\\
&= r^6 \frac{u^5}{5}\\\
&= \frac{r^6 \sin^5{\theta}}{5}
\end{align}
Nun werden die Grenzen bestimmt:
\begin{align}
\left[\frac{r^6 \sin^5{\theta}}{5}\right]_{\theta = - \frac{\pi}{2}}^{\theta = \frac{\pi}{2}} &= \frac{r^6 1^5}{5} - \frac{r^6 (-1)^5}{5}\\\
&= \frac{2r^6}{5}
\end{align}
Jetzt muss der äußere >>Rest<< der Integrale bestimmt werden, also \\(\int_0^2 \frac{2r^6}{5}\\):
\begin{align}
\int \frac{2r^6}{5} &= \frac{2}{5} \int r^6\\\
&= \frac{2}{5} \left(\frac{r^7}{7}\right)\\\
&= \frac{2r^7}{35}
\end{align}
Nun berechnen wir zum letzten mal die grenzen, um die Lösung der Aufgabenstellung zu erhalten:
\begin{align}
\left[\frac{2r^7}{35}\right]\_{r=0}^{r=2} &= \frac{2\cdot 2^7}{35} - \frac{2 \cdot 0^7}{35}\\\
&= \frac{256}{35} \approx 7.314
\end{align}

# Aufgabe 5

# Aufgabe 6

# Aufgabe 7

> Zeigen Sie die Konvergenz der Reihe \\[\sum_{k=0}^\infty \frac{1}{(1+2i)^k}\\] und bestimmen Sie den Grenzwert. Geben Sie den Grenzwert dabei in kartesischer Form \\((z = x + iy; x, y \in \mathbb{R})\\) an.

Wir nutzen hier das [Quotientenkriterium](https://de.wikipedia.org/wiki/Quotientenkriterium):

\begin{align}
\left| \frac{\frac{1}{(1+2i)^{k+1}}}{\frac{1}{(1+2i)^k}} \right| &= \frac{1 \cdot (1+2i)^k}{1 \cdot (1+2i)^{k+1}}\\\
&= \frac{\cancel{(1+2i)^k}}{\cancel{(1+2i)^k} \cdot (1+2i)}\\\
&= \frac{1}{(1+2i)} < 1 \forall i \in \mathbb{C} : |i| > 0\\\
\end{align}

Wir wissen also, dass die Reihe konvergiert.

# Aufgabe 8

> Es sei \\((x_k)_{k \in \mathbb{N}}\\) eine Folge positiver reeller Zahlen mit \\(\lim\_{k \to \infty} k^2 x_k = 3\\). Untersuchen Sie die Reihe \\[\sum\_{k=1}^\infty x_k\\] auf Konvergenz und beweisen Sie Ihre Antwort.

# Aufgabe 11

> Zeigen Sie: Für alle \\(x > 0\\) gilt \\(\arctan{x} \leq x\\)

\\[\arctan{x} \leq x \iff \arctan{x} - x \leq 0.\\] Wir schreiben also \\(f(x) := \arctan{x} - x.\\) Die Ableitung lautet \\[f^\prime (x) = \frac{1}{1+x^2} - 1.\\]

Wir prüfen das Monotonieverhalten:
\begin{align}
f^\prime (1) = \frac{1}{1+1^2} - 1 = \frac{1}{2} - 1 &= -\frac{1}{2}\\\
f^\prime (2) = \frac{1}{1+2^2} - 1 = \frac{1}{5} - 1 &= -\frac{4}{5}\\\
f^\prime (3) = \frac{1}{1+3^2} - 1 = \frac{1}{10} - 1 &= -\frac{9}{10}\\\
& \vdots
\end{align}

Es wird eindeutig, dass \\(f^\prime (x) < 0\\) für alle \\(x > 0\\), die Funktion also streng monoton fallend ist, und gelten _muss_ \\(\forall x \in (0, \infty) : \arctan{x} \leq x\\).

# Aufgabe 13

> Sei \\(f : \mathbb{R} \mapsto \mathbb{R}\\) gegeben durch \\[f(x) = x^3 -3x^2 +3x +2.\\] Zeigen Sie, dass \\(f\\) streng monoton wachsend ist und außerdem als Funktion \\(f : \mathbb{R} \mapsto \mathbb{R}\\) bijektiv ist. Berechnen Sie \\((f^{−1})^\prime(2)\\). In welchen Punkten ist die Umkehrfunktion \\(f^{−1}\\) von \\(f\\) differenzierbar?

Zuerst sollen wir zeigen, dass \\(f\\) streng monoton wachsend ist, also dass \\(\forall x \in \mathbb{R} : f^\prime(x) > 0.\\)
\begin{align}
\frac{df}{dx} &= 3x^2 -6x + 3\\\
&= 3(x^2-2x+1)\\\
&= 3(x-1)^2
\end{align}
Da für \\(\mathbb{R}\\) ein Quadrat \\((\dots)^2\\) immer nur positiv sein kann, muss die Funktion auch monoton wachsend sein. Streng monoton wachsende Funktionen sind per definition immer bijektiv.

Nun wollen wir \\((f^{−1})^\prime(2)\\) berechnen. Nach dem [Umkehrsatz](https://de.wikipedia.org/wiki/Satz_von_der_impliziten_Funktion#Satz_von_der_Umkehrabbildung) ([Inverse Function Theorem](https://en.wikipedia.org/wiki/Inverse_function_theorem)) muss gelten \\[(f^{-1})^\prime (b) = \frac{1}{f^{\prime}(a)} = \frac{1}{f^\prime(f^{-1}(b))}.\\]

Der Punkt \\((0,2)\\) liegt auf der Kurve von \\(f\\), da \\(f(0) = 2\\). Obwohl es zu kompliziert ist, händisch \\(f^{-1}\\) zu berechnen, ist durch die bijektivität impliziert dass \\(f^{-1}(2) = 0\\), und somit gilt
\begin{align}
(f^{−1})^\prime(2) &= \frac{1}{f^\prime(0)} = \frac{1}{3(0 - 1)^2}\\\
&= \frac{1}{3}
\end{align}