---
title: "Markov Decision Problems"
date: 2023-06-21
katex: true
---

Markov Decision Processes consist of:
- Set of states \\(s_n \in S\\)
- Start state \\(s_0\\)
- Set of actions \\(a_n \in A\\)
- Transition functions \\(T(s,a,s^\prime)\\)
    - Gives the probability of transitioning from state \\(s\\) to \\(s^\prime\\) when taking action \\(a\\)
- Reward functions \\(R(s,a,s^\prime)\\)
    - Typically, a positive value is "good," a negativ is "punishment"
- Discount factor \\(\gamma\\)
    - Coefficient that determines how strongly the next iteration is influenced by the previous
    - Helps the algorithms converge

MDP quantities are
- Policy: Choice of action for each state
- Utility:[^value] sum of (discounted) rewards
- Values: expected future utility from a state (max node)
- Q-Values: expected future utility from a q-state (chance node)

[^value]: "Value" and "utility" are typically regarded as synonyms.

# Value Iteration

- Start with \\(V_0(s) = 0\\): no time steps left means an expected reward sum of zero
- Given vector of \\(V_k(s)\\) values, do one ply of expectimax from each state:
\begin{equation}
V_{k+1}(s) \leftarrow \max_a \sum_{s^\prime} T(s, a, s^\prime) \left[ R(s, a, s^\prime) + \gamma V_k (s^\prime) \right]
\end{equation}
- Repeat until convergence, which yields \\(V^\ast\\)
- Theorem: will converge to unique optimal values
    - Basic idea: approximations get refined towards optimal values
    - Policy may converge long before values do

# Optimal Quantities
- **Optimal utility of a state:** \\(V^*(s)\\) = expected utility starting in \\(s\\) and acting optimally.
- **Optimal utility of a \\(q\\)-state** \\(Q^*(s,a)\\) = expected utility starting out having taken action \\(a\\) from state \\(s\\) and (thereafter) acting optimally
- **The optimal policy:** \\(\pi^*(s)\\) = optimal action from state \\(s\\)

## Policy Extraction
Compute the policy given the optimal (\\(q\\)-)values:
\begin{align}
\pi^* (s) &= \argmax_a \sum_{s^\prime} T(s, a, s^\prime) \left[ R(s, a, s^\prime) + \gamma V^* (s^\prime) \right]\\\
&= \argmax_a Q^* (s,a)
\end{align}

**Example:** statistical policy of when to continue hitting or stand in a game of blackjack