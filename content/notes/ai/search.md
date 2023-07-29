---
title: "Search"
date: 2023-04-27
katex: true
---

## Heuristics of \\(A^\ast\\)

**Admissability:** heuristic cost is less than or equal to the actual cost to the goal.

\begin{equation}
h(A) \leq \text{actual cost from A to G}
\end{equation}

**Consistency:** heuristic "arc" cost is less than or equal to the actual cost of each arc.

\begin{equation}
h(A) - h(C) \leq \text{cost}~A~\text{to}~C
\end{equation}