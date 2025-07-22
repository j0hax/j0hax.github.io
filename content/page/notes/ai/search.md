---
title: "Search"
date: 2023-04-27
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

## \\(\alpha / \beta\\) Pruning
An extension of the Minimax algorithm. It is a **depth-first-search** which saves time and space by "pruning" branches where there already are established minimums or maximums.

1. In the beginning, variables are unknown. As such, \\(\alpha = -\infty\\) and \\(\beta = \infty\\)
2. \\(\alpha\\) and \\(\beta\\) propagate between levels. For the _Max_ player, only the \\(\alpha\\) gets changed. For the _Min_ player, only the \\(\beta\\) gets changed.
3. Prune any time \\(\alpha \geq \beta\\)