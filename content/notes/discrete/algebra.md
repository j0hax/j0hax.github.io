---
title: "Algebraische Strukturen"
date: 2023-08-03T11:21:43+02:00
katex: true
---

# Teilbarkeit

## Quersummenregel
Der ultimative Life-Hack, wenn man bei der Primfaktorzerlegung stecken ist.
- Eine Zahl ist durch \\(3\\) teilbar, wenn die Quersumme durch \\(3\\) teilbar ist.
- Eine Zahl ist durch \\(9\\) teilbar, wenn die Quersumme durch \\(9\\) teilbar ist.

**Beispiel:** auf erstem Blick erscheint \\(441\\) wie eine Primzahl, da aber \\(4+4+1 = 9\\) ist die Zahl durch \\(9\\) teilbar.

> **Definition 4.12.** Sei \\(n \in \mathbb{N}\\). Die Menge \\[\mathbb{Z}^*_n = \\{\overline{a} \mid \gcd{(a,n)} = 1\\} \subseteq \mathbb{Z}_n\\] enthält nach Satz 4.11 die invertierbaren Elemente von \\(\mathbb{Z}_n\\).

# Die Eulersche \\(\varphi\\)-Funktion

> **Definition 4.13.** Die Eulersche \\(\varphi\\)-Funktion ist die Abbildung \\[\varphi : \mathbb{N} \mapsto \mathbb{N}, \varphi(n) = \left| \left\\{a \mid 1 \leq a \leq n \land \gcd{(a, n)} = 1 \right\\} \right|.\\] Nach Definition 4.12 ist \\(\varphi(n) = |\mathbb{Z}^*_n|\\) die Anzahl der invertierbaren Elemente in \\(\mathbb{Z}_n\\) .