---
title: "Graphentheorie"
date: 2023-08-02T20:46:04+02:00
katex: true
---

> **Satz 3.5.** Sei \\(G = (E, K)\\) ein (Multi-)Graph. Dann gilt:
> 1. \\(\sum_{v \in E} \deg{v} = 2 |K|\\)
> 2. Die Anzahl der Ecken mit ungeradem Grad ist gerade.

## Zusammenhängende Graphen
> **Definition 3.10.** Ein (Multi-)Graph \\(G = (E, K)\\) heißt *zusammenhängend,* wenn je zwei Ecken \\(u, v \in E\\) durch einen Weg verbunden werden können, d.h. es gibt einen Weg \\(u_1, \dots, u_s\\)
in G mit \\(u_1 = u\\) und \\(u_s = v\\).

Der Beste weg zu zeigen, dass ein Graph zusammenhängend ist, ist ihn zu malen.

## Eulersche Graphen

> **Satz 3.11.** Sei \\(G\\) ein zusammenhängender Graph. Dann sind folgende Aussagen äquivalent:
> 1. \\(G\\) ist eulersch.
> 2. Jede Ecke von \\(G\\) hat geraden Grad.

Um zu zeigen dass ein Graph eulersch ist, muss man einfach zeigen dass jede Ecke einen gerade Grad hat.

## Hamiltonsche Graphen

> **Definition 3.12.** Ein (Multi-)Graph heißt hamiltonsch, wenn es einen Kreis in \\(G\\) gibt, der jede Ecke von \\(G\\) enthält. Ein solcher Kreis heißt dann *Hamilton-Kreis* (oder auch hamiltonscher Kreis).

# Prüfercodes
Der Prüfercode ist immer 2 kürzer als die Knoten vom Baum.

## Code zu Baum
1. Mahle die \\(n\\) Knoten des Baumes
2. Erstelle eine Liste \\(1, \dots, n\\)
3. Starte mit der ersten Zahl des Codes: finde die kleinste Zahl in der Liste welche nicht im Code enthalten ist. Verbinde diese Knoten und streiche beide aus ihren sequenzen.
4. Wiederhole Schrtt 3 bis die letzten Zahlen in der Liste stehen. Diese werden miteinander verbunden.

Der Algorithmus ist nicht schwer, aber es empfehlt sich zu üben, üben, üben!

## Baum zu Code
1. Streiche das kleinste Blatt im Baum und notiere sein Elternknoten.
2. Wiederhole Schritt 1 bis die letzten zwei Knoten im Baum vorhanden sind. Diese werden nicht notiert.

# Adjazenzmatrizen

## Wege der Länge \\(\ell\\)
> **Satz 3.18.** Sei \\(G = (E, K)\\) ein Graph mit Eckenmenge \\(E = \\{u_1, \dots, u_n\\}\\) und sei \\(A\\) die Adjazenzmatrix von \\(G\\). Für jede Zahl \\(\ell \in \mathbb{N}\\) ist die Anzahl der Wege in \\(G\\) von \\(u_i\\) nach \\(u_j\\) mit Länge \\(\ell\\) gegeben durch den \\((i, j)\\)-Eintrag der Matrix \\(A^\ell\\).

Um alle Wege der Länge \\(\ell\\) zu berechnen, muss man die potenzierte Adjazenzmatrix aufsummieren.
```julia
# Beispiel um alle Wege der Länge 2 zu berechnen
A = [0 1 0 0 0; 1 0 1 1 1; 0 1 0 1 0; 0 1 1 0 1; 0 1 0 1 0]
l = sum(A^2)
println(l)
```