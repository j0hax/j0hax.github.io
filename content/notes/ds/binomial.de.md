---
title: "Binomischer Lehrsatz"
date: 2023-12-26T16:03:40+01:00
---

> **Lemma 1.9** (Binomischer Lehrsatz). Seien \\(x\\) und \\(y\\) Unbestimmte oder Zahlen, die kommutieren, d.h. \\(xy = yx\\). Dann gilt für alle \\(n \in \mathbb{N}\\): \\[(x+y)^n = \sum_{i=0}^{n} \binom{n}{i} x^{n-i}y^i\\]

## Aufgabe 2 (e)

Bestimmen Sie den Koeffizienten von \\(x^5\\) in \\((2x-3)^8\\)

### Lösung.

Nach dem Binomischen Lehrsatz ist \\[(2x-3)^8 = \sum_{i=0}^{8} \binom{8}{i} (2x)^{8-i} (-3)^i.\\]
\\(5 = 8-i \iff i=3,\\) somit erhält man den Koeffizienten für \\(x^5\\) durch \\[\binom{8}{3} \cdot 2^5 \cdot (-3)^3 = 56 \cdot 32 \cdot -27 = -48384.\\]