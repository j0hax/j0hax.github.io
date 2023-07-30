---
title: "(Passive) Reinforcement Learning"
date: 2023-07-05
katex: true
---

Similar to a [Markov Decision Problem]({{< ref "mdp" >}}) with states \\(s \in S\\) and actions \\(a \in A\\), with \\(T(s, a, s^\prime)\\) and \\(R(s, a, s^\prime)\\) **being unknown!**
- States and actions must be tried out

# Passive Reinforcement Learning
The agent learns from its experiences.

## Model-Based

### Step 1: Learn empirical MDP model
- Count outcomes \\(s^\prime\\) for each \\(s, a\\)
- Normalize to give an estimate \\(\hat{T}(s, a, s^\prime)\\)
- Discover each \\(\hat{R}(s, a, s^\prime)\\) when we experience \\((s, a, s^\prime)\\)

### Step 2: Solve the learned MDP
Use value iteration as with normal MDPs. Repeat steps one and two as needed.

## Model-Free
Task: "policy evaluation"
- Input: a fixed policy \\(\pi(s)\\)
- No knowledge of \\(T(s, a, s^\prime)\\) or \\(R(s, a, s^\prime)\\)
- **Goal ist to learn the state values**

In this case the learner has no choice about what actions to take, it just executes the policy and learns from experience. 

There are two methods for Value-learning:
1. Direct Evaluation
2. Temporal Difference Value Learning

And one for Q-Learning.

### Direct Evaluation
Goal: Compute values for each state under \\(\pi\\)

Idea: Average together observed sample values
1. Act according to \\(\pi\\)
2. Every time you visit a state, write down what the sum of discounted rewards turned out to be
3. Average those samples

#### Benefits
- Easy to understand
- No knowledge of \\(T\\) or \\(R\\) required
- Eventually computes the correct average

#### Disadvantages
- Wastes information about state connections
- Each state must be learned separately
- As a result, takes a long time

### Temporal Difference Learning
TD value leaning is a model-free way to do policy evaluation, mimicking Bellman updates with running sample averages.

\begin{align}
\text{sample}_i &= R(s, \pi(s), s^\prime_i) + \gamma V_k^\pi (s^\prime_i)\\\
V\_{k+1}^{\pi} (s) & \leftarrow \frac{1}{n} \sum_i \text{sample}_i
\end{align}

#### Exponential Moving Average
\begin{equation}
\overline{x}\_n = (1 - \alpha) \cdot \overline{x}_{n-1} + \alpha \cdot x_n
\end{equation}
- Makes recent samples more important
- Forgets about the past (distant past values were wrong anyway)
- Decreasing learning rate \\(\alpha\\) can give converging averages

### Q-Learning
Learns the \\(Q\\)-values as-you-go, not values. Makes action selection model-free too.

- Start with \\(Q_0(s,a) = 0\\)
- Given \\(Q_k\\), calculate the depth \\(k+1\\) \\(q\\)-values for all \\(q\\)-states:
\begin{equation}
Q_{k+1}(s,a) \leftarrow \sum_{s^\prime} T(s, a, s^\prime) \left[R(s, a, s^\prime) + \gamma \max_{a^\prime} Q_k (s^\prime, a^\prime) \right]
\end{equation}

1. Receive a sample \\((s,a,s^\prime,r)\\)
2. Consider your old estimate: \\(Q(s, a)\\)
3. Consider your new sample estimate: \\(\text{sample} = R(s, a, s^\prime) + \gamma \max_{a^\prime} Q(s^\prime a^\prime)\\)
4. Incorporate the new estimate into a running average: \\(Q(s, a) \leftarrow (1 - \alpha) Q(s,a) + (\alpha) [\text{sample}]\\)

**Off-policy learning:** Q-learning converges to optimal policy, even with non-optimal actions.
- You have to explore enough
- The learning rate has to (very) gradually decrease

# Active Reinforcement Learning
The agent also needs to decide how to collect experiences. Applies to model-based and model-free. In the lecture, only Q-Learning is covered!

There is a tradeoff between exploration and exploitation: "stay in the usual place that is okay" vs. "risk something new." There are two possibilities to force exploration:
1. random actions \\(\epsilon\\)-greedy: act randomly with a small probability, or (more probably) act on current policy
2. exploration functions: explore areas whose badness is not yet established and eventually stop exploring.

## Exploration Functions
Takes a value estimate \\(u\\) and a visit count \\(n\\), and returns an optimistic utility such as \\(f(u, n) = u + \frac{k}{n}\\)

## Regret
Regret is a measure of your total mistake cost: difference between your (expected) rewards and and optimal (expected) rewards.

Random exploration has a higher regret than exploration functions.

# Approximate Reinforcement Learning
Useful for large state spaces. In realistic scenarios you cannot possibly learn every single state/\\(q\\)-value. There are both too many states to visit and not enough memory.

A slightly different state would not be recognized anymore by non-approximated learning methods. The goal here is to generalize experience to new, similar situations, saving time and space.

**Feature-Based Representations:** describe a state using a vector of features (properties)

**Linear Value Functions:** Using a feature representation, we can write a \\(q\\) function (or value function) for any state using a few weights:
\begin{align}
V(s) &= \sum_{i=1}^n w_i f_i (s)\\\
Q(s, a) &= \sum_{i=1}^n w_i f_i (s, a)
\end{align}
Advantage: our experience is summed up in a few powerful numbers. Disadvantage: states may share features but actually be very different in value!

## Approximate Q-Learning
Adjust weights of active features. If something unexpectedly bad happens, blame the features that were
on: disprefer all states with that state's features.
\begin{align}
\text{transition} &= (s, a, r, s^\prime)\\\
\text{difference} &= \left[ r + \gamma \max_{a^\prime} Q(s^\prime, a^\prime)  \right] - Q(s,a)\\\
Q(s, a) & \leftarrow Q(s, a) + \alpha [\text{difference}]\\\
w_i & \leftarrow w_i + \alpha [\text{difference}] f_i (s, a)
\end{align}

### Least-Squares
Optimization technique, can be used for linear-regression, such as comparing the observation \\(y\\) to the prediction \\(\hat{y}\\).

\begin{align}
\text{total error} &= \sum_i (y_i - \hat{y}_i)^2\\\
&= \sum_i \left( y_i - \sum_k w_k f_k (x_i) \right)^2
\end{align}

## Policy Search