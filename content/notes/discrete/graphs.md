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