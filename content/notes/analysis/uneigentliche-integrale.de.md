---
title: "Uneigentliche Integrale"
date: 2024-02-06T14:14:43+01:00
---

Bei uneigentlichen Integralen werden *limes* benutzt, um Grenzwerte von Asymptoten oder Singularitäten zu berechnen. Zum Verständnis kann ich nur [MatheMatricks Video dazu](https://youtu.be/Ce9Din83uFY) empfehlen.

# Beispiel
\\[\int_{-\infty}^{\infty} \frac{1}{1+x^2} \operatorname{d}x\\]

Der Bruch sollte bekannt sein: \\(\int \frac{1}{1+x^2} \operatorname{d}x = \arctan x\\). Da der Anfangs- und Endwert unbeschränkt sind, ist es Sinnvoll das Integral mit zwei Limes in der >>Mitte<< (also \\(x=0\\)) aufzusplitten:
\\[
= \lim_{a \to -\infty} \int_a^0 \frac{1}{1+x^2} \operatorname{d}x + \lim_{b \to \infty} \int_0^b \frac{1}{1+x^2} \operatorname{d}x.
\\]
Nun kann man seperat die uneigentlichen Integrale berechnen. Wir wissen dass \\(\arctan(-\infty) = -\frac{\pi}{2}\\), weil \\(\lim_{\theta \to \left( -\frac{\pi}{2}\right)} \tan  \theta = -\infty\\) bzw. \\(\frac{\sin \left( -\frac{\pi}{2}\right)}{\cos \left( -\frac{\pi}{2}\right)} = \frac{-1}{0}.\\) Ähnliches gilt (natürlich mit anderem Vorzeichen) für \\(\arctan \infty.\\)

\\[
\begin{aligned}
\lim_{a \to -\infty} \int_a^0 \frac{1}{1+x^2} \operatorname{d}x &= \lim_{a \to -\infty} \left[ \arctan x \right]\_a^0\\\
&= \arctan 0 - \arctan (-\infty)\\\
&= 0 - \left(-\frac{\pi}{2}\right)\\\
&= \frac{\pi}{2}\\\
\lim_{b \to \infty} \int_0^b \frac{1}{1+x^2} \operatorname{d}x &= \lim_{b \to \infty} \left[ \arctan x \right]_0^b\\\
&= \arctan \infty - \arctan 0\\\
&= \frac{\pi}{2} - 0\\\
&= \frac{\pi}{2}\\\
\end{aligned}
\\]

Addiert man nun die Hälften der uneigentlichen Integrale, erhält man als endgültige Lösung \\[
    \int_{-\infty}^{\infty} \frac{1}{1+x^2} \operatorname{d}x = \pi.
\\]