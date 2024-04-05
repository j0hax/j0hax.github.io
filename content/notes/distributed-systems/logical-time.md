---
title: "Logical Time"
date: 2023-10-22
---

>- Time is a canonical way of establishing ordering between events
>- In distributed systems, time is not a global variable because machines have independently running clocks

# Lamport Timestamps

Propose we have two events, \(A\) and \(B\). Lamport timestamps allow for a "happens before" relationship, \(A \to B.\)

Each node \(p\) maintains a counter \(LT(p)\), which gets incremented when \(p\) performs an action. When \(p\) sends a message, it includes \(LT(p)\). A recieving node \(q\) then updates its own counter to \(\max\{LT(p),~LT(q)\}\)

*...Kind of like TCP's `seqno` to track packet orders?* 

If \(A \to B\), then \(LT(a) < LT(b)\):
- however \(LT(a) < LT(b) \nRightarrow a \to b\)
- possible that \(L(a) = L(b)\) when \(a \ne b\)

This is the main drawback of lamport clocks.

# Vector Clocks

On a system of \(n\) nodes, each node \(i\) maintains a vector \(V\) of length \(n\).

Initially, all clocks are zero, with \(V_i\) being the number of events that occured at node \(i\) and \(V_i[j]\) being the number of events observed by node \(i\) that occurred at node \(j\).

- Local events increment \(V_i[i]\)
- When \(i\) sends a message to \(j\), it includes \(V_i\)
- When \(j\) receives \(V_i\), it updates all elements of \(V_j\) to \(V_j[a]=\max\{V_i[a],~v_j[a]\}\)

Vector clocks address the issues of Lamport Timestamps:
- \(a \to b \iff VC(a) < VC(b)\)
- Transitivity: \(VC(a) < VC(b)\) and \(VC(b) < VC(c)\), then \(VC(a) < VC(c)\)