---
title: "Algebraische Strukturen"
date: 2023-07-03
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

## Formeln für die Eulersche \\(\varphi\\)-Funktion
> **Satz 4.15.** Für die Eulersche \\(\varphi\\)-Funktion gelten folgende Formeln.
> 1. Ist \\(p\\) eine Primzahl und \\(e \in \mathbb{N}\\), so gilt \\[\varphi(p^e) = p^{e−1}(p − 1).\\]
> 2. Sind \\(n_1, \ldots, n_k \in \mathbb{N}\\) paarweise teilerfremd, so gilt für das Produkt \\[\varphi (n_1 \cdot \ldots \cdot n_k) = \varphi(n_1) \cdot \ldots \cdot \varphi(n_k).\\]
> 3. Ist \\(n = \prod_{i=1}^k p_i^{e_i}\\) die Primfaktorzerlegung einer natürlichen Zahl \\(n \geq 2\\), so gilt \\[\varphi(n) = \prod_{i=1}^k p_i^{e_i -1} (p_i -1).\\]